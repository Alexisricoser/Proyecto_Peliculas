            let suma= 0;
            let contador=0;
            for (let i = 0; i < 5; i++) {
                let numero = parseInt(prompt("Introduce un número:"));
                numero = parseFloat(numero);
                suma += numero;
                if (numero > 100) {
                    contador++;
                }
            }
            alert("La suma de los números es: " + suma);
            alert("Cantidad de números mayores a 100: " + contador);