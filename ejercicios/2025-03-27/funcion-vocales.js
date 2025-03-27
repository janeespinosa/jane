function contarVocales(cadena) {
    /**
     * Esta función cuenta el número de vocales (a, e, i, o, u) en una cadena dada.
     * La función no distingue entre mayúsculas y minúsculas.
     * 
     * @param {string} cadena - La cadena en la que se contarán las vocales
     * @return {number} - El número total de vocales en la cadena
     */
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
    
    for (let caracter of cadena.toLowerCase()) {
        if (vocales.has(caracter)) {
            contador++;
        }
    }
    
    return contador;
}

// Ejemplo de uso:
const texto = "Hola Mundo";
console.log(contarVocales(texto));  // Salida: 4