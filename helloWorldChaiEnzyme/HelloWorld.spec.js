import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import {shallow} from 'enzyme' // react-dom dependency is needed to be able to use enzyme
import React from 'react'
import HelloWorld from './HelloWorld'

describe('HelloWorld component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<HelloWorld/>)

        // much more fluent now statements

        expect(wrapper).to.have.html('<div>Hello world</div>')

        expect(wrapper).to.have.exactly(1).descendants('div')

        expect(wrapper).to.contain('Hello world')
    })
})