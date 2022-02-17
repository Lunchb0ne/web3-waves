// SPDX-License-Identifier: GPL-3.0+

pragma solidity ^0.8.0;

import "hardhat/console.sol";

// this contract name will be used in the factory
contract WaveContract {
    uint wave_number;
    constructor() {
        console.log("Imagine Being a Smart contract");
    }
    function wave() public{
        wave_number += 1;
        console.log("%s just waved!!. Say Hi", msg.sender);
    }
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", wave_number);
        return wave_number;
    }


}
