var ConvertLib = artifacts.require("./MdgCoin.sol");
var MetaCoin = artifacts.require("./TmtgCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(MdgCoin);
  deployer.link(MdgCoin, TmtgCoin);
  deployer.deploy(TmtgCoin);
};
