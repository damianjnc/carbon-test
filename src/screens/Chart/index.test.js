// @flow

import { useState, useEffect } from 'react'
import { usePrepareComponent } from '.'

jest.mock('react', () => ({
  useState: jest.fn(() => [[], 'setData']),
  useEffect: jest.fn(() => {})
}))
jest.mock('screens/Chart/data/TopPolluters.json', () => 'JsonData')
jest.mock('./Chart', () => 'Chart')

const ONE = 1

describe('screens > Chart', () => {
  describe('usePrepareComponent', () => {
    it('calls hooks', () => {
      usePrepareComponent()

      expect(useState).toHaveBeenCalledTimes(ONE)
      expect(useEffect).toHaveBeenCalledTimes(ONE)
    })
  })
})
