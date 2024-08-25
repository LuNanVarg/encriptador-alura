function encriptar() {
    let texto = document.getElementById("texto").value;
    let titMens = document.getElementById("tit-mens");
    let parrafo = document.getElementById("parrafo");
    let cat = document.getElementById("cat");

    let textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titMens.textContent = "Texto encriptado con éxito.";
        parrafo.textContent = "";
        cat.src = "../img/encriptado.gif";
    } else {
        cat.src = "../img/desencriptadoExitoso.gif";
        titMens.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar.";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let titMens = document.getElementById("tit-mens");
    let parrafo = document.getElementById("parrafo");
    let cat = document.getElementById("cat");

    let textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");
     
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titMens.textContent = "Texto desencriptado con éxito.";
        parrafo.textContent = "";
        cat.src = "../img/desencriptadoExitoso.gif";
    } else {
        cat.src = "../img/error.gif";
        titMens.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}