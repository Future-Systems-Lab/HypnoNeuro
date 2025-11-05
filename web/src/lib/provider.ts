// Rights Reserved, Unlicensed
import { ethers } from "ethers";
export const provider = new ethers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_RPC_URL,
  { chainId: 31337, name: "hardhat", ensAddress: null }
);
