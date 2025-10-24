            const numeros = [6, 8, 3, 12, 18];
            let suma = 0;
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] > 8) {
                    suma += numeros[i];
                }
            }
            alert("La suma de los números mayores a 8 es: " + suma);