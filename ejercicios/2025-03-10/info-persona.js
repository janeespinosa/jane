// Crear un objeto con información de una persona
let persona = {
    nombre: "Janeth",
    apellido: "Espinosa",
    edad: 32,
    ciudad: "Cancun",
    profesion: "Desarrollador Web",
    hobbies: ["leer", "correr", "viajar"],
    esEstudiante: false
};

// Acceder a las propiedades del objeto
console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
console.log("Profesión: " + persona.profesion);
console.log("Hobbies: " + persona.hobbies.join(", "));
console.log("¿Es estudiante? " + (persona.esEstudiante ? "Sí" : "No"));