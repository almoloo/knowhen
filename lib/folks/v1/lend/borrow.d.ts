import { Account, Indexer, SuggestedParams, Transaction } from "algosdk";
import { Oracle, ReserveAddress, TokenPair, TokenPairInfo } from "./types";
/**
 *
 * Returns information regarding the given token pair.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param tokenPair - token pair to query about
 * @returns Promise<TokenPairInfo[]> token pair info
 */
declare function getTokenPairInfo(indexerClient: Indexer, tokenPair: TokenPair): Promise<TokenPairInfo>;
/**
 *
 * Returns a group transaction to add escrow before borrowing.
 *
 * @param tokenPair - token pair to add escrow for
 * @param senderAddr - account address for the sender
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns { txns: Transaction[], escrow: Account } object containing group transaction and escrow account
 */
declare function prepareAddEscrowTransactions(tokenPair: TokenPair, senderAddr: string, params: SuggestedParams): ({
    txns: Transaction[];
    escrow: Account;
});
/**
 *
 * Returns a group transaction to borrow.
 *
 * @param tokenPair - token pair to use for borrow
 * @param oracle - oracle price source
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that will hold the collateral
 * @param collateralAmount - collateral amount to send
 * @param borrowAmount - borrow amount to receive (max amount if undefined)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] borrow group transaction
 */
declare function prepareBorrowTransactions(tokenPair: TokenPair, oracle: Oracle, senderAddr: string, escrowAddr: string, collateralAmount: number | bigint, borrowAmount: number | bigint | undefined, params: SuggestedParams): Transaction[];
/**
 *
 * Returns a transaction to increase collateral.
 *
 * @param tokenPair - token pair to use for borrow
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that will hold the collateral
 * @param collateralAmount - collateral amount to send
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction increase collateral transaction
 */
declare function prepareIncreaseCollateralTransaction(tokenPair: TokenPair, senderAddr: string, escrowAddr: string, collateralAmount: number | bigint, params: SuggestedParams): Transaction;
/**
 *
 * Returns a group transaction to reduce collateral.
 *
 * @param tokenPair - token pair to use for borrow
 * @param oracle - oracle price source
 * @param sender - account address for the sender
 * @param escrow - escrow address that will hold the collateral
 * @param reduceAmount - collateral amount to reduce by (max amount if undefined)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] reduce collateral group transaction
 */
declare function prepareReduceCollateralTransactions(tokenPair: TokenPair, oracle: Oracle, sender: string, escrow: string, reduceAmount: number | bigint | undefined, params: SuggestedParams): Transaction[];
/**
 *
 * Returns a group transaction to increase borrow.
 *
 * @param tokenPair - token pair to use for borrow
 * @param oracle - oracle price source
 * @param senderAddr - account address for the sender
 * @param escrow - escrow address that will hold the collateral
 * @param increaseAmount - borrow amount to increase by (max amount if undefined)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] increase borrow group transaction
 */
declare function prepareIncreaseBorrowTransactions(tokenPair: TokenPair, oracle: Oracle, senderAddr: string, escrow: string, increaseAmount: number | bigint, params: SuggestedParams): Transaction[];
/**
 *
 * Returns a group transaction to increase borrow.
 *
 * @param tokenPair - token pair to use for borrow
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that will hold the collateral
 * @param reserveAddr - reserve address that will earn percentage of interest paid
 * @param repayAmount - amount to repay (will send back any over-payment if any)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] increase borrow group transaction
 */
declare function prepareRepayTransactions(tokenPair: TokenPair, senderAddr: string, escrowAddr: string, reserveAddr: ReserveAddress, repayAmount: number | bigint, params: SuggestedParams): Transaction[];
export { getTokenPairInfo, prepareAddEscrowTransactions, prepareBorrowTransactions, prepareIncreaseCollateralTransaction, prepareReduceCollateralTransactions, prepareIncreaseBorrowTransactions, prepareRepayTransactions, };
