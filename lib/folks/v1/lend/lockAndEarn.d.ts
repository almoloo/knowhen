import { LockAndEarn, LockAndEarnInfo, LockedDepositInfo, Pool } from "./types";
import { Account, Indexer, SuggestedParams, Transaction } from "algosdk";
/**
 *
 * Returns array of lock and earns.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param pool - pool to query about
 * @returns LockAndEarn[] lock and earns
 */
declare function getLockAndEarns(indexerClient: Indexer, pool: Pool): Promise<LockAndEarn[]>;
/**
 *
 * Returns information regarding the given lock and earn application.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param appId - lock and earn app id
 * @returns LockAndEarnInfo[] lock and earn info
 */
declare function getLockAndEarnInfo(indexerClient: Indexer, appId: number): Promise<LockAndEarnInfo>;
/**
 *
 * Returns a group transaction to provide liquidity in lock and earn.
 *
 * @param lockAndEarn - lock and earn
 * @param senderAddr - account address for the sender
 * @param depositAmount - amount to deposit (will be locked)
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns { txns: Transaction[], escrow: Account } object containing group transaction and escrow account
 */
declare function prepareProvideLiquidityTransactions(lockAndEarn: LockAndEarn, senderAddr: string, depositAmount: number | bigint, params: SuggestedParams): ({
    txns: Transaction[];
    escrow: Account;
});
/**
 *
 * Returns information regarding the locked deposit.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param lockAndEarn - lock and earn of the deposit
 * @param escrowAddr - escrow address to query about
 * @param round - results for specified round
 * @returns Promise<LoanInfo> loan info
 */
declare function getLockedDepositInfo(indexerClient: Indexer, lockAndEarn: LockAndEarn, escrowAddr: string, round?: number): Promise<LockedDepositInfo>;
/**
 *
 * Returns a transaction to claim locked deposit.
 *
 * @param lockAndEarn - lock and earn
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that will hold the collateral
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction claim locked deposit transaction
 */
declare function prepareClaimLockedDepositTransactions(lockAndEarn: LockAndEarn, senderAddr: string, escrowAddr: string, params: SuggestedParams): Transaction;
export { getLockAndEarns, getLockAndEarnInfo, prepareProvideLiquidityTransactions, getLockedDepositInfo, prepareClaimLockedDepositTransactions, };
