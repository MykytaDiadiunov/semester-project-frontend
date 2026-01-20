export const useChartConfig = () => {
  function getBarConfig(data: number[], labels: string[], color: string = '#7986f8') {
    return {
      labels: labels,
      datasets: [{
        label: 'Data',
        backgroundColor: color,
        data: data,
      }],
    }
  }

  function getPieConfig(data: number[], labels: string[], colors: string[]){
    return {
      labels: labels,
      datasets: [{
        backgroundColor: colors,
        data: data,
      }],
    }
  }

  return {
    getBarConfig,
    getPieConfig,
  }
}