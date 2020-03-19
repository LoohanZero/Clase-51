// // Hacer ejercicios de estudiantes acá

// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido


const estudiantesPorHechizo = (estudiantes, hechizo) => {
    const porHechizo = estudiante => estudiante.hechizoPreferido === hechizo;
   
    const estudiantesFiltrados = estudiantes.filter(porHechizo);

    return estudiantesFiltrados;
}


// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro.

const estudiantesConMasAmiguesQue = (estudiantes, x) => {
    
    const masAmiguesQue = estudiante => estudiante.amigues.length >= x; 

    return estudiantes.filter(masAmiguesQue);
}

const contadorDeAmigues = estudiantesConMasAmiguesQue(estudiantes, 0);

// console.log(contadorDeAmigues);


// estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

const estudiantesConFamiliares = (familiares, estudiantes) => {


    const estudiantesIncluyenFamiliares = estudiante => familiares.includes(estudiante.familiar);
    
    estudiantesFiltrados = estudiantes.filter(estudiantesIncluyenFamiliares);

       
    return estudiantesFiltrados
}

const estudiantesQueTienenFamiliares = estudiantesConFamiliares(["Sapo", "Lechuza"], estudiantes)
// console.log(estudiantesQueTienenFamiliares)

// obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = estudiante => {
    const cantidadDeMaterias = estudiante.materias.length;
    const aPromedios = materia => materia.promedio; // da un array con los promedios
    const sumaDePromedios = (sumaParcial, actual) => sumaParcial + actual; // da un numero con la suma de los promedios del array anterior

    return estudiante.materias.map(aPromedios).reduce(sumaDePromedios)/cantidadDeMaterias;
}

// console.log(obtenerPromedioDeEstudiante(estudiantes[0]))

// estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)

const estudiantesConPromedioMayorA = (x, estudiantes, fn) => {

    const promedioMayorA = estudiante => obtenerPromedioDeEstudiante(estudiante) > x;
    
    const estudiantesAprobados = estudiantes.filter(promedioMayorA)

    return estudiantesAprobados
}


// console.log(estudiantesConPromedioMayorA(6, estudiantes, obtenerPromedioDeEstudiante));

// mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

const mejoresEstudiantesPorCasa = (nombreDeCasa, estudiantes) => {
    const porCasa = estudiante => estudiante.casa === nombreDeCasa;
    const estudiantesPorCasa = estudiantes.filter(porCasa);
    // console.log(estudiantesPorCasa);

    const mayoresPromedios = estudiantesConPromedioMayorA(6, estudiantesPorCasa, obtenerPromedioDeEstudiante);

    return mayoresPromedios
}

// console.log(mejoresEstudiantesPorCasa("Hufflepuff", estudiantes));

// casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)

const casaConMejoresEstudiantes = estudiantes => {
    const mayorPromedioRavenclaw = mejoresEstudiantesPorCasa("Ravenclaw", estudiantes).length;
    // console.log(mayorPromedioRavenclaw)
    const mayorPromedioHufflepuff = mejoresEstudiantesPorCasa("Hufflepuff", estudiantes).length;
    // console.log(mayorPromedioHufflepuff)
    const mayorPromedioSlytherin = mejoresEstudiantesPorCasa("Slytherin", estudiantes).length;
    // console.log(mayorPromedioSlytherin)
    const mayorPromedioGryffindor = mejoresEstudiantesPorCasa("Gryffindor", estudiantes).length;
    // console.log(mayorPromedioSlytherin)

    const mejorCasaRaven = mayorPromedioRavenclaw >= mayorPromedioHufflepuff &&
                           mayorPromedioRavenclaw >= mayorPromedioSlytherin &&
                           mayorPromedioRavenclaw >= mayorPromedioGryffindor;
    const mejorCasaHuff = mayorPromedioHufflepuff >= mayorPromedioSlytherin && 
                          mayorPromedioHufflepuff >= mayorPromedioGryffindor &&
                          mayorPromedioHufflepuff >= mayorPromedioRavenclaw;
    const mejorCasaSly =  mayorPromedioSlytherin >= mayorPromedioRavenclaw &&
                          mayorPromedioSlytherin >= mayorPromedioHufflepuff &&
                          mayorPromedioSlytherin >= mayorPromedioGryffindor;
    const mejorCasaGry = mayorPromedioGryffindor >= mayorPromedioRavenclaw &&
                         mayorPromedioGryffindor >= mayorPromedioHufflepuff &&
                         mayorPromedioGryffindor >= mayorPromedioSlytherin;
    



}


// console.log(casaConMejoresEstudiantes(estudiantes))
    

    




// cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)

const cantidadDeEstudiantesPorCasa = (estudiantes) => {
    const cantidadPorCasa = (cuentaParcial, estudiantes) => {
        cuentaParcial[estudiantes.casa] = cuentaParcial[estudiantes.casa] + 1 || 1;
        // cuenta parcial accede a la casa del estudiante y copia la propiedad en el objeto vacío la primera vez y a partide la siguiente suma uno cada vez
        return cuentaParcial
    }
    return estudiantes.reduce(cantidadPorCasa, {}) //doy objeto vacio para poner en cuenta parcial al principio de todo porque son distintos el array original del objeto que devuelve
}



// cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)

const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => {
    const aNombreDeMateria = materia => materia.nombre

    const materiaAprobada = materia => materia.promedio > 6

    const aMateriasAprobadas = (resultadoParcial, materia) => { 
        resultadoParcial[materia] = resultadoParcial[materia] + 1 || 1;
    
    return resultadoParcial
    }

    const aprobadesPorMateria = (resultadoPrincipalParcial, estudiante) => {
        const materiasAProbadas = estudiante.materias // obtenemos array de objetos de todas las materias del estudiante
            .filter(materiaAprobada) // filtramos y obtenemos array de objetos con materias aprobadas unicamnete
            .map(aNombreDeMateria) // mapeamos a un array solo de los nombres de las materias
            .reduce(aMateriasAprobadas, resultadoPrincipalParcial); // reducimos el array de strings a un objeto, el objeto general vacio inicial, no le pasamos uno nuevo porque sino me crearía las materias aprobadas de cada estudiante en un objeto distinto por cada pasada del reduce. En cambio reutilizo el del primer reduce para que me ponga toda la info de las materias en el mismo objeto y vaya sumando las materias aprobadas.
         

        return materiasAProbadas

    }


    return estudiantes.reduce(aprobadesPorMateria, {}) // le paso un solo objeto vacío y es ese el que se vuelve a pasar constantemnte como resultado parcial principal y se reutiliza para que no se resetee a cero en el siguiente reduce 
}


// console.log(cantidadDeEstudiantesPorMateriaAprobada(estudiantes))

