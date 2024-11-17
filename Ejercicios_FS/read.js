const fs = require('fs')
const fileName = 'estudiantes.json'

function read(){
fs.readFile(fileName, 'utf8',(err,content) =>{
    if(err){
      console.error("erro al leer el archivo Json", err)
      return;

  }
  const estudiantes = JSON.parse(content);
  console.log('contenido del archivo Json:', estudiantes)
 
 });
}
module.exports = read;