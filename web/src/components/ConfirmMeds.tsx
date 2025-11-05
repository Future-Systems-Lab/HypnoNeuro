// Rights Reserved, Unlicensed
'use client'
import { useState } from 'react'
import { ethers } from 'ethers'

export default function ConfirmMeds() {
  const [status, setStatus] = useState('')

  async function handleClick() {
    try {
      const eth = (window as any).ethereum
      if (!eth) return setStatus('MetaMask not found')
      await eth.request({ method: 'eth_requestAccounts' })
      const mm = new ethers.BrowserProvider(eth, { chainId: 31337, name: 'hardhat', ensAddress: null })
      const signer = await mm.getSigner()
      const omt = new ethers.Contract(
        '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        [
          'function balanceOf(address) view returns (uint256)',
          'function confirmMeds() public returns (bool)'
        ],
        signer
      )
      const tx = await omt.confirmMeds()
      await tx.wait()
      setStatus('Confirmed!')
    } catch (err: any) {
      setStatus('Error: ' + err.message)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Confirm Meds</button>
      <p>{status}</p>
    </div>
  )
}
