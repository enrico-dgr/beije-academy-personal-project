import { decrypt, encrypt } from "crypto-js/aes";

import { enc } from "crypto-js";

const S = "aosudhbnasijdasihdasnixocikmnasicjasncasncas";

const encryptText = (text) => encrypt(text, S).toString();

const decryptText = (text) => decrypt(text, S).toString(enc.Utf8);

const encryptObject = (obj) => encrypt(JSON.stringify(obj), S).toString();

const decryptObject = (text) => JSON.parse(decrypt(text, S).toString(enc.Utf8));

export { encryptText, decryptText, encryptObject, decryptObject };
