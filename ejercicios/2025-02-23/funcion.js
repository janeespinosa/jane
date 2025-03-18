let num1, num2;

process.stdin.on('data', (data) => {
  if (!num1) {
    num1 = parseFloat(data.toString().trim()); // Convertir a número
    if (isNaN(num1)) {
      console.log('Por favor, ingresa un número válido.');
      process.exit();
    }
    console.log('Ingresa el segundo número:');
  } else {
    num2 = parseFloat(data.toString().trim()); // Convertir a número
    if (isNaN(num2)) {
      console.log('Por favor, ingresa un número válido.');
      process.exit();
    }
    let suma = num1 + num2; // Ahora se suman como números
    console.log("La suma es:" , suma)
    process.exit();
  }
});

console.log('Ingresa el primer número:');

