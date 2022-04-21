import { Account, Indexer, SuggestedParams, Transaction } from "algosdk";
import { RewardsAggregator, RewardsAggregatorInfo, StakedRewardsInfo } from "./types";
/**
 *
 * Returns information regarding the given rewards aggregator application.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param appId - rewards aggregator app id
 * @returns RewardsAggregatorInfo rewards aggregator info
 */
declare function getRewardsAggregatorInfo(indexerClient: Indexer, appId: number): Promise<RewardsAggregatorInfo>;
/**
 *
 * Returns a group transaction to immediately exchange frAsset for rewards.
 *
 * @param rewardsAggregator - rewards aggregator to exchange rewards using
 * @param senderAddr - account address for the sender
 * @param rewardAssetIds - asset ids for the rewards given to the user
 * @param frAssetAmount - amount of frAsset to send
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction[] exchange group transaction
 */
declare function prepareRewardImmediateExchangeTransactions(rewardsAggregator: RewardsAggregator, senderAddr: string, rewardAssetIds: number[], frAssetAmount: number | bigint, params: SuggestedParams): Transaction[];
/**
 *
 * Returns a group transaction to exchange frAsset for rewards staked.
 *
 * @param rewardsAggregator - rewards aggregator to exchange rewards using
 * @param senderAddr - account address for the sender
 * @param period - number from 1-4 indicate staking period
 * @param frAssetAmount - amount of frAsset to send
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns { txns: Transaction[], escrow: Account } object containing group transaction and escrow account
 */
declare function prepareRewardStakedExchangeTransactions(rewardsAggregator: RewardsAggregator, senderAddr: string, period: number, frAssetAmount: number | bigint, params: SuggestedParams): ({
    txns: Transaction[];
    escrow: Account;
});
/**
 *
 * Returns information regarding the staked rewards.
 *
 * @param indexerClient - Algorand indexer client to query
 * @param rewardsAggregator - rewards aggregator
 * @param escrowAddr - escrow address to query about
 * @param round - results for specified round
 * @returns Promise<StakedRewardsInfo> staked rewards info
 */
declare function getStakedRewardsInfo(indexerClient: Indexer, rewardsAggregator: RewardsAggregator, escrowAddr: string, round?: number): Promise<StakedRewardsInfo>;
/**
 *
 * Returns a transaction to claim staked rewards.
 *
 * @param rewardsAggregator - rewards aggregator to exchange rewards using
 * @param senderAddr - account address for the sender
 * @param escrowAddr - escrow address that holds the staked rewards parameters
 * @param rewardAssetIds - asset ids for the rewards given to the user
 * @param params - suggested params for the transactions with the fees overwritten
 * @returns Transaction claim stake rewards transaction
 */
declare function prepareClaimRewardsTransaction(rewardsAggregator: RewardsAggregator, senderAddr: string, escrowAddr: string, rewardAssetIds: number[], params: SuggestedParams): Transaction;
export { getRewardsAggregatorInfo, prepareRewardImmediateExchangeTransactions, prepareRewardStakedExchangeTransactions, getStakedRewardsInfo, prepareClaimRewardsTransaction, };
