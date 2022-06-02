require('@nomiclabs/hardhat-waffle');
const alchemy = process.env['ALCHEMY_API_KEY_URL']
//const rinkeby_private_key = process.env['RINKEBY_PRIVATE_KEY']
const rinkeby_private_key = 'a2f9ff4fc25f25320d651c151b41ceab3f1d16ade918f79dd8d160be10383b24'
module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: alchemy,
      accounts: [rinkeby_private_key],
   },
  },
};

