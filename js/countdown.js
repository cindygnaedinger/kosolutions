//ubicar en el DOM
const txtDias = document.querySelector("#txtDias");
const txtHoras = document.querySelector("#txtHoras");
const txtMinutos = document.querySelector("#txtMinutos");
const txtSegundos = document.querySelector("#txtSegundos");

//busco el h3 para luego escribir texto:
const h3 = document.querySelector("h3");

let intervalo = "";

function dosDigitos (numero)
{
    if( numero < 10 ){
        numero = "0" + numero;
    }
    return numero;
}

//creamos la funcion de control:
function countdown()
{
    const ahora = new Date();
    const final = new Date(2023, 9, 1);

    let diferencia = final - ahora;

    let segundos = Math.trunc( diferencia / 1000 );

    let minutos = Math.trunc( segundos / 60 );

    let horas = Math.trunc( minutos / 60 );

    let dias = Math.trunc( horas / 24 );

    //calculo los restantes:
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    //dejar de actualizar
    if( dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0) {
        clearInterval( intervalo );
        h1.innerText = "Promotion ended";
        dias = 0;
        horas = 0;
        minutos = 0;
        segundos = 0;
    }

    horas = dosDigitos( horas );
    minutos = dosDigitos( minutos );
    segundos = dosDigitos( segundos );

    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;
}

countdown();

intervalo = setInterval( countdown);