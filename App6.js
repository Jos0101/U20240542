let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje: ', (mensaje) => {
            const subcadena = mensaje.substring(0,10);
            console.log(subcadena);

    process.exit()

    })