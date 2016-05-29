import {expect} from 'chai'
import {shallow} from 'enzyme' // react-dom dependency is needed to be able to use enzyme
import React from 'react'
import HelloWorld from './HelloWorld'

describe('HelloWorld component', () => {
    it('should render correctly', () => {

        // How much simpler is that
        const wrapper = shallow(<HelloWorld/>)
        expect(wrapper.equals(<div>Hello world</div>)).to.be.true
    })
})