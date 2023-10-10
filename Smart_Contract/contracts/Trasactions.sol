// SPDX-License-Identifier: MIT
pragma solidity ^0.5.11;

contract Trasactions {
    uint256 trasactionCount;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStructure {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStructure[] transactions;

    function AddToBlockChain(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        trasactionCount += 1;
        transactions.push(
            TransferStructure(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function GetAllTrasaction()
        public
        view
        returns (TransferStructure[] memory)
    {
        return transactions;
    }

    function getTrasactionCount() public view returns (uint256) {
        return trasactionCount;
    }
}
