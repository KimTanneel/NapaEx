const { generateKeyPair } = require('crypto');

const NodeRSA = require('node-rsa');
let public =null
let private = null

generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'top secret'
    }
  }, (err, publicKey, privateKey) => {
      console.log("Gerrnerate");
    storeKey(publicKey,privateKey)
  });

  let storeKey = (pub,pri)=>{
     console.log("storekey")
     public=pub
     private = pri 
  }
console.log(public)

// const key = new NodeRSA({b: 512});
 
// const text = 'Hello RSA!';
// const encrypted = key.encrypt(text, 'base64');
// console.log('encrypted: ', encrypted);
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);