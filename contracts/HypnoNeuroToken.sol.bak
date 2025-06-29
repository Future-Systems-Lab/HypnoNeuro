// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title HypnoNeuroToken
 * @dev ERC20 Token with mint, pause, and burn capabilities for the HypnoNeuro ecosystem.
 */
contract HypnoNeuroToken is ERC20, Ownable, Pausable {

    uint256 private constant MAX_SUPPLY = 1_000_000_000 * 10 ** 18; // 1 billion tokens

    constructor() ERC20("HypnoNeuro Token", "HNT") {
        _mint(msg.sender, 100_000_000 * 10 ** decimals()); // 10% initial allocation to deployer
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
