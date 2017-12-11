const crypto = require('crypto')

export const stringToHex =
    inputString => Buffer.from(inputString, 'hex')[0];

export const hexToBase64 =
    hexString => Buffer.from(hexString, 'hex').toString('base64')

export const xor =
    (inputString, key) => inputString

