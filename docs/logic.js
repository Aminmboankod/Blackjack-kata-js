let suma = 0;
let tiradas = 0;


function tirar() {
    const xhttp = new XMLHttpRequest;
    xhttp.open("GET", "http://172.16.130.215/tom.php");
    xhttp.send();
    xhttp.onload = function() {
        if (xhttp.status == 200) {
            const data = JSON.parse(xhttp.responseText);
            const numero = data.numero;
            suma += numero;
            document.getElementById("suma").innerHTML = suma;
            document.getElementById("tiradas").innerHTML += "/n"+numero;
        } else { console.log("Conexión fallida")}
    }

}

function plantarse() {
    if (suma <= 18) {
        document.getElementById("resultado").innerHTML = '<div id="gallina">Eres un gallina</div>';
    } else {
        document.getElementById("resultado").innerHTML = '<div id="gallina">Eres un campeón</div>';
    }
}