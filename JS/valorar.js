function comenzar(pokemon){
    
    document.getElementById("0estrellas").addEventListener("click",function () {
        if (localStorage.contador0) {
            localStorage.contador0 = Number(localStorage.contador0)+1;
        } else localStorage.contador0 = 1;

        if (localStorage.getItem("valor0"+ pokemon)) {
            localStorage.setItem("valor0" + pokemon, localStorage.contador0)
        }else{
            localStorage.setItem("valor0" + pokemon, 1);
        }
    })

    document.getElementById("1estrellas").addEventListener("click",function () {
        if (localStorage.contador1) {
            localStorage.contador1 = Number(localStorage.contador1)+1;
        } else localStorage.contador1 = 1;

        if (localStorage.getItem("valor1"+ pokemon)) {
            localStorage.setItem("valor1" + pokemon, localStorage.contador1)
        }else{
            localStorage.setItem("valor1" + pokemon, 1);
        }
    })

    document.getElementById("2estrellas").addEventListener("click",function () {
        if (localStorage.contador2) {
            localStorage.contador2 = Number(localStorage.contador2)+1;
        } else localStorage.contador2 = 1;

        if (localStorage.getItem("valor2"+ pokemon)) {
            localStorage.setItem("valor2" + pokemon, localStorage.contador2)
        }else{
            localStorage.setItem("valor2" + pokemon, 1);
        }
    })

    document.getElementById("3estrellas").addEventListener("click",function () {
        if (localStorage.contador3) {
            localStorage.contador3 = Number(localStorage.contador3)+1;
        } else localStorage.contador3 = 1;

        if (localStorage.getItem("valor3"+ pokemon)) {
            localStorage.setItem("valor3" + pokemon, localStorage.contador3)
        }else{
            localStorage.setItem("valor3" + pokemon, 1);
        }
    })

    document.getElementById("4estrellas").addEventListener("click",function () {
        if (localStorage.contador4) {
            localStorage.contador4 = Number(localStorage.contador4)+1;
        } else localStorage.contador4 = 1;

        if (localStorage.getItem("valor4"+ pokemon)) {
            localStorage.setItem("valor4" + pokemon, localStorage.contador4)
        }else{
            localStorage.setItem("valor4" + pokemon, 1);
        }
    })

    document.getElementById("5estrellas").addEventListener("click",function () {
        if (localStorage.contador5) {
            localStorage.contador5 = Number(localStorage.contador5)+1;
        } else localStorage.contador5 = 1;

        if (localStorage.getItem("valor5"+ pokemon)) {
            localStorage.setItem("valor5" + pokemon, localStorage.contador5)
        }else{
            localStorage.setItem("valor5" + pokemon, 1);
        }
    })

    let cincoEstrellas = Number(localStorage.getItem("valor5"+ pokemon));
    let cuatroEstrellas = Number(localStorage.getItem("valor4"+ pokemon));
    let tresEstrellas = Number(localStorage.getItem("valor3"+ pokemon));
    let dosEstrellas = Number(localStorage.getItem("valor2"+ pokemon));
    let unaEstrella = Number(localStorage.getItem("valor1"+ pokemon));
    let ceroEstrellas = Number(localStorage.getItem("valor0"+ pokemon));

    let totalValoraciones = Number(cincoEstrellas + cuatroEstrellas + tresEstrellas + dosEstrellas + unaEstrella + ceroEstrellas);

    let porcentajeCinco = Math.round((cincoEstrellas * 100) / totalValoraciones);
    let porcentajeCuatro = Math.round((cuatroEstrellas * 100) / totalValoraciones);
    let porcentajeTres = Math.round((tresEstrellas * 100) / totalValoraciones);
    let porcentajeDos = Math.round((dosEstrellas * 100) / totalValoraciones);
    let porcentajeUno = Math.round((unaEstrella * 100) / totalValoraciones);
    let porcentajeCero = Math.round((ceroEstrellas * 100) / totalValoraciones);

    if (isNaN(porcentajeCinco) && isNaN(porcentajeCuatro) && isNaN(porcentajeTres) && isNaN(porcentajeDos) && isNaN(porcentajeUno) 
    && isNaN(porcentajeCero)) {
        porcentajeCinco = 0;
        porcentajeCuatro = 0;
        porcentajeTres = 0;
        porcentajeDos = 0;
        porcentajeUno = 0;
        porcentajeCero = 0;

        document.getElementById("numero5").textContent = "El " + porcentajeCinco + " %" + " ha valorado con 5 estrellas";
        document.getElementById("numero4").textContent = "El " + porcentajeCuatro + " %" + " ha valorado con 4 estrellas";
        document.getElementById("numero3").textContent = "El " + porcentajeTres + " %" + " ha valorado con 3 estrellas";
        document.getElementById("numero2").textContent = "El " + porcentajeDos + " %" + " ha valorado con 2 estrellas";
        document.getElementById("numero1").textContent = "El " + porcentajeUno + " %" + " ha valorado con 1 estrellas";
        document.getElementById("numero0").textContent = "El " + porcentajeCero + " %" + " ha valorado con 0 estrellas";

        document.getElementById("total").textContent = "Total de valoraciones: " + totalValoraciones;

    }else{
        document.getElementById("numero5").textContent = "El " + porcentajeCinco + " %" + " ha valorado con 5 estrellas";
        document.getElementById("numero4").textContent = "El " + porcentajeCuatro + " %" + " ha valorado con 4 estrellas";
        document.getElementById("numero3").textContent = "El " + porcentajeTres + " %" + " ha valorado con 3 estrellas";
        document.getElementById("numero2").textContent = "El " + porcentajeDos + " %" + " ha valorado con 2 estrellas";
        document.getElementById("numero1").textContent = "El " + porcentajeUno + " %" + " ha valorado con 1 estrellas";
        document.getElementById("numero0").textContent = "El " + porcentajeCero + " %" + " ha valorado con 0 estrellas";

        document.getElementById("total").textContent = "Total de valoraciones: " + totalValoraciones;
    }

    let anchoGrafico5 = String(porcentajeCinco) + "%";
    let anchoGrafico4 = String(porcentajeCuatro) + "%";
    let anchoGrafico3 = String(porcentajeTres) + "%";
    let anchoGrafico2 = String(porcentajeDos) + "%";
    let anchoGrafico1 = String(porcentajeUno) + "%";
    let anchoGrafico0 = String(porcentajeCero) + "%";

    document.getElementById("graficoCinco").style.width = anchoGrafico5;
    document.getElementById("graficoCuatro").style.width = anchoGrafico4;
    document.getElementById("graficoTres").style.width = anchoGrafico3;
    document.getElementById("graficoDos").style.width = anchoGrafico2;
    document.getElementById("graficoUno").style.width = anchoGrafico1;
    document.getElementById("graficoCero").style.width = anchoGrafico0;

    let sobreCinco = porcentajeCinco * 5 + porcentajeCuatro*4 + porcentajeTres*3 + porcentajeDos*2 + porcentajeUno*1;
    sobreCinco = sobreCinco / 100;

    if (localStorage.getItem("sobre5"+ pokemon)) {
        localStorage.setItem("sobre5" + pokemon, sobreCinco)
    }else{
        localStorage.setItem("sobre5" + pokemon, 0);
    }

    document.getElementById("imprimir").addEventListener("click",function(){
        console.log(localStorage);

    })

    document.getElementById("limpiar").addEventListener("click",function(){
        localStorage.valor5 = 1;
        localStorage.clear();

    })
}



