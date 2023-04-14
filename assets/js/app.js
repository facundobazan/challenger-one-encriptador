window.onload = () => {
    console.info("carga finalizada");

    let msgSalida = document.querySelector(".msg-salida");
    let imgMuneco = document.querySelector(".muneco");
    let tituloEncriptado = document.querySelector(".titulo-encriptado");
    let textoEncriptado = document.querySelector(".texto-encriptado");

    let texto;

    const msgEntrada = document.querySelector(".msg-entrada");
    msgEntrada.addEventListener("change", function () {
        texto = msgEntrada.value;
    })
    msgEntrada.addEventListener("click", function () {
        msgEntrada.value = "";
        cambiarVisibilidad(false);
    })

    const runEncode = () => {
        if (texto.length < 1) return;
        msgSalida.value = Array.from(texto).reduce((a, b) => a += encode(b));
        cambiarVisibilidad(true);
    }

    const runDecode = () => {
        if (texto.length < 1) return;

        msgSalida.value = texto.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
        cambiarVisibilidad(true);
    }

    function encode(char) {
        char = char.replace(/a/g, "ai");
        char = char.replace(/e/g, "enter");
        char = char.replace(/i/g, "imes");
        char = char.replace(/o/g, "ober");
        char = char.replace(/u/g, "ufat");

        return char;
    }

    const btnEncode = document.querySelector(".btn-encriptar");
    btnEncode.addEventListener("click", runEncode);

    const btnDecode = document.querySelector(".btn-desencriptar");
    btnDecode.addEventListener("click", runDecode);

    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", function () { navigator.clipboard.writeText(msgSalida.value) });

    function cambiarVisibilidad(boolean) {
        if (boolean) {
            msgSalida.style.visibility = "visible";
            btnCopiar.style.visibility = "visible";
            imgMuneco.hidden = true;
            tituloEncriptado.hidden = true;
            textoEncriptado.hidden = true;
        } else {
            msgSalida.style.visibility = "hidden";
            btnCopiar.style.visibility = "hidden";
            imgMuneco.hidden = false;
            tituloEncriptado.hidden = false;
            textoEncriptado.hidden = false;
        }
    }
}