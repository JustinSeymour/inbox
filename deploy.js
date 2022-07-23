// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const { infura, metamask } = require('./config');

const provider = new HDWalletProvider(
   metamask.mnemonic,
   infura.api.url
);

const web3 = new Web3(provider);

