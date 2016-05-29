const add = require('./add')

describe('add function', () => {
    it('shold add two numbers together correctly', () => {

        debugger;
        if(add(1,2) !== 3){
            throw new Error('1 + 2 did not equal 3')
        }

        const assert  = require('assert')
        assert(add(1,2)===3, '1 + 2 did not equal 3')
    })
})