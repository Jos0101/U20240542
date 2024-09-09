let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje: ', (mensaje) => {
    rl.question('Ingrese la palabra a reemplazar: ', (palabra) => {
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
            const reemplazar = mensaje.replace(palabra + nuevaPalabra);
            console.log(reemplazar);

    process.exit()

      })
    })
  })