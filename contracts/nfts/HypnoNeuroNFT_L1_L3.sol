// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.20;

/// @title Minimal ERC721 NFT with Pausable and Ownable
contract HypnoNeuroNFT_L1_L3 {
    string public name = "HypnoNeuroNFT";
    string public symbol = "HNNTKRN";

    uint256 private _tokenIds;
    address public owner;
    bool public paused;

    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier whenNotPaused() {
        require(!paused, "Paused");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function mint(address recipient) external onlyOwner whenNotPaused returns (uint256) {
        _tokenIds++;
        uint256 tokenId = _tokenIds;
        _owners[tokenId] = recipient;
        _balances[recipient]++;
        return tokenId;
    }

    function burn(uint256 tokenId) external {
        require(_owners[tokenId] == msg.sender, "Not owner of token");
        _balances[msg.sender]--;
        delete _owners[tokenId];
    }

    function pause() external onlyOwner {
        paused = true;
    }

    function unpause() external onlyOwner {
        paused = false;
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        return _owners[tokenId];
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }
}
