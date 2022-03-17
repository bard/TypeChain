/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Listener } from "@ethersproject/providers";
import type { Event, EventFilter } from "ethers";

/**
 * From `U` assign properties to `T` (just like Object.assign)
 */
type Assign<T extends object, U extends object> = {
  [P in keyof T | keyof U]: P extends keyof U
    ? U[P]
    : P extends keyof T
    ? T[P]
    : never;
};

export interface TypedEvent<
  TArgsArray extends Array<any> = any,
  TArgsObject extends object = any
> extends Event {
  args: Extract<keyof TArgsArray, keyof TArgsObject> extends never
    ? TArgsArray & TArgsObject
    : Assign<TArgsObject, TArgsArray> & Event["args"];
}

type _ = TypedEvent<[number, number], { value1: number; value2: number }>;

export interface TypedEventFilter<_TEvent extends TypedEvent>
  extends EventFilter {}

export interface TypedListener<TEvent extends TypedEvent> {
  (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}

type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;

export interface OnEvent<TRes> {
  <TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
    listener: TypedListener<TEvent>
  ): TRes;
  (eventName: string, listener: Listener): TRes;
}

export type MinEthersFactory<C, ARGS> = {
  deploy(...a: ARGS[]): Promise<C>;
};

export type GetContractTypeFromFactory<F> = F extends MinEthersFactory<
  infer C,
  any
>
  ? C
  : never;

export type GetARGsTypeFromFactory<F> = F extends MinEthersFactory<any, any>
  ? Parameters<F["deploy"]>
  : never;
