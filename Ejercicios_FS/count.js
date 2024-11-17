
const fs = require('fs')
const fileName = 'estudiantes.json'

function count(){
fs.readFile(fileName, 'utf8',(err,content) =>{
    if(err){
      console.error("erro al leer el archivo Json", err)
      return;

  }
  const estudiantes = JSON.parse(content);
  console.log(`El total de estudiantes son: ${estudiantes.length}`)

 });
};

module.exports = count;