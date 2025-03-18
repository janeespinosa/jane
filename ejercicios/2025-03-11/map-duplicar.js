let array = [1, 2, 3, 4, 5];

let arrayObjects = [{a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}];

// Usar map para duplicar cada elemento del array
let arrayDuplicado = array.map(function(elemento) {
    return elemento * 3;
});

let arrayDuplicadoObjetos = arrayObjects.map(function(elemento) {
    const newObject = {...elemento};
    newObject.b = newObject.a + 1;
    return newObject;
});

// Pasar variables por referencia y por valor en javascript
console.log({arrayDuplicado, arrayObjects, arrayDuplicadoObjetos});