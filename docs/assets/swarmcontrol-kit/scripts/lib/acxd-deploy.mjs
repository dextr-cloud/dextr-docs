/** SAMPLE CODE — Not a supported installer or final solution. Review, adapt, and test in a non-production ACXD workspace before use. Never run against a production workspace. */
import { sleep } from "./flow-helpers.mjs";

export function resolveDeployment(deployments, deploymentId) {
  const items = deployments?.items ?? [];
  if (!items.length) throw new Error("No application deployments found");
  const dep = items.find((d) => d.deploymentId === deploymentId);
  if (!dep) throw new Error(`Configured deploymentId ${deploymentId} not found on application`);
  return dep;
}

export async function waitForBuild(client, sdk, appId, buildId, { attempts = 60, intervalMs = 3000 } = {}) {
  let last = "UNKNOWN";
  for (let i = 0; i < attempts; i++) {
    const st = await client.send(new sdk.GetApplicationBuildCommand({ applicationIdentifier: appId, buildIdentifier: buildId }));
    last = st.status;
    if (st.status === "BUILT") return st;
    if (st.status === "FAILED") throw new Error(`Build ${buildId} failed: ${st.failureReason || JSON.stringify(st.errors ?? st)}`);
    await sleep(intervalMs);
  }
  throw new Error(`Build ${buildId} did not reach BUILT (last status: ${last})`);
}

export async function waitForDeployment(client, sdk, appId, deploymentId, { attempts = 60, intervalMs = 3000 } = {}) {
  let last = "UNKNOWN";
  for (let i = 0; i < attempts; i++) {
    const st = await client.send(
      new sdk.GetApplicationDeploymentCommand({ applicationIdentifier: appId, deploymentIdentifier: deploymentId })
    );
    last = st.deploymentStatus || st.status || last;
    if (last === "deployed") return st;
    if (/fail/i.test(String(last))) throw new Error(`Deployment ${deploymentId} failed: ${JSON.stringify(st)}`);
    await sleep(intervalMs);
  }
  throw new Error(`Deployment ${deploymentId} not deployed (last status: ${last})`);
}

/** Build the application and point the configured deployment at the new build. */
export async function buildAndDeploy(client, sdk, { appId, deploymentId, lang, description }) {
  const deps = await client.send(new sdk.ListApplicationDeploymentsCommand({ applicationIdentifier: appId }));
  const dep = resolveDeployment(deps, deploymentId);
  const build = await client.send(
    new sdk.CreateApplicationBuildCommand({
      applicationIdentifier: appId,
      description,
      languageSettings: [{ languageCode: lang, useLex3pAsr: false }],
    })
  );
  await waitForBuild(client, sdk, appId, build.buildId);
  await client.send(
    new sdk.UpdateApplicationDeploymentCommand({
      applicationIdentifier: appId,
      deploymentIdentifier: dep.deploymentId,
      buildIdentifier: build.buildId,
      environment: dep.environment,
      languageCodes: [lang],
    })
  );
  const after = await waitForDeployment(client, sdk, appId, dep.deploymentId);
  return {
    priorBuildId: dep.buildId,
    buildId: build.buildId,
    deploymentId: dep.deploymentId,
    alias: after.deploymentAlias ?? dep.deploymentAlias,
  };
}

export async function redeployBuild(client, sdk, { appId, deploymentId, lang, buildId }) {
  const deps = await client.send(new sdk.ListApplicationDeploymentsCommand({ applicationIdentifier: appId }));
  const dep = resolveDeployment(deps, deploymentId);
  await waitForBuild(client, sdk, appId, buildId);
  await client.send(
    new sdk.UpdateApplicationDeploymentCommand({
      applicationIdentifier: appId,
      deploymentIdentifier: dep.deploymentId,
      buildIdentifier: buildId,
      environment: dep.environment,
      languageCodes: [lang],
    })
  );
  return waitForDeployment(client, sdk, appId, dep.deploymentId);
}
