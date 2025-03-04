let num1, num2;

process.stdin.on('data', (data) => {
  if (!num1) {
    num1 = parseFloat(data.toString().trim());
    console.log('Ingresa el segundo número:');
  } else {
    num2 = parseFloat(data.toString().trim());
    let suma = num1 + num2;
    console.log ("La suma es: ${suma}");
    process.exit();
  }
});

console.log('Ingresa el primer número:');

