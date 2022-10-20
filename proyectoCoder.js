class Producto{
    constructor(nombre, precio, stock){

        this.nombre = nombre;
        this.precio = precio;
    }

    get_datos(){
        console.log("Nombre del producto", this.nombre);
        console.log("Precio del producto",this.precio);
    }
}

//DECLARACION DE FUNCIONES

function alta_productos(c){

    let lista_productos = [];

    for (let i=0; i<c; i++){

        let nombre = prompt ("ingrese el nombre del producto: "+(i+1));
        let precio = parseFloat(prompt("ingrese el precio: "+(i+1)));
        let stock = prompt ("ingrese el stock del producto: "+(i+1));
        let producto = new Producto(nombre, precio, stock);

        lista_productos.push(producto);
    }

    console.log(lista_productos);
    return lista_productos;
}

function consultar_productos(arr){

    for(let producto of arr){
        producto.get_datos();
    }
}

function calcular_suma(arr){
    let suma = 0
    for(let producto of arr){
        suma = suma +producto.precio;
    }
    return suma
}

function aplicar_descuento(s,d){
    s = s*(1-d/100);
    return s;
}

//CODIGO    

let entrada = prompt("Bienvenido ¿Desea agregar productos? -s/n-");
let suma = 0;

if(entrada == "s"){
    let cantidad = prompt("¿Cuantos productos desea ingresar?");
    let lista=[] = alta_productos(cantidad);

    consultar_productos(lista);    
    console.log("Monto total de la lista: $", suma = calcular_suma(lista));
    let entrada2 = prompt("¿Desea aplicar algun descuento? -s/n-")
    if(entrada2 = "s"){
        let descuento = parseFloat(prompt("Ingrese el descuento en %"));
        let salida = aplicar_descuento(suma,descuento);
        console.log("El monto final, aplicando un descuento de: "+descuento+ " es: "+salida);
    }
    else{
        console.log("Que tenga buen dia");
    }
    
}
else if(entrada == "n"){
    console.log("Que tenga buen dia");}
    else{
    console.log("Ingreso incorrecto, vuelva a empezar");}
    


