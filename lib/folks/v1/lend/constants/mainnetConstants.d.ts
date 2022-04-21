import { Oracle, Pool, ReserveAddress, TokenPair } from "../types";
declare type MainnetPoolKey = "ALGO" | "USDC" | "USDt" | "goBTC" | "goETH" | "gALGO3";
declare const MainnetPools: Record<MainnetPoolKey, Pool>;
declare type MainnetTokenPairKey = "ALGO-USDC" | "ALGO-USDt" | "ALGO-goBTC" | "ALGO-goETH" | "USDC-ALGO" | "USDC-USDt" | "USDC-goBTC" | "USDC-goETH" | "USDt-ALGO" | "USDt-USDC" | "USDt-goBTC" | "USDt-goETH" | "goBTC-ALGO" | "goBTC-USDC" | "goBTC-USDt" | "goBTC-goETH" | "goETH-ALGO" | "goETH-USDC" | "goETH-USDt" | "goETH-goBTC" | "gALGO3-ALGO" | "gALGO3-USDC" | "gALGO3-USDt" | "gALGO3-goBTC" | "gALGO3-goETH";
declare const MainnetTokenPairs: Record<MainnetTokenPairKey, TokenPair>;
declare const MainnetOracle: Oracle;
declare const MainnetReserveAddress: ReserveAddress;
export { MainnetPoolKey, MainnetPools, MainnetTokenPairKey, MainnetTokenPairs, MainnetOracle, MainnetReserveAddress, };
