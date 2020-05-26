// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Wrapper } from './styled'

describe('screens > Chart', () => {
  describe('Wrapper', () => {
    it('renders', () => {
      const wrapper = renderer.create(<Wrapper />).toJSON()

      expect(wrapper).toMatchSnapshot()
    })
  })
})
