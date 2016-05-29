import chai, {expect} from 'chai'
import jsxChai from 'jsx-chai'
chai.use(jsxChai)

import React from 'react'
import {createRenderer} from 'react-addons-test-utils'

import HelloWorld from './HelloWorld'

describe('HelloWorld component', () => {
    it('should render correctly', () => {

        const renderer = createRenderer()
        renderer.render(<HelloWorld/>)

        const actual = renderer.getRenderOutput()

        // cool use of jsxChai
        expect(actual).to.deep.equal(<div>Hello world</div>)
    })
})