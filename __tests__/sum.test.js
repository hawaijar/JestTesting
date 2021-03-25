const { sum } = require('../src/sum');

describe('Testing sum()', () => {
    test('sum(3,4) equals 7', () => {
        expect(sum(3, 4)).toBe(7);
    })
})