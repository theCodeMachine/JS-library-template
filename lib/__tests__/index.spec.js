import helloWorldLib from '../index';

describe('Sample hello world test', () => {
    it('should work', () => {
        expect(helloWorldLib()).toBe(true);
    });
});
