let contador = 1;
let precioProducto = Number(document.getElementById("precio-producto").innerHTML);

function sacarSubtotal() {
    let subtotal = contador * precioProducto;
    subtotal2 = subtotal.toFixed(2);  
    document.getElementById("precio-subtotal").innerHTML = subtotal2 + " €";
    document.getElementById("precio-subtotal-cesta").innerHTML = subtotal2 + " €";

}

function sacarTeclado(){
    contador = document.getElementById("input-cantidad").value;

    sacarSubtotal();
}

document.getElementById("btn-mas").addEventListener("click",function(){
    contador++;
    document.getElementById("input-cantidad").value = contador;
    sacarSubtotal();
});

document.getElementById("btn-menos").addEventListener("click",function(){
    if (contador > 0) {
        contador--;
        document.getElementById("input-cantidad").value = contador;
        sacarSubtotal();   
    }
});

document.getElementById("add-carrito").addEventListener("click",function(){
    document.getElementById("precio-cesta").innerHTML = "1";
    document.getElementById("cantidad-cesta").innerHTML = contador;

    document.getElementById("cuerpo-cesta").style.display = "";
    document.getElementById("cuerpo-cesta-vacio").style.display = "none";

});

document.getElementById("remove-carrito").addEventListener("click",function(){
    document.getElementById("precio-cesta").innerHTML = "0";

    document.getElementById("cuerpo-cesta").style.display = "none";
    document.getElementById("cuerpo-cesta-vacio").style.display = "";
});

