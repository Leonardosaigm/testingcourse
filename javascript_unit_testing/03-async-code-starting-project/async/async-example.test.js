import {expect, it} from 'vitest';
import { generateToken, generateTokenPromise } from './async-example.js';

it('should generate a token value', (done) => {
    const testUserEmail = 'testuser@example.com';

    generateToken(testUserEmail, (err, token) => {
        try{
            expect(token).toBeDefined();
            done();
        } catch(err) {done(err);}
    });
});

it('Should generate a token value', () => {
    const testUserEmail = 'testuser@example.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined;

});

it('Should generate a token value', async () => {
    const testUserEmail = 'testuser@example.com';
    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
});