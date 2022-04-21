import { Indexer, SuggestedParams, Transaction } from "algosdk";
import { Pool, PoolInfo } from "./types";
/**
 *
 * Returns information regarding the given pool.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param pool - pool to query about
 * @returns PoolInfo[] pool info
 */
declare function getPoolInfo(indexerClient: Indexer, pool: Pool): Promise<PoolInfo>;
/**
 *
 * Returns a group transaction to deposit into the specified pool.
 *
 * @param pool - pool to deposit into
 * @param senderAddr - account address for the sender
 * @param depositAmount - integer amount of algo / asset to deposit
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] deposit group transaction
 */
declare function prepareDepositTransactions(pool: Pool, senderAddr: string, depositAmount: number | bigint, params: SuggestedParams): Transaction[];
/**
 *
 * Returns a group transaction to withdraw from the specified pool.
 *
 * @param pool - pool to deposit into
 * @param senderAddr - account address for the sender
 * @param withdrawAmount - integer amount of the fAsset to withdraw
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] deposit group transaction
 */
declare function prepareWithdrawTransactions(pool: Pool, senderAddr: string, withdrawAmount: number | bigint, params: SuggestedParams): Transaction[];
export { getPoolInfo, prepareDepositTransactions, prepareWithdrawTransactions };
