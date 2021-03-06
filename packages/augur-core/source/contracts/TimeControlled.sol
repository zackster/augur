pragma solidity 0.4.24;

import 'ITime.sol';
import 'libraries/ContractExists.sol';
import 'IAugur.sol';


contract TimeControlled is ITime {
    using ContractExists for address;

    uint256 private timestamp = 1;
    address private constant FOUNDATION_REP_ADDRESS = address(0x1985365e9f78359a9B6AD760e32412f4a445E862);

    IAugur public augur;

    constructor() public {
        // This is to confirm we are not on foundation network
        require(!FOUNDATION_REP_ADDRESS.exists());
        timestamp = block.timestamp;
    }

    function initialize(IAugur _augur) public returns (bool) {
        augur = _augur;
        return true;
    }

    function getTimestamp() external view returns (uint256) {
        return timestamp;
    }

    function incrementTimestamp(uint256 _amount) external returns (bool) {
        timestamp += _amount;
        augur.logTimestampSet(timestamp);
        return true;
    }

    function setTimestamp(uint256 _timestamp) external returns (bool) {
        timestamp = _timestamp;
        augur.logTimestampSet(timestamp);
        return true;
    }

    function getTypeName() public view returns (bytes32) {
        return "TimeControlled";
    }
}
