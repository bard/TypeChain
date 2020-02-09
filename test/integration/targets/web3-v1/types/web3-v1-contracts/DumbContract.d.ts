/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class DumbContract extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions);
  clone(): DumbContract;
  methods: {
    arrayParamLength(): TransactionObject<string>;

    countupForEther(): TransactionObject<void>;

    someAddress(): TransactionObject<string>;

    twoUnnamedArgs(
      arg0: number | string,
      arg1: number | string,
      ret: number | string,
    ): TransactionObject<string>;

    returnSigned(offset: number | string): TransactionObject<string>;

    callWithBoolean(boolParam: boolean): TransactionObject<boolean>;

    callWithArray2(arrayParam: (number | string)[]): TransactionObject<(string)[]>;

    testAddress(a: string): TransactionObject<string>;

    counter(): TransactionObject<string>;

    testString(a: string): TransactionObject<string>;

    callWithBytes(byteParam: string | number[]): TransactionObject<string>;

    callWithBooleanArray(boolArrayParam: (boolean)[]): TransactionObject<(boolean)[]>;

    counterArray(arg0: number | string): TransactionObject<string>;

    countup(offset: number | string): TransactionObject<void>;

    returnAll(): TransactionObject<{
      0: string;
      1: string;
    }>;

    SOME_VALUE(): TransactionObject<boolean>;

    counterWithOffset(offset: number | string): TransactionObject<string>;

    dynamicByteArray(): TransactionObject<string>;

    testVoidReturn(): TransactionObject<void>;

    testSmallUint(): TransactionObject<string>;

    callWithDynamicByteArray(dynamicBytes: string | number[]): TransactionObject<string>;

    byteArray(): TransactionObject<string>;

    callWithArray(arrayParam: (number | string)[]): TransactionObject<string>;

    returnSmallUint(): TransactionObject<string>;
  };
  events: {
    Deposit: ContractEvent<{
      from: string;
      value: string;
      0: string;
      1: string;
    }>;
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter;
  };
}