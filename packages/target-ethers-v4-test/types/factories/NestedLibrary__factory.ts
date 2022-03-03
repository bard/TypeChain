/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { NestedLibrary } from "../NestedLibrary";

export class NestedLibrary__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NestedLibrary {
    return new Contract(address, _abi, signerOrProvider) as NestedLibrary;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
