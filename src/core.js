export const hexToBase64 =
    hexString => Buffer.from(hexString, 'hex').toString('base64')

export const base64ToHex =
    baseString => Buffer.from(baseString, 'base64').toString('hex')

export const xor =
    (inputString, key) => {
        return inputString.split('').reduce((acc, val, idx) => {
            const inputBit = parseInt('0x' + val)
            const keyBit = parseInt('0x' + (key.split('')[idx]))
            const xorBit = inputBit ^ keyBit
            return acc.concat([(xorBit).toString(16)])
        }, []).join('')
    }

