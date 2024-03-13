const camp_texto = document.querySelector('#encriptar');
const camp_mensaje = document.querySelector('#desencriptar');

const matriz_Codigo = [
    ['e' , 'enter'], // indice 0
    ['i' , 'imes'], // indice 1
    ['a' , 'ai'], //indice 2
    ['u' , 'ufat'], //indice 3
    ['o' , 'ober'], //indice 4
];

function btnLock() {
    const texto = encriptar(camp_texto.value)
    camp_mensaje.value = texto;
    document.querySelector("#encriptar").value = '';
}

function encriptar(textoEncriptado) {
    for (let i = 0; i < matriz_Codigo.length; i++) {
        if (textoEncriptado.includes(matriz_Codigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(
                matriz_Codigo[i][0],
                matriz_Codigo[i][1]
            );
        }
    }
    return textoEncriptado;
}

function btnUnlock() {
    const textounlock = desEncriptar(camp_texto.value);
    camp_mensaje.value = textounlock;
    document.querySelector("#encriptar").value = '';
}

function desEncriptar(textoDesencriptado) {
    for (let i = 0; i < matriz_Codigo.length; i++) {
        if (textoDesencriptado.includes(matriz_Codigo[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(
                matriz_Codigo[i][1],
                matriz_Codigo[i][0]
            );
        }
    }
    return textoDesencriptado;
}

function copyText() {
    let inputText = document.getElementById("desencriptar");

    inputText.select();
    inputText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(inputText.value);

   /* cambiarNombre();*/
}

/*function cambiarNombre(){
    let nombre = document.querySelector("#copy")
    nombre.textContent = "copiado";  
}*/
