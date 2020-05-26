// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { Chart } from './Chart'

jest.mock('react-chartjs-2', () => ({ Line: 'Line' }))
jest.mock('./styled', () => ({ Wrapper: 'Wrapper' }))
jest.mock('.', () => ({}))

describe('screens > Chart', () => {
  describe('Chart', () => {
    it('renders', () => {
      const props = {
        data: jest.fn()
      }

      const wrapper = shallow(<Chart {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
