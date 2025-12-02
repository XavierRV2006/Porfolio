// alert("Hola");
//let eresXavi = confirm("Eres Xavi?");
//console.log(eresXavi);

//let nombre = prompt("¿Cual es tu nombre?");
//console.log(nombre);

//let edad = prompt("¿Cual es tu edad?", 18);
//console.log(edad);

//let color = prompt("¿Cual es tu color favorito?");
//console.log(color);
// for (inicialización; condición; incremento)
for (i = 0; i < 10; i++) {
   console.log("Valor de i:", i);
}

// doble contador
for (i = 0, j = 10; i < 10; i++, j--) {
   console.log("Valor de i y j:", i, j);
}

let n = parseInt(prompt("Introduce un número N:", "10"), 10);
if (isNaN(n) || n < 1) {
    console.log("Valor inválido. Introduce un entero positivo mayor o igual a 1.");
} else {
    let suma = n * (n + 1) / 2;
    console.log("La suma de 1 a", n, "es", suma);
}


let inicio = parseInt(prompt("Introduce el inicio del rango:", "1"), 10);
let fin = parseInt(prompt("Introduce el fin del rango:", "10"), 10);

if (isNaN(inicio) || isNaN(fin)) {
    console.log("Valor inválido. Introduce números enteros.");
} else {
    if (inicio > fin) [inicio, fin] = [fin, inicio]; // intercambia si el usuario invirtió el rango
    console.log("Números pares en el rango de", inicio, "a", fin + ":");
    for (let num = inicio; num <= fin; num++) {
        if (num % 2 === 0) console.log(num);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log("Línea " + i + ": " + "*".repeat(i));
}
// Árbol de Navidad con adornos aleatorios
(function() {
    let altura = 10;
    if (isNaN(altura) || altura < 3) {
        console.log("Altura inválida. Introduce un número entero >= 3.");
        return;
    }

    const repeat = (s, n) => s.repeat(n);
    const anchoMax = 2 * altura - 1;
    for (let i = 0; i < altura; i++) {
        const espacios = altura - 1 - i;
        const hojas = 2 * i + 1;
        let linea = repeat(" ", espacios) + repeat("*", hojas);
        console.log(linea);
    }

    // tronco
    let troncoAncho = Math.max(1, Math.floor(altura / 3));
    if (troncoAncho % 2 === 0) troncoAncho++; // ancho impar para centrar mejor
    const troncoAltura = Math.max(1, Math.floor(altura / 4));
    const pad = Math.floor((anchoMax - troncoAncho) / 2);
    for (let t = 0; t < troncoAltura; t++) {
        console.log(repeat(" ", pad) + repeat("|", troncoAncho));
    }
})();
let finPrimo = parseInt(prompt("Introduce el fin del rango de los primos:", "10"), 10);
if (isNaN(inicio) || isNaN(finPrimo)) {
    console.log("Valor inválido. Introduce números enteros.");
} else {
    if (inicio > finPrimo) [inicio, finPrimo] = [finPrimo, inicio];
    console.log("Números primos en el rango de", inicio, "a", fin + ":");

    // Comprueba primalidad usando límite en sqrt (Math.sqrt)
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        const limite = Math.floor(Math.sqrt(n));
        for (let d = 3; d <= limite; d += 2) {
            if (n % d === 0) return false;
        }
        return true;
    }

    let encontrado = false;
    for (let num = Math.max(2, inicio); num <= finPrimo; num++) {
        if (isPrime(num)) {
            console.log(num);
            encontrado = true;
        }
    }
    if (!encontrado) console.log("No se encontraron primos en el rango.");
}



// Juego de adivinar el número secreto
(function() {
    const secreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    while (true) {
        const entrada = prompt("Adivina el número secreto entre 1 y 100 (pulsa Cancelar para salir):");
        if (entrada === null) {
            console.log("Juego cancelado. Número secreto era:", secreto + ".", "Intentos:", intentos);
            break;
        }

        const intento = parseInt(entrada, 10);
        if (isNaN(intento) || intento < 1 || intento > 100) {
            console.log("Entrada inválida. Introduce un entero entre 1 y 100.");
            continue;
        }

        intentos++;

        if (intento === secreto) {
            console.log("¡Acertaste! El número secreto es", secreto + ".", "Intentos:", intentos);
            break;
        } else if (intento > secreto) {
            console.log("Demasiado alto. El número secreto es menor que", intento + ".");
        } else {
            console.log("Demasiado bajo. El número secreto es mayor que", intento + ".");
        }
    }
})();