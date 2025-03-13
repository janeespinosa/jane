function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso:
let numero = 4;
console.log("El factorial de " ,numero ,"es" ,factorial(numero));