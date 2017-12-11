import { stringToHex, hexToBase64 } from '../src/core'

describe('converting', () => {
    it('from hex to base64 should work', () => {
        expect(hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'))
            .toBe('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t')
    })
    it('from string to hex', () => {
        expect(stringToHex('80')).toBe(128)
    })
})
