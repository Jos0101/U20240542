let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje: ', (mensaje) => {
            const contarPalabras = mensaje.trim().split(/\s+/);
            console.log("numero de palabras es: " + contarPalabras.length)

    process.exit()

    })