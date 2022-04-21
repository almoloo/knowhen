import { Indexer, SuggestedParams, Transaction } from "algosdk";
import { ConversionRate, LoanInfo, Oracle, PoolInfo, ReserveAddress, TokenPair, TokenPairInfo } from "./types";
/**
 *
 * Returns information regarding the given loan.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param tokenPair - token pair of the loan
 * @param oracle - oracle to query for prices
 * @param escrowAddr - escrow address to query about
 * @param round - results for specified round
 * @returns Promise<LoanInfo> loan info
 */
declare function getLoanInfo(indexerClient: Indexer, tokenPair: TokenPair, oracle: Oracle, escrowAddr: string, round?: number): Promise<LoanInfo>;
/**
 *
 * Returns information regarding the given loans.
 * Must pass the token pair info, collateral pool info and conversion that you are using.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param tokenPair - token pair of the loan
 * @param tokenPairInfo - token pair info
 * @param collateralPoolInfo - collateral pool info
 * @param borrowPoolInfo - borrow pool info
 * @param conversionRate - conversion rate from collateral to borrow asset
 * @param nextToken - token for retrieving next escrows
 * @param round - results for specified round
 * @returns Promise<{ loans: LoanInfo[], nextToken?: string}> object containing loan infos and next token
 */
declare function getLoansInfo(indexerClient: Indexer, tokenPair: TokenPair, tokenPairInfo: TokenPairInfo, collateralPoolInfo: PoolInfo, borrowPoolInfo: PoolInfo, conversionRate: ConversionRate, nextToken?: string, round?: number): Promise<{
    loans: LoanInfo[];
    nextToken?: string;
}>;
/**
 *
 * Returns a group transaction to liquidate an under-collateralized loan.
 *
 * @param tokenPair - token pair to use for borrow
 * @param oracle - oracle price source
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that will hold the collateral
 * @param reserveAddr - reserve address that will earn percentage of interest paid
 * @param liquidationAmount - amount to liquidate (will send back any over-payment if any)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] liquidate group transaction
 */
declare function prepareLiquidateTransactions(tokenPair: TokenPair, oracle: Oracle, senderAddr: string, escrowAddr: string, reserveAddr: ReserveAddress, liquidationAmount: number | bigint, params: SuggestedParams): Transaction[];
export { getLoanInfo, getLoansInfo, prepareLiquidateTransactions };
