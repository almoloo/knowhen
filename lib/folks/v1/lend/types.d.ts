interface Pool {
    appId: number;
    assetId: number;
    fAssetId: number;
    frAssetId: number;
    assetDecimals: number;
}
interface PoolInfo {
    currentRound: number;
    depositInterestRate: bigint;
    depositInterestIndex: bigint;
    borrowInterestRate: bigint;
    borrowInterestIndex: bigint;
    baseRate: bigint;
    slope1Rate: bigint;
    slope2Rate: bigint;
    retentionRate: bigint;
    totalDeposits: bigint;
    totalBorrows: bigint;
    utilizationRatio: bigint;
    optimalUtilizationRatio: bigint;
    epsilon: bigint;
    latestUpdate: bigint;
    isPaused: boolean;
    isRewardsPaused: boolean;
}
interface LockAndEarn {
    appId: number;
    pool: Pool;
    linkAddr: string;
}
interface LockAndEarnInfo {
    currentRound: number;
    rewardsRatio: bigint;
    timeLocked: bigint;
    deposits: bigint;
    limit: bigint;
}
interface LockedDepositInfo {
    currentRound: number;
    escrowAddress: string;
    userAddress: string;
    lockedBalance: bigint;
    release: bigint;
}
interface RewardsAggregator {
    appId: number;
    pool: Pool;
}
interface AssetRewardsInfo {
    assetId: number;
    periodRewards: {
        claimed: bigint;
        limit: bigint;
        conversionRate: bigint;
    }[];
}
interface RewardsAggregatorInfo {
    currentRound: number;
    vestingPeriodLengths: bigint[];
    assetsRewards: AssetRewardsInfo[];
}
interface StakedRewardsInfo {
    currentRound: number;
    escrowAddress: string;
    userAddress: string;
    start: bigint;
    latest: bigint;
    end: bigint;
    rewards: {
        assetId: number;
        claimed: bigint;
        total: bigint;
    }[];
}
interface TokenPair {
    appId: number;
    collateralPool: Pool;
    borrowPool: Pool;
    linkAddr: string;
}
interface TokenPairInfo {
    currentRound: number;
    loanToValueRatio: bigint;
    liquidationThreshold: bigint;
    safetyThreshold: bigint;
}
interface LoanInfo {
    currentRound: number;
    escrowAddress: string;
    userAddress: string;
    borrowed: bigint;
    collateralBalance: bigint;
    borrowBalance: bigint;
    borrowBalanceLiquidationThreshold: bigint;
    healthFactor: bigint;
}
interface Oracle {
    oracle1AppId: number;
    oracle2AppId?: number;
    oracleAdapterAppId: number;
    decimals: number;
}
interface OraclePrice {
    price: bigint;
    timestamp: bigint;
}
interface OraclePrices {
    currentRound: number;
    prices: Record<number, OraclePrice>;
}
interface ConversionRate {
    rate: bigint;
    decimals: number;
}
declare type ReserveAddress = string;
export { Pool, PoolInfo, LockAndEarn, LockAndEarnInfo, LockedDepositInfo, RewardsAggregator, AssetRewardsInfo, RewardsAggregatorInfo, StakedRewardsInfo, TokenPair, TokenPairInfo, LoanInfo, Oracle, OraclePrice, OraclePrices, ConversionRate, ReserveAddress, };
