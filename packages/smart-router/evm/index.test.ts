import { expect, test } from 'vitest'
import * as exportedNameSpaces from './index'

test('exports', () => {
  expect(Object.keys(exportedNameSpaces)).toMatchInlineSnapshot(`
    [
      "BIG_INT_TEN",
      "BIPS_BASE",
      "MIN_BNB",
      "BETTER_TRADE_LESS_HOPS_THRESHOLD",
      "SMART_ROUTER_ADDRESSES",
      "V2_ROUTER_ADDRESS",
      "STABLE_SWAP_INFO_ADDRESS",
      "BASES_TO_CHECK_TRADES_AGAINST",
      "ADDITIONAL_BASES",
      "CUSTOM_BASES",
      "BASE_SWAP_COST_STABLE_SWAP",
      "COST_PER_EXTRA_HOP_STABLE_SWAP",
      "BASE_SWAP_COST_V2",
      "COST_PER_EXTRA_HOP_V2",
      "COST_PER_UNINIT_TICK",
      "BASE_SWAP_COST_V3",
      "COST_PER_INIT_TICK",
      "COST_PER_HOP_V3",
      "usdGasTokensByChain",
      "BATCH_MULTICALL_CONFIGS",
      "V2_FEE_PATH_PLACEHOLDER",
      "MSG_SENDER",
      "ADDRESS_THIS",
      "MIXED_ROUTE_QUOTER_ADDRESSES",
      "V3_QUOTER_ADDRESSES",
      "V3_TICK_LENS_ADDRESSES",
      "feeOnTransferDetectorAddresses",
      "fetchTokenFeeOnTransfer",
      "fetchTokenFeeOnTransferBatch",
      "SmartRouter",
      "SwapRouter",
      "getPoolAddress",
      "getRouteTypeByPools",
      "Transformer",
      "PoolType",
      "RouteType",
      "V4Router",
    ]
  `)
})

test('SmartRouter exports', () => {
  expect(Object.keys(exportedNameSpaces.SmartRouter)).toMatchInlineSnapshot(`
    [
      "getCheckAgainstBaseTokens",
      "getPairCombinations",
      "getBestTrade",
      "getV2PoolsOnChain",
      "getStablePoolsOnChain",
      "getV3PoolsWithoutTicksOnChain",
      "getV3PoolSubgraph",
      "getV2PoolSubgraph",
      "getAllV3PoolsFromSubgraph",
      "v3PoolTvlSelector",
      "v2PoolTvlSelector",
      "createHybridPoolProvider",
      "createStaticPoolProvider",
      "createV2PoolsProviderByCommonTokenPrices",
      "getV2PoolsWithTvlByCommonTokenPrices",
      "createGetV2CandidatePools",
      "getV2CandidatePools",
      "v3PoolsOnChainProviderFactory",
      "getV3PoolsWithTvlFromOnChain",
      "getV3PoolsWithTvlFromOnChainFallback",
      "getV3PoolsWithTvlFromOnChainStaticFallback",
      "createGetV3CandidatePoolsWithFallbacks",
      "createGetV3CandidatePools",
      "getV3CandidatePools",
      "getStableCandidatePools",
      "getCandidatePools",
      "createPoolProvider",
      "createQuoteProvider",
      "createOffChainQuoteProvider",
      "createPoolQuoteGetter",
      "PancakeMulticallProvider",
      "createCommonTokenPriceProvider",
      "getTokenUsdPricesBySubgraph",
      "getCommonTokenPricesBySubgraph",
      "getCommonTokenPricesByLlma",
      "getCommonTokenPricesByWalletApi",
      "getCommonTokenPrices",
      "v2PoolSubgraphSelection",
      "v3PoolSubgraphSelection",
      "APISchema",
      "Transformer",
      "getExecutionPrice",
      "getPoolAddress",
      "isV2Pool",
      "isV3Pool",
      "isStablePool",
      "getMidPrice",
      "involvesCurrency",
      "encodeMixedRouteToPath",
      "buildBaseRoute",
      "getOutputOfPools",
      "partitionMixedRouteByProtocol",
      "log",
      "logger",
      "getPriceImpact",
      "maximumAmountIn",
      "metric",
      "minimumAmountOut",
    ]
  `)
})
