import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject("Error encrypting message");
      }
    }, 2000);
  });
}

// const message = {
//   name: "John Doe",
//   password: "password123",
// };

// const secretKey = "a1b2c3d4e5f6g7h8";

// encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//   console.log(encryptedMessage);
// });

// encryptMessagePromise(JSON.stringify(message), secretKey).then(
//   (encryptedMessage) => {
//     console.log(encryptedMessage);
//   }
// );
