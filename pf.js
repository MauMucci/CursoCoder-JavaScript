let cantidad = parseInt( prompt("Ingrese la cantidad de elementos a comprar"));
let total = calcular_suma(cantidad);


let descuento_bool = prompt("¿Aplicara algun descuento? Ingrese -si- o -no-");

if(descuento_bool == "si"){
    total = calcular_descuento(total);
    alert("El monto total a abonar es de: $"+total);
}else if(descuento_bool == "no"){
    alert("No hay descuentos, el monto a abonar es: $"+total);
}
else{
    alert("Ingreso incorrecto, vuelva a empezar");
    exit;
}


//DECLARACION DE FUNCIONES
function calcular_suma(c){

        if( true ==  isNaN(c)){ //isNAN devuelve un booleano, igual a 1 si No es Numero
            alert("el formato debe ser numero");
            exit;
        }

        else{
        let suma = 0;

            for(let i = 0; i < c; i++){

                let costo = parseFloat(prompt("ingrese el costo del producto numero: " + (i+1)));
                suma = suma + costo;
                console.log(suma);

            }
        alert("El monto total de los productos es de: "+suma);
        return suma;
    }
}


function calcular_descuento(t){
    let descuento = parseFloat( prompt("ingrese el descuento en %"));
    let t_con_descuento = t*(1-descuento/100);
    return t_con_descuento;
    
}


