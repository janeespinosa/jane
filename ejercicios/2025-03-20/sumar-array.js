function sumarArreglo(numeros){
    if (numeros instanceof Array){  
    let suma= numeros.reduce((Acumulador, numero) => Acumulador + numero);
    return suma;
} else {
    throw TypeError ("el argumento debe ser un arreglo");
 }
}

try { 
    console.log(sumarArreglo([1,2,3,4,5,6,7,8,9]));
}  catch(e) {
    console.log(e.message);
}


console.log();
