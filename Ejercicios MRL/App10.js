let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese una palabra: ', (palabra) => {
    //definimos el array de vocales
        const vocales = ["a", "e", "i", "o", "u"]
          let contarVocales = 0
           let i = 0

          while (i < palabra.length) {
            if (vocales.includes(palabra[i])) {
                contarVocales++;
            }
            i++;
        }

        console.log("La palabra '" + palabra + "' contiene " + contarVocales + " vocales.");

    process.exit()

    })