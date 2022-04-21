import { ConversionRate } from "./types";
export declare function divVariable(n1: bigint, n2: bigint, dec: number): bigint;
/**
 * Calculates the utilization ratio of the pool.
 * @param totalBorrows (Xdp)
 * @param totalDeposits (Xdp)
 * @return utilizationRate (14dp)
 */
declare function calcUtilizationRatio(totalBorrows: bigint, totalDeposits: bigint): bigint;
/**
 * Calculates the current interest index. If epsilon undefined then deposit interest index, else borrow interest index.
 * @param interestIndex (14dp)
 * @param interestRate (14dp)
 * @param latestUpdate (0dp)
 * @param epsilon (14dp)
 * @return interestIndex (14dp)
 */
declare function calcInterestIndex(interestIndex: bigint, interestRate: bigint, latestUpdate: bigint, epsilon?: bigint): bigint;
/**
 * Calculates the threshold of under-collaterization of the loan
 * @param collateralAmount (Xdp)
 * @param depositInterestIndex (14dp)
 * @param s2 (14dp)
 * @param conversionRate (<r_dec>dp)
 * @param conversionRateDec (0dp)
 * @return threshold (Xdp)
 */
export declare function calcThreshold(collateralAmount: bigint, depositInterestIndex: bigint, s2: bigint, conversionRate: bigint, conversionRateDec: number): bigint;
/**
 * Calculates the borrow balance of the loan at time t
 * @param borrowBalanceAtLastOperation (Xdp)
 * @param borrowInterestIndex (14dp)
 * @param borrowInterestIndexAtLastOperation (14dp)
 * @return borrowBalance (Xdp)
 */
export declare function calcBorrowBalance(borrowBalanceAtLastOperation: bigint, borrowInterestIndex: bigint, borrowInterestIndexAtLastOperation: bigint): bigint;
/**
 * Calculates the health factor of the loan at time t
 * @param threshold (Xdp)
 * @param borrowBalance (Xdp)
 * @return healthFactor (14dp)
 */
declare function calcHealthFactor(threshold: bigint, borrowBalance: bigint): bigint;
/**
 * Calculate the conversion rate between two assets
 * @param collateralPrice (Xdp)
 * @param borrowPrice (Xdp)
 * @return { rate: bigint, decimals: number } (14dp)
 */
declare function calcConversionRate(collateralPrice: bigint, borrowPrice: bigint): ConversionRate;
export { calcUtilizationRatio, calcInterestIndex, calcHealthFactor, calcConversionRate };
