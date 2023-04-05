d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'eva_mision_hs',
        y: 'ocupacion',
      }),
    ],
    width: 600,
    height: 400,
    line: true,
    nice: true,
    grid: true,
  })
  d3.select('#chart').append(() => chart)
})

