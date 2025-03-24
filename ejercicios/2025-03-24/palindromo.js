function esPalindromo(palabra) {
    // Elimina espacios y convierte a minúsculas
    const texto = palabra.replace(/\s/g, '').toLowerCase();
    // Compara la palabra original con su versión invertida
    return texto === texto.split('').reverse().join('');
}

// Ejemplo de uso:
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("JavaScript")); // false
console.log(esPalindromo("Ana")); // true
console.log(esPalindromo("Anita lava la tina")); // true (ignora espacios)
console.log(esPalindromo("oso")); // true
console.log(esPalindromo("casa")); // false