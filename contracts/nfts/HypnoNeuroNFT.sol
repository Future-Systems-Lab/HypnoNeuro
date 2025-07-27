// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HypnoNeuroNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("HypnoNeuroNFT", "HNFT") Ownable(msg.sender) {
        tokenCounter = 0;
    }

// ⚠️ Slither Audit Warning:
// - Reentrancy vulnerability: _safeMint() called before state changes (tokenCounter++, _setTokenURI)
// - Bitwise ^ used instead of exponentiation ** in Math.mulDiv
// - Mixed Solidity versions with known bugs (e.g. ^0.8.20)
// Contract was deployed as-is; recommend fix in next version


    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter += 1;
        return newTokenId;
    }
}

