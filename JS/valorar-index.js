let sobre5Bulba = localStorage.getItem("sobre5Bulba");
let totalBulba = localStorage.getItem("totalBulba");


switch (true) {
    case (sobre5Bulba < 0.6):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/0estrellas.png)";
        break;
    case (sobre5Bulba < 1):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/0.5estrella.png)";
        break;
    case (sobre5Bulba < 1.6):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/1estrella.png)";
        break;
    case (sobre5Bulba < 2):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/1.5estrellas.png)";
        break;
    case (sobre5Bulba < 2.6):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/2estrellas.png)";
        break;
    case (sobre5Bulba < 3):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/2.5estrellas.png)";
        break;
    case (sobre5Bulba < 3.6):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/3estrellas.png)";
        break;
    case (sobre5Bulba < 4):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/3.5estrellas.png)";
        break;
     case (sobre5Bulba < 4.6):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/4estrellas.png)";
        break;
    case (sobre5Bulba < 5):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/4.5estrellas.png)";
        break;
    case (sobre5Bulba == 5):
        document.getElementById("bulbaStar").style.backgroundImage = "url(Imgs/5estrellas.png)";
        break;
}
document.getElementById("Bulba").textContent = "(" + totalBulba + ")";




let sobre5Char = localStorage.getItem("sobre5Charm");
let totalChar = localStorage.getItem("totalCharm");

switch (true) {
    case (sobre5Char < 0.6):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/0estrellas.png)";
        break;
    case (sobre5Char < 1):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/0.5estrella.png)";
        break;
    case (sobre5Char < 1.6):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/1estrella.png)";
        break;
    case (sobre5Char < 2):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/1.5estrellas.png)";
        break;
    case (sobre5Char < 2.6):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/2estrellas.png)";
        break;
    case (sobre5Char < 3):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/2.5estrellas.png)";
        break;
    case (sobre5Char < 3.6):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/3estrellas.png)";
        break;
    case (sobre5Char < 4):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/3.5estrellas.png)";
        break;
     case (sobre5Char < 4.6):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/4estrellas.png)";
        break;
    case (sobre5Char < 5):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/4.5estrellas.png)";
        break;
    case (sobre5Char == 5):
        document.getElementById("sobre5Char").style.backgroundImage = "url(Imgs/5estrellas.png)";
        break;
}
document.getElementById("Charm").textContent = "(" + totalChar + ")";



let sobre5Squir = localStorage.getItem("sobre5Squir");
let totalSquir = localStorage.getItem("totalSquir");

switch (true) {
    case (sobre5Squir < 0.6):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/0estrellas.png)";
        break;
    case (sobre5Squir < 1):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/0.5estrella.png)";
        break;
    case (sobre5Squir < 1.6):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/1estrella.png)";
        break;
    case (sobre5Squir < 2):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/1.5estrellas.png)";
        break;
    case (sobre5Squir < 2.6):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/2estrellas.png)";
        break;
    case (sobre5Squir < 3):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/2.5estrellas.png)";
        break;
    case (sobre5Squir < 3.6):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/3estrellas.png)";
        break;
    case (sobre5Squir < 4):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/3.5estrellas.png)";
        break;
     case (sobre5Squir < 4.6):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/4estrellas.png)";
        break;
    case (sobre5Squir < 5):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/4.5estrellas.png)";
        break;
    case (sobre5Squir == 5):
        document.getElementById("sobre5Squir").style.backgroundImage = "url(Imgs/5estrellas.png)";
        break;
}
document.getElementById("Squir").textContent = "(" + totalSquir + ")";