function comenzar2(pokemon){
    
    document.getElementById("0estrellas").addEventListener("click",function () {
        if (localStorage.contador0) {
            localStorage.contador0 = Number(localStorage.contador0)+1;
        } else localStorage.contador0 = 1;

        if (localStorage.getItem("valor0"+ pokemon)) {
            localStorage.setItem("valor0" + pokemon, localStorage.contador0)
        }else{
            localStorage.setItem("valor0" + pokemon, 1);
        }
    })

    document.getElementById("1estrellas").addEventListener("click",function () {
        if (localStorage.contador1) {
            localStorage.contador1 = Number(localStorage.contador1)+1;
        } else localStorage.contador1 = 1;

        if (localStorage.getItem("valor1"+ pokemon)) {
            localStorage.setItem("valor1" + pokemon, localStorage.contador1)
        }else{
            localStorage.setItem("valor1" + pokemon, 1);
        }
    })

    document.getElementById("2estrellas").addEventListener("click",function () {
        if (localStorage.contador2) {
            localStorage.contador2 = Number(localStorage.contador2)+1;
        } else localStorage.contador2 = 1;

        if (localStorage.getItem("valor2"+ pokemon)) {
            localStorage.setItem("valor2" + pokemon, localStorage.contador2)
        }else{
            localStorage.setItem("valor2" + pokemon, 1);
        }
    })

    document.getElementById("3estrellas").addEventListener("click",function () {
        if (localStorage.contador3) {
            localStorage.contador3 = Number(localStorage.contador3)+1;
        } else localStorage.contador3 = 1;

        if (localStorage.getItem("valor3"+ pokemon)) {
            localStorage.setItem("valor3" + pokemon, localStorage.contador3)
        }else{
            localStorage.setItem("valor3" + pokemon, 1);
        }
    })

    document.getElementById("4estrellas").addEventListener("click",function () {
        if (localStorage.contador4) {
            localStorage.contador4 = Number(localStorage.contador4)+1;
        } else localStorage.contador4 = 1;

        if (localStorage.getItem("valor4"+ pokemon)) {
            localStorage.setItem("valor4" + pokemon, localStorage.contador4)
        }else{
            localStorage.setItem("valor4" + pokemon, 1);
        }
    })

    document.getElementById("5estrellas").addEventListener("click",function () {
        if (localStorage.contador5) {
            localStorage.contador5 = Number(localStorage.contador5)+1;
        } else localStorage.contador5 = 1;

        if (localStorage.getItem("valor5"+ pokemon)) {
            localStorage.setItem("valor5" + pokemon, localStorage.contador5)
        }else{
            localStorage.setItem("valor5" + pokemon, 1);
        }
    })

    let cincoEstrellas = Number(localStorage.getItem("valor5"+ pokemon));
    let cuatroEstrellas = Number(localStorage.getItem("valor4"+ pokemon));
    let tresEstrellas = Number(localStorage.getItem("valor3"+ pokemon));
    let dosEstrellas = Number(localStorage.getItem("valor2"+ pokemon));
    let unaEstrella = Number(localStorage.getItem("valor1"+ pokemon));
    let ceroEstrellas = Number(localStorage.getItem("valor0"+ pokemon));

    let totalValoraciones = Number(cincoEstrellas + cuatroEstrellas + tresEstrellas + dosEstrellas + unaEstrella + ceroEstrellas);

    let porcentajeCinco = Math.round((cincoEstrellas * 100) / totalValoraciones);
    let porcentajeCuatro = Math.round((cuatroEstrellas * 100) / totalValoraciones);
    let porcentajeTres = Math.round((tresEstrellas * 100) / totalValoraciones);
    let porcentajeDos = Math.round((dosEstrellas * 100) / totalValoraciones);
    let porcentajeUno = Math.round((unaEstrella * 100) / totalValoraciones);
    let porcentajeCero = Math.round((ceroEstrellas * 100) / totalValoraciones);

    if (isNaN(porcentajeCinco) && isNaN(porcentajeCuatro) && isNaN(porcentajeTres) && isNaN(porcentajeDos) && isNaN(porcentajeUno) 
    && isNaN(porcentajeCero)) {
        porcentajeCinco = 0;
        porcentajeCuatro = 0;
        porcentajeTres = 0;
        porcentajeDos = 0;
        porcentajeUno = 0;
        porcentajeCero = 0;

        document.getElementById("numero5").textContent = "El " + porcentajeCinco + " %" + " ha valorado con 5 estrellas";
        document.getElementById("numero4").textContent = "El " + porcentajeCuatro + " %" + " ha valorado con 4 estrellas";
        document.getElementById("numero3").textContent = "El " + porcentajeTres + " %" + " ha valorado con 3 estrellas";
        document.getElementById("numero2").textContent = "El " + porcentajeDos + " %" + " ha valorado con 2 estrellas";
        document.getElementById("numero1").textContent = "El " + porcentajeUno + " %" + " ha valorado con 1 estrellas";
        document.getElementById("numero0").textContent = "El " + porcentajeCero + " %" + " ha valorado con 0 estrellas";

        document.getElementById("total").textContent = "Total de valoraciones: " + totalValoraciones;

    }else{
        document.getElementById("numero5").textContent = "El " + porcentajeCinco + " %" + " ha valorado con 5 estrellas";
        document.getElementById("numero4").textContent = "El " + porcentajeCuatro + " %" + " ha valorado con 4 estrellas";
        document.getElementById("numero3").textContent = "El " + porcentajeTres + " %" + " ha valorado con 3 estrellas";
        document.getElementById("numero2").textContent = "El " + porcentajeDos + " %" + " ha valorado con 2 estrellas";
        document.getElementById("numero1").textContent = "El " + porcentajeUno + " %" + " ha valorado con 1 estrellas";
        document.getElementById("numero0").textContent = "El " + porcentajeCero + " %" + " ha valorado con 0 estrellas";

        document.getElementById("total").textContent = "Total de valoraciones: " + totalValoraciones;
    }

    let anchoGrafico5 = String(porcentajeCinco) + "%";
    let anchoGrafico4 = String(porcentajeCuatro) + "%";
    let anchoGrafico3 = String(porcentajeTres) + "%";
    let anchoGrafico2 = String(porcentajeDos) + "%";
    let anchoGrafico1 = String(porcentajeUno) + "%";
    let anchoGrafico0 = String(porcentajeCero) + "%";

    document.getElementById("graficoCinco").style.width = anchoGrafico5;
    document.getElementById("graficoCuatro").style.width = anchoGrafico4;
    document.getElementById("graficoTres").style.width = anchoGrafico3;
    document.getElementById("graficoDos").style.width = anchoGrafico2;
    document.getElementById("graficoUno").style.width = anchoGrafico1;
    document.getElementById("graficoCero").style.width = anchoGrafico0;

    let sobreCinco = porcentajeCinco * 5 + porcentajeCuatro*4 + porcentajeTres*3 + porcentajeDos*2 + porcentajeUno*1;
    sobreCinco = sobreCinco / 100;

    if (localStorage.getItem("sobre5"+ pokemon)) {
        localStorage.setItem("sobre5" + pokemon, sobreCinco)
    }else{
        localStorage.setItem("sobre5" + pokemon, 0);
    }

    document.getElementById("imprimir").addEventListener("click",function(){
        console.log(localStorage);
    })

    document.getElementById("limpiar").addEventListener("click",function(){
        localStorage.valor5 = 1;
        localStorage.clear();
    })
}









