require('dotenv').config();

let _ = {};

_.infura = {
   api: {
      url: process.env.INFURA_API_URL,
      key: process.env.INFURA_API_KEY
   }
}

_.metamask = {
   mnemonic: process.env.MNEMONIC
};

module.exports = _;