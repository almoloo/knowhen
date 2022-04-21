/// <reference types="node" />
import { SuggestedParams, Transaction } from "algosdk";
import { TealKeyValue } from "algosdk/dist/types/src/client/v2/algod/models/types";
declare const enc: TextEncoder;
/**
 * Transfer algo or asset. 0 assetId indicates algo transfer, else asset transfer.
 */
declare function transferAlgoOrAsset(assetId: number, from: string, to: string, amount: number | bigint, params: SuggestedParams): Transaction;
declare function unixTime(): number;
/**
 * Convert an int to its hex representation with a fixed length of 8 bytes.
 */
declare function fromIntToBytes8Hex(num: number | bigint): string;
declare function getParsedValueFromState(state: TealKeyValue[], key: string, encoding?: BufferEncoding): string | bigint | undefined;
export { enc, transferAlgoOrAsset, unixTime, fromIntToBytes8Hex, getParsedValueFromState };
