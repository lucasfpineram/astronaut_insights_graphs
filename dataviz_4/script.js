d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.areaY(
        data.filter(d => d.nacionalidad == 'U.S.S.R/Rusia'),
        Plot.groupX({ y: "sum" }, { 
          x: "anio_mision", 
          fill:'red',
          opacity: 0.8, 
          y: "eva_mision_hs", 
          aggregate: d3.sum,
          // title: d => `${d.sum} horas`,
          
          // Plot.groupX({y: "sum"},{
          //   x: "anio_mision",
          //   y: "eva_mision_hs",
          //   fill: 'red',
          //   opacity: 0.8,
          //   title: d => `${d.mision_hs} horas`
          // }),
        }),
        Plot.text(data, {
          x: "anio_mision",
          y: "eva_mision_hs",
          text: (d) => (d.pop > 80 ? d.eva_mision_hs : "f"),
        }),
      ),
      
    ],
    line: true,
    x: {
      tickFormat: 'd',
      ticks: 11,
    },
    y: {
      ticks: 7,
      grid: true,
    },
    
  });

  d3.select('#chart').append(() => chart);
});


