import { SkipClient } from "@skip-go/client";

const client = new SkipClient();

const main = async () => {
  const chains = await client.chains();
  console.log(chains);

  const route = await client.route({
    sourceAssetDenom: "uusdc",
    sourceAssetChainID: "noble-1",
    destAssetDenom: "utia",
    destAssetChainID: "celestia",
    amountIn: "1000000", // 1 uusdc
    smartSwapOptions: {
      splitRoutes: true,
    },
  });
  console.log(route);
};

main();
