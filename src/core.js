export const hexToBase64 =
    hexString => Buffer.from(hexString, 'hex').toString('base64')

export const base64ToHex =
    baseString => Buffer.from(baseString, 'base64').toString('hex')

export const xor =
    (inputString, key) => inputString

