let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");


function dividir(num1, num2, callback) {
    // Convertir las entradas a números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Verificar si las entradas son numéricas
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Ambos valores deben ser números.");
        return;
    }

    // Verificar si el segundo número es cero
    if (num2 === 0) {
        alert("Error: No se puede dividir por cero.");
        return;
    }

    // Si no hay errores, realizar la división y llamar al callback con el resultado
    const resultado = num1 / num2;
    callback(resultado);
}

dividir(numero1, numero2, function(resultado) {
    // Obtener el elemento del DOM donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resultado");
    // Mostrar el resultado
    resultadoDiv.innerHTML = `<p>El resultado de la división es: ${resultado}</p>`;
});
