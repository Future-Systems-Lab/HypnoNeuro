// Rights Reserved, Unlicensed
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OrthomolecularToken is ERC20, Ownable {
    mapping(address => bool) public medsConfirmed;
    mapping(address => bool) public moduleCompleted;
    mapping(address => bool) public complianceRewarded;

    uint256 public constant MODULE_REWARD = 100 * 10**18;
    uint256 public constant COMPLIANCE_REWARD = 50 * 10**18;

    constructor() ERC20("OrthomolecularToken", "OMT") Ownable(msg.sender) {}

    function confirmMedications() external {
        medsConfirmed[msg.sender] = true;
    }

    function completeModule() external {
        require(medsConfirmed[msg.sender], "Medications not confirmed");
        require(!moduleCompleted[msg.sender], "Already completed");
        moduleCompleted[msg.sender] = true;
        _mint(msg.sender, MODULE_REWARD);
    }

    function rewardCompliance(address user) external onlyOwner {
        require(moduleCompleted[user], "Module not completed");
        require(!complianceRewarded[user], "Already rewarded");
        complianceRewarded[user] = true;
        _mint(user, COMPLIANCE_REWARD);
    }
}
