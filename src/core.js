export const stringToHex =
    input => new Buffer(input, 'hex')[0];

export const hexToBase64 =
    input => new Buffer(input, 'hex').toString('base64')

