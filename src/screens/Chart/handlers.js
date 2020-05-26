// @flow

type SetGradientColor = (canvas: any, color: string) => void

export const handleSetGradientColor = (canvas: any, color: string) => {
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 600, 550)

  gradient.addColorStop(0, color)
  gradient.addColorStop(0.95, 'rgba(133, 122, 144, 0.5)')

  return gradient
}

export const handleGetChartData = (data: any) => (
  setGradientColor: SetGradientColor
) => (canvas: any) => {
  if (data.datasets) {
    let colors = ['rgba(255, 0, 255, 0.75)', 'rgba(0, 255, 0, 0.75)']
    data.datasets.forEach((set, index) => {
      set.backgroundColor = setGradientColor(canvas, colors[index])
      set.borderColor = 'white'
      set.borderWidth = 2
    })
  }

  return data
}
