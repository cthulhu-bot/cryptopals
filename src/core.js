export const stringToHex =
    input => Buffer.from(input, 'hex')[0];

export const hexToBase64 =
    input => Buffer.from(input, 'hex').toString('base64')

