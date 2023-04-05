d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      marks: [
        Plot.dot(data.filter(item => item.ocupacion !== 'participante de vuelo espacial'),{
          x: 'ocupacion',
          y: 'edad_mision',
          r: 'mision_hs',
          title: d => `${d.mision_hs} horas`
          // fill: 'nacionalidad'
        }),
      ],
      y:{
        title:"Edad del Astronauta",
      },
      grid: true,
      line: true,
      nice: true,
      marginLeft: 80,
      marginTop: 30,
      marginBottom: 40,

    })
  //plot.plot genera una imagen con todo lo que tiene adentro.
  //luego selecciona la variable donde esta el plot y la inserta en el html
    /* Agrega el chart al DOM */
    d3.select('#chart').append(() => chart)
  })
