// https://eth-mainnet.g.alchemy.com/v2/_QQ7ynE6YuPSNmke3eUefJbh9pN9eJiK
// https://eth-sepolia.g.alchemy.com/v2/snqlpepX5C8NcHJV1J2zukWV-CWj78pt
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.13",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/snqlpepX5C8NcHJV1J2zukWV-CWj78pt",
      accounts: [
        "50c32cb9ba88ad414566211d9732e36575869f59fdc97cf52b26d2a1236b2081",
      ],
    },
  },
};
