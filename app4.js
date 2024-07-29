 let readline = require('readline')

let rl = readline.createInterface(
  process.stdin,
  process.stdout

)

rl.question('Ingrese un mensaje:',(mensaje)=>{
  const cadena = mensaje.toUpperCase()
  console.log("el numero de caracteres  del mensaje es: ", cadena)
  process.exit()

})