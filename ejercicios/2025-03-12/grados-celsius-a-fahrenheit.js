function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let temperaturaCelsius = 28;
let temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
console.log("La temperatura en Fahrenheit es:" ,temperaturaFahrenheit);