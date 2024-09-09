let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje: ', (mensaje) => {
            const cadenaInvertida = mensaje.split('').reverse().join('');
            console.log(cadenaInvertida);

    process.exit()

    })