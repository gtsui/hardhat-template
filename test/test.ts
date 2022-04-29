import 'dotenv/config';
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe("Test Environment Tests", () => {

  let signers: any;

  beforeEach(async () => {
    signers = await ethers.getSigners();
  });

  describe("TestContract", () => {

    it("sample test", async () => {
      for(var i=0; i < signers.length; i++){
        console.log(signers[i].address);
      }
    });
    
  });

});
