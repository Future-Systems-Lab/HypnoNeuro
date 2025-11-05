// Rights Reserved, Unlicensed
'use client'
import { useState } from 'react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'

const abi = [
  { "inputs": [], "name": "confirmMedications", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [], "name": "completeModule", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [{"internalType":"address","name":"account","type":"address"}], "name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}], "stateMutability":"view","type":"function" }
]

async function ensureLocalhost() {
  const ethereum = (window as any).ethereum
  await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x7A69' }] }).catch(async (e:any) => {
    if (e.code === 4902) {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ chainId: '0x7A69', chainName: 'Hardhat Localhost', rpcUrls: ['http://127.0.0.1:8545'], nativeCurrency: { name:'ETH', symbol:'ETH', decimals:18 } }]
      })
    } else { throw e }
  })
}

async function getSignerAndContract() {
  const provider = new BrowserProvider((window as any).ethereum)
  const signer = await provider.getSigner()
  const contract = new Contract(process.env.NEXT_PUBLIC_OMT_ADDRESS as string, abi, signer)
  return { signer, contract }
}

export default function OMTDemo() {
  const [addr,setAddr] = useState<string>('') 
  const [bal,setBal] = useState<string>('0')
  const [status,setStatus] = useState<string>('')

  async function connect() {
    try {
      await ensureLocalhost()
      await (window as any).ethereum.request({ method:'eth_requestAccounts' })
      const { signer, contract } = await getSignerAndContract()
      setAddr(await signer.getAddress())
      const b = await contract.balanceOf(await signer.getAddress())
      setBal(formatUnits(b,18))
      setStatus('Connected to Localhost 8545')
    } catch(e:any){ setStatus(e.message||'error') }
  }

  async function confirmMeds() {
    try {
      setStatus('Confirming meds…')
      await ensureLocalhost()
      const { contract } = await getSignerAndContract()
      const tx = await contract.confirmMedications()
      await tx.wait()
      setStatus('Medications confirmed')
    } catch(e:any){ setStatus(e.message||'error') }
  }

  async function completeModule() {
    try {
      setStatus('Completing module…')
      await ensureLocalhost()
      const { signer, contract } = await getSignerAndContract()
      const tx = await contract.completeModule()
      await tx.wait()
      const b = await contract.balanceOf(await signer.getAddress())
      setBal(formatUnits(b,18))
      setStatus('Module completed, tokens minted')
    } catch(e:any){ setStatus(e.message||'error') }
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">OrthomolecularToken Demo</h1>
      <div className="space-y-1">
        <div>Wallet: {addr || '—'}</div>
        <div>HNT Balance: {bal}</div>
        <div>Status: {status || '—'}</div>
      </div>
      <div className="flex gap-3">
        <button onClick={connect} className="px-3 py-2 rounded border">Connect</button>
        <button onClick={confirmMeds} className="px-3 py-2 rounded border">Confirm Meds</button>
        <button onClick={completeModule} className="px-3 py-2 rounded border">Complete Module</button>
      </div>
      <p className="text-sm text-gray-500">Uses local Hardhat at 127.0.0.1:8545.</p>
    </div>
  )
}
