// @flow

import { useEffect, useState } from 'react'

import prepareComponent from 'hocs/prepareComponent'
import Chart from './Chart'
import {
  handleGetChartData,
  handleSetGradientColor
} from 'screens/Chart/handlers'
import JsonData from 'screens/Chart/data/TopPolluters.json'

export type ComponentProps = {
  data: () => void
}

export const usePrepareComponent = (): ComponentProps => {
  const [data, setData] = useState({})

  useEffect(() => {
    const json = JSON.stringify(JsonData)
    const object = JSON.parse(json)

    const names = object.map(item => item.Name)
    const globalEmmissionsPast = object.map(item => {
      const index = item['Global emissions 1965-2017']
        .split('')
        .findIndex(element => element === 'm')

      const value = item['Global emissions 1965-2017'].slice(0, index)

      const removeCommas = Number(value.replace(/,/g, ''))

      return removeCommas
    })

    const globalEmmissionsFuture = object.map(item => {
      let value

      if (item['Projected future emissions 2018-30']) {
        const index = item['Projected future emissions 2018-30']
          .split('')
          .findIndex(element => element === 'm')

        value = item['Projected future emissions 2018-30'].slice(0, index)
      } else if (item['Projected emissions 2018-30']) {
        const index = item['Projected emissions 2018-30']
          .split('')
          .findIndex(element => element === 'm')

        value = item['Projected emissions 2018-30'].slice(0, index)
      } else {
        value = '0'
      }

      const removeCommas = Number(value.replace(/,/g, ''))

      return removeCommas
    })

    setData({
      labels: names,
      datasets: [
        {
          label: 'Global emissions 1965-2017',
          backgroundColor: 'rgba(255, 0, 255, 0.75)',
          data: globalEmmissionsPast
        },
        {
          label: 'Projected emissions 2018-30',
          backgroundColor: 'rgba(0, 255, 0, 0.75)',
          data: globalEmmissionsFuture
        }
      ]
    })
  }, [])

  return {
    data: handleGetChartData(data)(handleSetGradientColor)
  }
}

export default prepareComponent<*, ComponentProps>(usePrepareComponent)(Chart)
