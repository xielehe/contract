// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Token {
    address public minter;
    string public name;
    mapping(address => uint256) public ethBalanceOf;

    constructor() public {
        minter = msg.sender; //only initially
        name = "Decentralized Bank Currency";
    }

    function() external payable {
      ethBalanceOf[msg.sender] = msg.value;
    }
}