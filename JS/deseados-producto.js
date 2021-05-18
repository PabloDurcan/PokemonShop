let contadorWish = 0;

let hola = document.getElementById("cuerpo-cesta-bulba");
console.log(hola.style.dis);

let corazonBulba = true;
document.getElementById("add-wish-bulba").addEventListener("click",function(){
    if (corazonBulba == true) {
        contadorWish++;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-bulba2").innerHTML = "&#xf004;";
        if (contadorWish != 0) {
            document.getElementById("cuerpo-cesta-bulba").style.display = "";
            document.getElementById("cuerpo-cesta-vacio").style.display = "none";
        }
        corazonBulba = false;
    }else{
        contadorWish--;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-bulba2").innerHTML = "&#xf08a;";
        document.getElementById("cuerpo-cesta-bulba").style.display = "none";
        if (contadorWish == 0) {
            document.getElementById("cuerpo-cesta-vacio").style.display = "";
        }
        corazonBulba = true;
    }
});
document.getElementById("remove-carrito-bulba").addEventListener("click",function(){
    document.getElementById("cuerpo-cesta-bulba").style.display = "none";
    contadorWish--;
    document.getElementById("num-wish").innerHTML = contadorWish;
    document.getElementById("add-wish-bulba2").innerHTML = "&#xf08a;";
    corazonBulba = true;
})



let corazonCharm = true;
document.getElementById("add-wish-charm").addEventListener("click",function(){
    if (corazonCharm == true) {
        contadorWish++;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-charm2").innerHTML = "&#xf004;";
        if (contadorWish != 0) {
            document.getElementById("cuerpo-cesta-charm").style.display = "";
            document.getElementById("cuerpo-cesta-vacio").style.display = "none";
        }
        corazonCharm = false;
    }else{
        contadorWish--;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-charm2").innerHTML = "&#xf08a;";
        document.getElementById("cuerpo-cesta-charm").style.display = "none";
        if (contadorWish == 0) {
            document.getElementById("cuerpo-cesta-vacio").style.display = "";
        }
        corazonCharm = true;
    }
});

document.getElementById("remove-carrito-char").addEventListener("click",function(){
    document.getElementById("cuerpo-cesta-charm").style.display = "none";
    contadorWish--;
    document.getElementById("num-wish").innerHTML = contadorWish;
    document.getElementById("add-wish-charm2").innerHTML = "&#xf08a;";
    corazonCharm = true;
});



let corazonSquir = true;
document.getElementById("add-wish-squir").addEventListener("click",function(){
    if (corazonSquir == true) {
        contadorWish++;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-squir2").innerHTML = "&#xf004;";
        if (contadorWish != 0) {
            document.getElementById("cuerpo-cesta-squir").style.display = "";
            document.getElementById("cuerpo-cesta-vacio").style.display = "none";
        }
        corazonSquir = false;
    }else{
        contadorWish--;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-squir2").innerHTML = "&#xf08a;";
        document.getElementById("cuerpo-cesta-squir").style.display = "none";
        if (contadorWish == 0) {
            document.getElementById("cuerpo-cesta-vacio").style.display = "";
        }
        corazonSquir = true;
    }
});

document.getElementById("remove-carrito-squir").addEventListener("click",function(){
    document.getElementById("cuerpo-cesta-squir").style.display = "none";
    contadorWish--;
    document.getElementById("num-wish").innerHTML = contadorWish;
    document.getElementById("add-wish-squir2").innerHTML = "&#xf08a;";
    corazonSquir = true;
});


let corazonLuca = true;
document.getElementById("add-wish-luca").addEventListener("click",function(){
    if (corazonLuca == true) {
        contadorWish++;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-luca2").innerHTML = "&#xf004;";
        if (contadorWish != 0) {
            document.getElementById("cuerpo-cesta-luca").style.display = "";
            document.getElementById("cuerpo-cesta-vacio").style.display = "none";
        }
        corazonLuca = false;
    }else{
        contadorWish--;
        document.getElementById("num-wish").innerHTML = contadorWish;
        document.getElementById("add-wish-luca2").innerHTML = "&#xf08a;";
        document.getElementById("cuerpo-cesta-luca").style.display = "none";
        if (contadorWish == 0) {
            document.getElementById("cuerpo-cesta-vacio").style.display = "";
        }
        corazonLuca = true;
    }
});

document.getElementById("remove-carrito-luca").addEventListener("click",function(){
    document.getElementById("cuerpo-cesta-luca").style.display = "none";
    contadorWish--;
    document.getElementById("num-wish").innerHTML = contadorWish;
    document.getElementById("add-wish-luca2").innerHTML = "&#xf08a;";
    corazonLuca = true;
});