function bulbasur(){
    let Imgs = ["url(Imgs/bulbasaur.png)"," url(Imgs/ivysaur.png)"," url(Imgs/venusaur.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[0].addEventListener("click",accion0);
    subImagenes[1].addEventListener("click",accion1);
    subImagenes[2].addEventListener("click",accion2);
    
    subImagenes[0].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[0].style.border = "2px solid black";subImagenes[1].style.border = "1px solid gray";subImagenes[2].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[1].style.border = "2px solid black";subImagenes[0].style.border = "1px solid gray";subImagenes[2].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[2].style.border = "2px solid black";subImagenes[1].style.border = "1px solid gray";subImagenes[0].style.border = "1px solid gray";}
}
bulbasur();

function charmander(){
   let  num1 = 3;
   let  num2 = 4;
   let  num3 = 5;
    
    let Imgs = ["url(Imgs/charmander.png)"," url(Imgs/charmeleon.png)"," url(Imgs/charizard.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal1")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
charmander();

function squirtle(){
    let  num1 = 6;
   let  num2 = 7;
   let  num3 = 8;
    
    let Imgs = ["url(Imgs/squirtle.png)"," url(Imgs/wartortle.png)"," url(Imgs/blastoise.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal2")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
squirtle();

function elekid(){
    let  num1 = 9;
   let  num2 = 10;
   let  num3 = 11;
    
    let Imgs = ["url(Imgs/elekid.png)"," url(Imgs/electabuzz.png)"," url(Imgs/electrivire.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal3")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
elekid();

function abra(){
    let  num1 = 12;
   let  num2 = 13;
   let  num3 = 14;
    
    let Imgs = ["url(Imgs/abra.png)"," url(Imgs/kadabra.png)"," url(Imgs/alakazam.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal4")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
abra();

function toto(){
    let  num1 = 15;
   let  num2 = 16;
   let  num3 = 17;
    
    let Imgs = ["url(Imgs/totodile.png)"," url(Imgs/croconaw.png)"," url(Imgs/feraligar.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal5")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
toto();

function chicorita(){
    let  num1 = 18;
   let  num2 = 19;
   let  num3 = 20;
    
    let Imgs = ["url(Imgs/chicorita.png)"," url(Imgs/bayleef.png)"," url(Imgs/meganium.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal6")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
chicorita();

function cindaquil(){
    let  num1 = 21;
   let  num2 = 22;
   let  num3 = 23;
    
    let Imgs = ["url(Imgs/cindacuil.png)"," url(Imgs/quilava.png)"," url(Imgs/typlosion.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal7")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
cindaquil();

function voltorb(){
    let  num1 = 24;
   let  num2 = 25;
    
    let Imgs = ["url(Imgs/voltorb.png)"," url(Imgs/electrode.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal8")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";}
}
voltorb();

function machop(){
    let  num1 = 26;
   let  num2 = 27;
   let  num3 = 28;
    
    let Imgs = ["url(Imgs/machop.png)"," url(Imgs/machoke.png)"," url(Imgs/machamp.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal9")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    subImagenes[num3].addEventListener("click",accion2);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";subImagenes[num3].style.border = "1px solid gray";}
    function accion2(){imagenPrincipal.style.backgroundImage =Imgs[2];subImagenes[num3].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";subImagenes[num1].style.border = "1px solid gray";}
}
machop();

function wailmer(){
    let  num1 = 29;
   let  num2 = 30;
    
    let Imgs = ["url(Imgs/wailmer.png)"," url(Imgs/wailord.png)"];
    
    let imagenPrincipal = document.querySelectorAll(".imagen-principal10")[0];
    let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
    
    subImagenes[num1].addEventListener("click",accion0);
    subImagenes[num2].addEventListener("click",accion1);
    
    subImagenes[num1].style.border = "2px solid black"

    function accion0(){imagenPrincipal.style.backgroundImage =Imgs[0];subImagenes[num1].style.border = "2px solid black";subImagenes[num2].style.border = "1px solid gray";}
    function accion1(){imagenPrincipal.style.backgroundImage =Imgs[1];subImagenes[num2].style.border = "2px solid black";subImagenes[num1].style.border = "1px solid gray";}
}
wailmer();
