import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
    it('should pass', () =>{
        expect(true).to.equal(true);
    });
});
//need done parameter if testing asyncronus calls, need to use done function calls.
describe('index.html', () => {
    it('should have h1 that says users', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    })
})
