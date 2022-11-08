class Producto{
    constructor(nombre, precio, stock){

        this.nombre = nombre;
        this.precio = precio;
    }

    cantidad = 1;
}


    let arreglo_carrito = [];

    let boton_comprar = document.querySelectorAll(".botonCompra"); //ojo, va con "." porque es un selector
    let icono_carrito = document.getElementById("icon-carrito");
    let div_carrito = document.getElementById("div-carrito");
    let tabla_carrito = document.getElementById("tabla-carrito");
    let boton_recuperar_carrito = document.getElementById("boton-recuperar-carrito");

    icono_carrito.addEventListener("click",evaluar_carrito); //evalua si la seccion del carrito esta desplegada.

    //recorre todos los elementos de la coleccion boton_comprar y les asigna el evento
    for(let b of boton_comprar){
        b.addEventListener("click" , agregar_al_carrito )
    }
    
    function agregar_al_carrito(e){
    
        let boton = e.target;
        let card_body = boton.parentNode;
       
        //capturo el nombre y el precio que estan en h5 y h3 de cada card
        let nombre_producto = card_body.querySelector("h5").textContent;
        let precio_producto = parseFloat( card_body.querySelector("h3").textContent);
        
        //genero un objeto de la clase producto y lo agrego al arreglo
        let producto = new Producto(nombre_producto,precio_producto);
        arreglo_carrito.push(producto);
        console.log("arreglo del carrito de compras", arreglo_carrito);
    

        //calculo la suma de todos los productos
        let suma = 0;
        for(let a of arreglo_carrito){
            suma = suma + a.precio;
        }
        console.log("suma",suma);
        


        //agrego la fila cuando se agrega cada producto
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${producto.nombre}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.precio}</td>
                        <td><button class="btn btn-info borrar-elemento">Borrar</td>`;


        let tabla_body = document.getElementById("tabla-body");
        tabla_body.append(fila);

        //agrego la fila "Total"
        let th_cantidad_total = document.getElementById("th-cant-total");
        let cant_aux = arreglo_carrito.length;
        th_cantidad_total.innerHTML = `${cant_aux}`;
        
        let th_precio_total = document.getElementById("th-precio-total");
        th_precio_total.innerHTML = `${suma}`;


        //Boton "borrar"
        let boton_borrar = document.querySelectorAll(".borrar-elemento");
        for(let b of boton_borrar){
            b.addEventListener("click" , borrar_del_carrito)
            }

            function borrar_del_carrito(e){
                let abuelo = e.target.parentNode.parentNode;
                abuelo.remove();
                console.log(e);
            }//falta que reste el costo y la cantidad
            
            let arreglo_carrito_js = JSON.stringify(arreglo_carrito);
            console.log("a",arreglo_carrito);
            console.log(arreglo_carrito_js);
            localStorage.setItem("carrito_storage",arreglo_carrito_js);

    }

    
    let flag = 0;
    //esta funcion revisa si la pantalla del carrito es visible o no
    function evaluar_carrito(){
        if(flag == 0){
            mostrar_carrito();
        }
        else{
            ocultar_carrito();
        }
    }
            function mostrar_carrito(producto){
                div_carrito.style.display = "block";
                icono_carrito.style.color = "red";
                flag = 1;
            }
            function ocultar_carrito(){
                div_carrito.style.display = "none";
                icono_carrito.style.color = "black";
                flag = 0;
            }   
    
   