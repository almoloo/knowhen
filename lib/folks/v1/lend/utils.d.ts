import { Indexer } from "algosdk";
import { ConversionRate, LoanInfo, PoolInfo, TokenPair, TokenPairInfo } from "./types";
/**
 *
 * Derives loan info from escrow account.
 *
 * @param escrow - escrow account with structure https://developer.algorand.org/docs/rest-apis/indexer/#account
 * @param tokenPair - token pair of the loan
 * @param tokenPairInfo - token pair info
 * @param collateralPoolInfo - collateral pool info
 * @param borrowPoolInfo - borrow pool info
 * @param conversionRate - conversion rate from collateral to borrow asset
 * @param currentRound - results for specified round
 * @returns LoanInfo loan info
 */
declare function loanInfo(escrow: any, tokenPair: TokenPair, tokenPairInfo: TokenPairInfo, collateralPoolInfo: PoolInfo, borrowPoolInfo: PoolInfo, conversionRate: ConversionRate, currentRound: number): LoanInfo;
/**
 *
 * Returns escrow accounts for given token pair.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param tokenPair - token pair to query about
 * @param nextToken - token for retrieving next escrows
 * @param round - results for specified round
 * @returns response with structure https://developer.algorand.org/docs/rest-apis/indexer/#searchforaccounts-response-200
 */
declare function getEscrows(indexerClient: Indexer, tokenPair: TokenPair, nextToken?: string, round?: number): Promise<any>;
export { loanInfo, getEscrows };
