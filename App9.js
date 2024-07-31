let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese una palabra para comprobar si es palindromo o no: ', (palabra) => {
    palabra = palabra.toLowerCase()
      palabra = palabra.replace(/\s+/g,'')
       const palindromo = palabra.split('').reverse().join('')

    if (palabra === palindromo) {
        console.log(palabra + "es un palíndromo")
    } else {
        console.log(palabra + "no es un palíndromo" )
    }

    process.exit();
});