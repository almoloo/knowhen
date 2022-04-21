import { Indexer } from "algosdk";
import { ConversionRate, Oracle, OraclePrices } from "./types";
/**
 *
 * Returns oracle prices for given oracle and provided assets.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param oracle - oracle to query
 * @param assets - assets to get prices for
 * @returns OraclePrices oracle prices
 */
declare function getOraclePrices(indexerClient: Indexer, oracle: Oracle, assets: number[]): Promise<OraclePrices>;
/**
 *
 * Returns conversion rate between two prices.
 *
 * @param collateralPrice - collateral asset price
 * @param borrowPrice - borrow asset price
 * @returns ConversionRate conversion rate
 */
declare function getConversionRate(collateralPrice: bigint, borrowPrice: bigint): ConversionRate;
export { getOraclePrices, getConversionRate };
