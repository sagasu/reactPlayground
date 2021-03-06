import {expect} from 'chai'
import React from 'react'
import {createRenderer} from 'react-addons-test-utils'

import HelloWorld from './HelloWorld'

describe('HelloWorld component', () => {
    it('should render correctly', () => {

        const renderer = createRenderer()
        // this is a cool usage of HelloWorld variable from an import
        renderer.render(<HelloWorld/>)

        const actual = renderer.getRenderOutput()

        expect(actual.type).to.equal('div')
        expect(actual.props).to.deep.equal({children: 'Hello world'})
    })
})