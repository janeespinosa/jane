const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

readline.question('Por favor, ingresa un número: ', (numero) => {
    numero = parseInt(numero); // Convertir la entrada a un número entero
    if (isNaN(numero)) {
        console.log("por favor, ingresa el numero valido");
    } else {
        console.log("el numero es", numero, "y es", esParOImpar(numero));
    }
    readline.close();
});