# Astronautas que participaron en misiones espaciales

Los datos corresponden a astronautas que participaron en misiones espaciales desde el 1 de enero de 2010 hasta el 15 de enero de 2020 recopilados por la NASA (Estados Unidos), Roscosmos (Rusia) y otros sitios. Son más de 150 registros, en donde cada fila representa un astronauta participante de una misión espacial. 

Los campos son:

1. **nombre:** Nombre completo
2. **genero:** Género
3. **anio_nacimiento:** Año de nacimiento
4. **nacionalidad:** Nacionalidad
5. **status:** Estatus militar o civil
6. **ocupacion:** Título profesional
7. **anio_mision:** Año de la misión 
8. **edad_mision:** Edad del astronauta cuando realizó la misión
9. **mision_hs:** Duración de la misión en horas
10. **eva_mision_hs:** Duración de las actividades extravehiculares (EVA) en horas

Creamos 4 graficos relacionando informacion de los distintos astronautas.
Utilizamos JavaScript

dataviz_1:
    Agrupamos los datos sobre la ocupación, edad_mision y mision_hs para responder las siguientes preguntas:
        1. ¿A qué edad las personas estan más capacitadas para viajar al espacio?
        2. ¿Cuál es la ocupación más indicada para viajar al espacio?
        3. ¿Cuál es la ocupación que brinda mayor capacidad para poder cumplir más horas de misión?
    Para cada ocupación vemos comparativamente cuantas horas de misión tuvo cada astronauta y con que edad la llevó a cabo. El radio de las circunferencias aumenta a medida que la cantidad de horas aumenta.
    Elegimos los puntos como la marca porque nos permitía incluir otro dato relevante, como lo es la cantidad de horas de mision de cada astronauta. El tamaño de cada punto varía su tamaño para poder plasmar este dato.

dataviz_2:
    Utilizamos el gráfico de barras horizontales para representar el total de horas de misión por país, dentro de los años 2010 a 2019. El uso de colores facilita la diferenciación de los distintos paises. La manera en la que representamos estos datos nos permite ver como se encuentra la "competencia por el espacio" entre estos paises del Primer Mundo. Historicamente, EEUU y Rusia siempre fueron rivales, hasta enemigos políticos, por lo que ver como se encuentran en su competencia mutua nos pareció un dato interesante.
    Ádemas, creemos adecuado sumar todas las horas de misión para cada país en particular, para así, obtener el total de cada país.

dataviz_3:
    Decidimos usar la marca de línea para agilizar la visualización de como fue variando la cantidad de horas de misión de EEUU a tráves de los años. Facilita la comparación con los años anteriores y posteriores a cualquier año de misión que nos interese. El uso de colores no nos pareció específicamente necesario, ya que no se incluyen otros países en el gráfico.
    Ádemas, creemos adecuado sumar todas las horas de misión por año, de los astronautas de EEUU.

dataviz_4:
    Utilizamos la marca de área porque similarmente a la marca de línea, agiliza la acción de comparar si fue aumentando o disminuyendo la cantidad de horas que los astronautas rusos pasaron fuera de la nave a tráves de los años. Elegimos el color rojo porque lo relacionamos con Rusia y su identidad, su historia y sus bases.
    Por año, decidimos sumar la cantidad de horas que los astronautas pasaban fuera de la nave, por ejemplo, para poder ver en que año Rusia llegó al máximo en su propia historia.
