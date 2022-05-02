import 'dotenv/config';
import {HardhatRuntimeEnvironment} from 'hardhat/types';

const CONTRACT_NAME = "";

const func = async function(hre: HardhatRuntimeEnvironment) {
  const {ethers, deployments} = hre;
  const {deploy} = deployments;

  let signers = await ethers.getSigners();
  
  await deploy(CONTRACT_NAME, {
    from: signers[0].address,
    contract: "",
    args: [],
    log: true,
    proxy: false
  });  
};
func.tags = [CONTRACT_NAME];
export default func;

