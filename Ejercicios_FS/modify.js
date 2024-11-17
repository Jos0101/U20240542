const fs = require('fs')
const fileName = 'estudiantes.json'

function modify(){
fs.readFile(fileName, 'utf8',(err,data) =>{
    if(err){
      console.error("error al leer el archivo Json", err)
      return;

  }
  const estudiantes = JSON.parse(data);
  estudiantes[0].edad = 20;
  estudiantes[0].carrera = 'Ingenieria aeroespacial';


  fs.writeFile(fileName, JSON.stringify(estudiantes,null,2),(err) =>{
    if(err){
        console.log('Error al modificar archivo JSON')
    }else{
        console.log('Edad y carrera actualizados correctamente')
    }
  });
 });
}

   module.exports = modify