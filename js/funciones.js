
function calculamelo() {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    
    let selector = document.getElementById("selector").value;
    
    let resultado = 0;

    switch (selector) {
        case 'suma' :
            resultado = parseFloat(a) + parseFloat(b)
            document.getElementById('resultado1').innerHTML = resultado
            break;
        case 'resta' :
            resultado = parseFloat(a) - parseFloat(b)
            document.getElementById('resultado1').innerHTML = resultado
            break;
        case 'multiplicacion' :
            resultado = parseFloat(a) * parseFloat(b)
            document.getElementById('resultado1').innerHTML = resultado
            break;
        case 'division' :
            resultado = parseFloat(a) / parseFloat(b)
            document.getElementById('resultado1').innerHTML = resultado
            break;
        default:
            console.log('debes seleccionar una operacion')        
    }

}

function porcentaje() {
    let a = document.getElementById("valor20").value;

    let resultado = parseFloat(a)*0.2
    document.getElementById('resultado20').innerHTML = resultado

}

function conversor() {
    let a = document.getElementById("valormm").value;

    let resultado1 = parseFloat(a)*100
    document.getElementById('resultado_cm').innerHTML = resultado1

    let resultado2 = parseFloat(a)*1000
    document.getElementById('resultado_mm').innerHTML = resultado2

}

function triangulo() {
    let a = document.getElementById("valor_b").value;
    let b = document.getElementById("valor_h").value;

    let resultado1 = (parseFloat(a)*parseFloat(b))/2
    document.getElementById('resultado_triangulo').innerHTML = resultado1

}

function soles() {
    let a = document.getElementById("valor_dolar").value;

    let resultado = parseFloat(a)*3.38
    document.getElementById('resultado_soles').innerHTML = resultado

}

function pulgadas() {
    let pulgadas = document.getElementById("valor_pulgadas").value;
    let resultado = parseFloat(pulgadas)*25.4
    document.getElementById('resultado_pulgadas').innerHTML = resultado
}

function cifras() {
    let cifras = document.getElementById("valor_cifras").value;

    let tres = cifras.split('')
    let suma = 0;
    tres.forEach(element => {
        suma = suma + element*1        
    });
    let resultado =  Math.pow(suma,2)
    document.getElementById('resultado_cifras').innerHTML = resultado
}


function repartija (){
    let monto = document.getElementById("socios").value;
    let part1 = parseFloat(monto)*0.3
    document.getElementById('parte-sa').innerHTML = part1
    let part2 = parseFloat(monto)*0.2
    document.getElementById('parte-sb').innerHTML = part2
    let part3 = parseFloat(monto)*0.5
    document.getElementById('parte-sc').innerHTML = part3
}

function igv (){
    let base = document.getElementById("costo").value;
    let onlyigv = parseFloat(base)*0.18
    document.getElementById('igv').innerHTML = onlyigv
    let total = parseFloat(base)*1.18
    document.getElementById('total').innerHTML = total
}

function entradas(){
    let generales = document.getElementById("generales").value;
    let recaugen = parseFloat(generales)*150
    document.getElementById('general').innerHTML = recaugen;

    let mayores = document.getElementById("65").value;
    let recaumay = parseFloat(mayores)*50
    document.getElementById('mayores').innerHTML = recaumay;

    let menores = document.getElementById("menores").value;
    let recaumen = parseFloat(menores)*80
    document.getElementById('menor').innerHTML = recaumen;

    let total = recaugen + recaumay + recaumen;
    console.log(total)
    document.getElementById('total_entradas').innerHTML = total
}