d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.nacionalidad == 'EE.UU.'),
        Plot.groupX({y: "sum"},{
          x: "anio_mision",
          y: "mision_hs",
          strokeWidth: 2.5,
          title: d => `${d.mision_hs} horas`
        }),
      ),
    ],
    y: {
      ticks: 10,
      grid: true,
      transform: d => d * 1/1000
    },
    nice: true,
    marginLeft: 40,
    marginTop: 40,
    marginBottom: 50,
  });
  d3.select('#chart').append(() => chart);
});
