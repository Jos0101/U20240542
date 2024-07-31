let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje: ', (mensaje) => {
        mensaje = mensaje.toLowerCase();
          const palabras = mensaje.split(' ');
          const palabrasCapitalizadas = palabras.map(palabra => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });
 
        const mensajeCapitalizado = palabrasCapitalizadas.join(' ');

            console.log(mensajeCapitalizado);

    process.exit()

    })