require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/S3cOWMnKUEvVZSDnsEhRAnDju5II1T7A",
      accounts: [
        "d9a99c80df0bb63aa904e7cf9cde125e8c6027f3f1ea6e2003622c165bd03059",
      ],
    },
  },
};
