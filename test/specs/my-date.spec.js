import { myDate }from '@/helpers/my-date'
import { assert } from 'chai';

suite('myDate', () => {
    it('should return null when passed falsy value', () => {
        const input = myDate('');
        const output = null;
        assert.equal(input, output);
    });

    it('should return proper date when pass UTC Date string', () => {
        const input = myDate("Thu Nov 22 2018 00:19:03 GMT+0100 (czas środkowoeuropejski standardowy)")
        const output = /2018/;
        assert.match(input, output);
    });
});
