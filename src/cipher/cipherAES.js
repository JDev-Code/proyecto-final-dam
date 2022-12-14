import CryptoJS from "crypto-js"

// Cifra una cadena con AES
function cipherAES (data) {
  const key = 'a{sgJa=aKs-aPe<k3J?'
  const cipherString = CryptoJS.AES.encrypt(data, key).toString()
  return cipherString
}

export default cipherAES
