import hardhat from 'hardhat';

async function main(){
  await verify("", []);
};

async function verify(address: string, args: any[]){
  await hardhat.run("verify:verify", {
    address: address,
    constructorArguments: args
  });
}

(() => main())();
