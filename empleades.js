// // Hacer ejercicios de empleades acá
// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia

const empleadesQueHacenGuardia = empleades => {

    const hacenGuardias = empleade => empleade.haceGuardia;


    return empleades.filter(hacenGuardias);
}

// console.log(empleadesQueHacenGuardia(empleades))

// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país


const empleadesPorPais = (empleades, pais) => {
    const porNacionalidad = empleade => empleade.pais === pais;

    return empleades.filter(porNacionalidad)
}

// console.log(empleadesPorPais(empleades, "Colombia"))

// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área


const empleadesPorArea = (empleades, area) => {
    const porArea = empleade => empleade.area === area;
    return empleades.filter(porArea)
}

// console.log(empleadesPorArea(empleades, "QA"))

// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

const empleadesConSueldoMayorA = (empleades, x) => {
    const sueldoMayorA = empleade => empleade.sueldo > x;

    return empleades.filter(sueldoMayorA)
}

// console.log(empleadesConSueldoMayorA(empleades, 70000))

// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

const empleadesConMasLenguajes = (empleades, x) => {
    const porLenguaje = empleade => empleade.lenguajes.length > x;
    
    return empleades.filter(porLenguaje)
}

// console.log(empleadesConMasLenguajes(empleades, 3))

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleados

const sueldoPromedioEmpleades = empleades => {
   const porSueldo = empleade => empleade.sueldo;
   
    const porSueldoPromedio = (sumaParcial, actual) => sumaParcial + actual;



    return empleades.map(porSueldo).reduce(porSueldoPromedio) / empleades.length
}

// console.log(sueldoPromedioEmpleades(empleades))

// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

const sueldoPromedioPorSeniority = (empleades, seniority) => {
    const porSeniority = empleade => empleade.seniority === seniority;
    return sueldoPromedioEmpleades(empleades.filter(porSeniority));
}

// console.log(sueldoPromedioPorSeniority(empleades, "Senior"))

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

const buscarEmpleades = (empleades, area, puesto, seniority) => {
    const porArea = empleade => empleade.area === area;
    const porPuesto = empleade => empleade.puesto === puesto;
    const porSeniority = empleade => empleade.seniority === seniority;

    return empleades.filter(porArea).filter(porPuesto).filter(porSeniority)
}

// console.log(buscarEmpleades(empleades, "QA", "Backend Developer", "Junior"))

// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

const errorEnProduccion = (empleades) => {
    
    const enGuardia = empleade => {
        empleade.haceGuardia = true;

        return empleade
    }

    return empleades.map(enGuardia);
}

// console.log(errorEnProduccion(empleades))

// subirDeCategoria, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

const subirDeCategoria = empleades => {

    const subeCategoria = empleade => {
        if (empleade.seniority === "Trainee") {
            empleade.seniority = "Junior";
            empleade.sueldo += 10000;


            return empleade
        }
        else if (empleade.seniority === "Junior") {
            empleade.seniority = "Semisenior";
            empleade.sueldo += 10000;

            return empleade
        }
        else if (empleade.seniority === "Semisenior") {
            empleade.seniority = "Senior";
            empleade.sueldo += 10000;

            return empleade
        }
        return empleade
    }
    return empleades.map(subeCategoria)
}
// console.log(subirDeCategoria(empleades))

// agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

const agregarTecnologias = empleades => {
    
    const masTecnologias = empleade => {    
        empleade["Tecnologías"] = ["GIT", "Node.js"];
    
        return empleade
    }

    return empleades.map(masTecnologias)
}

// console.log(agregarTecnologias(empleades))


// empleadeSabeLenguaje, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

const empleadeSabeLenguaje = (empleade, lenguaje) => empleade.lenguajes.includes(lenguaje);

// console.log(empleadeSabeLenguaje(empleades[0], "Firebase"));

// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

const empleadesQueSabenLenguaje = (empleades, lenguaje, empleadeSabeLenguaje) => {
    const porLenguaje = empleade => empleadeSabeLenguaje(empleade, lenguaje);

    return empleades.filter(porLenguaje);
}

// console.log(empleadesQueSabenLenguaje(empleades, "Java", empleadeSabeLenguaje))

// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

const empleadesQueSabenLenguajes = (empleades, lenguajes) =>{ 

    const incluyeLenguajes = empleade => {
        const newArray = []
        
        for (const lenguaje of lenguajes) {
           const resultado = empleade.lenguajes.includes(lenguaje)

           resultado ? newArray.push(resultado) : newArray;
        }        

        if (newArray.length <= 1) {
            return false;
        }
        else {
            return true;
        }
    }       
    
    const porLenguaje = empleade => lenguajes.every(lenguaje => incluyeLenguajes(empleade, lenguaje))

    return empleades.filter(porLenguaje)
}

// console.log(empleadesQueSabenLenguajes(empleades, ['JavaScript', 'Java']));

// empleadesQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

const empleadesQueSabenAlgunosLenguajes = (empleades, lenguajes) => {
    const porLenguajes = empleade => {
        let verSiLoIncluye = false;

        for (const lenguaje of lenguajes) {
          verSiLoIncluye = empleade.lenguajes.includes(lenguaje);
        }
        
        return verSiLoIncluye
    };

    return empleades.filter(porLenguajes)
}


// empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

const empleadesConMejorSueldo = empleades => {
    const porMayorSueldo = (a, b) => {
        return b.sueldo - a.sueldo
    }

    const empleadesOrdenadosPorSueldo = empleades.sort(porMayorSueldo);

    const mayores10 = [];
    for (let i = 0; i < empleadesOrdenadosPorSueldo.length; i++) {
        mayores10.length < 10 ? mayores10.push(empleadesOrdenadosPorSueldo[i]) : mayores10;
    }

    return mayores10
}

// console.log(empleadesConMejorSueldo(empleades));

// obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)

const obtenerTitulosCompletos = empleades => {
   const titulosCompletos = empleade => `${empleade.nombre}, ${empleade.seniority}, ${empleade.puesto}, ${empleade.area}`;

    return empleades.map(titulosCompletos)
}

// console.log(obtenerTitulosCompletos(empleades))