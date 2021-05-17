let contador = 1;
let precioProducto = Number(document.getElementById("precio-producto").innerHTML);

function sacarSubtotal() {
    let subtotal = contador * precioProducto;
    subtotal2 = subtotal.toFixed(2);  
    document.getElementById("precio-subtotal").innerHTML = subtotal2 + " €";
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

