d3.csv('astronautas.csv', d3.autoType).then(data => {
  const datosFiltrados = data.filter(item => item.nacionalidad !== 'Emiratos Arabes Unidos' && item.nacionalidad !== 'Kazajistan' && item.nacionalidad !== 'Dinamarca');
  const groupedData = d3.rollup(datosFiltrados, group => d3.sum(group, d => d.mision_hs), d => d.nacionalidad);
  
    // Lo convierto en una lista
    const filteredData = Array.from(groupedData, ([nacionalidad, mision_hs]) => ({ nacionalidad, mision_hs }));
  
    // Eligo los 25 con mas tiempo de mision total de forma ascendente
    const sortedData = filteredData.sort((a, b) => d3.descending(a.mision_hs, b.mision_hs)).slice(0, 25);
  
    // Suma el tiempo de los primeros 25 astronautas
    const totalTime = d3.sum(sortedData, d => d.mision_hs);
  
    // Calcula el tiempo promedio
    const averageTime = totalTime / 25;
  
    // Elijo el color y como lo sorteo
    const colorScale = d3.scaleSequential()
      .domain(d3.extent(sortedData, d => d.mision_hs))
      // .interpolator(d3.interpolateBlues);
  
      let chart = Plot.plot({
        y: {
          type: "band",
          tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
          domain: d3.sort(sortedData, d => -d.mision_hs).map(d => d.nacionalidad),
          
        },
        x: {
          label: "Tiempo en misiones (hs*1000)",
          transform: d => d * 1/1000
        },
        marks: [
          Plot.barX(sortedData, {
            y: "nacionalidad",
            x: "mision_hs",
            fill: d => colorScale(d.mision_hs),
            title: d => `${d.mision_hs} horas`
          }),
          Plot.ruleX([0]),
        ],
        marginLeft: 200,
        marginRight: 50,
        marginTop: 50,
        marginBottom: 100,
        width: 1100,
        height: 600,
        nice: true,
        grid: true,
        line: true,
      });
    
      d3.select('#chart')
        .append(() => chart);
    
    });