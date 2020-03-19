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
    

    return empleades.map(enGuardia);
}
