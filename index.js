// MARCO ANTONIO BERNA ILDEFONSO 
// API DE COVID-19
// EJERCICIO #2
async function casosConfirmados(pais,fechaInicio,fechaFin) {
    let json =await(await(fetch(`https://api.covid19api.com/country/${pais}/status/confirmed?from=${fechaInicio}T00:00:00Z&to=${fechaFin}T00:00:00Z`))).json();
    mostrarCasos(json)
    casosIncrementadosADiario(json)

    
}

casosConfirmados("peru","2022-04-01","2022-04-10")
function mostrarCasos(arrayDias) {
    arrayDias.forEach(diaObj => {
        console.log("En "+ diaObj.Country + " hay " + diaObj.Cases + " casos confirmados hasta " + recortarFecha(diaObj.Date) )
    });
}
// FUNCION PARA RECORTAR LA FECHA
function recortarFecha(fecha) {
   return fecha.slice(0,10)
}
// FUNCION PARA LOS CASOS INCREMENTADOS A DIARIO
function casosIncrementadosADiario(arrayDias) {
    for (let i = 1; i < arrayDias.length; i++) {
        let casoIncremento = arrayDias[i].Cases - arrayDias[i-1].Cases
        console.log(`El ${recortarFecha(arrayDias[i].Date)} incrementó ${casoIncremento} casos confirmados`)
    }
}
