import * as core from '../src/core'

describe('converting', () => {
    it('from hex to base64 should work', () => {
        expect(core.hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'))
            .toBe('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t')
    })
    it('from string to hex', () => {
        expect(core.base64ToHex('aGVsbG8gd29ybGQ=')).toBe('68656c6c6f20776f726c64')
    })
    it('from string to xor', () => {
//        expect(core.xor('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965')).toBe('746865206b696420646f6e277420706c6179')
    })
})
