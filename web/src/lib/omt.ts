// Rights Reserved, Unlicensed
import { ethers } from "ethers";
import { provider } from "./provider";

const abi = [
  "function balanceOf(address) view returns (uint256)",
  "function confirmMeds() public returns (bool)"
];

const address =
  process.env.NEXT_PUBLIC_OMT_ADDRESS ||
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const omt = new ethers.Contract(address, abi, provider);
