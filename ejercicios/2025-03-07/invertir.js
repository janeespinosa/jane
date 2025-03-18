function invertirCadena(cadena) {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}


// Operadores aritmeticos > < >= <= == === != !==
// Operadores logicos && || !
// Operadores de asignacion = += -= *= /= %=
// Operadores de incremento y decremento ++ --
// Operadores de concatenacion +

const texto = "Hola, mundo!";
const textoInvertido = invertirCadena(texto);
console.log(textoInvertido); // Output: "!odnum ,aloH"