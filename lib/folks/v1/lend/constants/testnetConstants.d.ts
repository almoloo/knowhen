import { Oracle, Pool, ReserveAddress, TokenPair } from "../types";
declare type TestnetPoolKey = "ALGO" | "USDC" | "USDt" | "goBTC" | "goETH" | "xUSD";
declare const TestnetPools: Record<TestnetPoolKey, Pool>;
declare type TestnetTokenPairKey = "ALGO-USDC" | "ALGO-USDt" | "ALGO-goBTC" | "ALGO-goETH" | "ALGO-xUSD" | "USDC-ALGO" | "USDC-USDt" | "USDC-goBTC" | "USDC-goETH" | "USDC-xUSD" | "USDt-ALGO" | "USDt-USDC" | "USDt-goBTC" | "USDt-goETH" | "USDt-xUSD" | "goBTC-ALGO" | "goBTC-USDC" | "goBTC-USDt" | "goBTC-goETH" | "goBTC-xUSD" | "goETH-ALGO" | "goETH-USDC" | "goETH-USDt" | "goETH-goBTC" | "goETH-xUSD" | "xUSD-ALGO" | "xUSD-USDC" | "xUSD-USDt" | "xUSD-goBTC" | "xUSD-goETH";
declare const TestnetTokenPairs: Record<TestnetTokenPairKey, TokenPair>;
declare const TestnetOracle: Oracle;
declare const TestnetReserveAddress: ReserveAddress;
export { TestnetPoolKey, TestnetPools, TestnetTokenPairKey, TestnetTokenPairs, TestnetOracle, TestnetReserveAddress, };
