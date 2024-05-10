const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 + num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 - num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 * num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 / num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

function agregarElemento() {
    // En el div en su contenido voy a poner codigo html
    document.getElementById('idDivision').innerHTML = "<button>Nuevo</button>";
}

function quitarElemento() {
    document.getElementById('idDivision').innerHTML = "";
}

function conceptosJS() {
    /*
    Tipos de datos en JS
    let, var y const (almacenar tipos de datos todos)
     */

    const IVA = 15;
    console.log(IVA);

    // var está quedando en desuso, let maneja mejor la memoria
    var nombre = "Kendrick";
    console.log(nombre)
    nombre = "Drake";
    console.log(nombre)

    let apellido = "Lamar";
    console.log(apellido);
    apellido = "Lewndowski";
    console.log(apellido);
}