// @flow

import React from 'react'
import { Line } from 'react-chartjs-2'

import { Wrapper } from './styled'
import { type ComponentProps } from '.'

export const Chart = ({ data }: ComponentProps) => (
  <Wrapper>
    <Line
      options={{
        responsive: true,
        title: {
          display: true,
          text: 'Top Polluters 🌍',
          fontSize: 55
        }
      }}
      data={data}
    />
  </Wrapper>
)

export default Chart
