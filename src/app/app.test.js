// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { App } from './app'

jest.mock('screens/Chart', () => 'Chart')
jest.mock('./styled', () => ({
  Wrapper: 'Wrapper'
}))

describe('app', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})
