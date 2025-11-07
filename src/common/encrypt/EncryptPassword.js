import CryptoJS from "crypto-js";


const EncryptPassword = (password) => {
  console.log("Password to encrypt:", password);

  const iv = CryptoJS.lib.WordArray.random(16); // Generate random 16-byte IV
  const secretKey = CryptoJS.enc.Utf8.parse("ntarPrivate"); // Parse the secret key

  const encrypted = CryptoJS.AES.encrypt(password, secretKey, { iv }); // Encrypt
  const result = iv.toString(CryptoJS.enc.Hex) + ":" + encrypted.ciphertext.toString(CryptoJS.enc.Hex); // Combine IV and ciphertext

  console.log("Encrypted Password:", result);
  return result;
};

export default EncryptPassword;

