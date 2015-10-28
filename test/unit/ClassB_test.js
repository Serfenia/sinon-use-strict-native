import sinon from 'sinon';
import ClassB from '../ClassB';

describe('Test', function() {
    let spy = sinon.spy();

    it('multiplies', function() {
        (5*2).should.equal(10);
    })
});