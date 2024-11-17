const fs = require('fs')
const fileName = 'estudiantes.json'

function add(){
fs.readFile(fileName, 'utf8',(err,data) =>{
    if(err){
      console.error("erro al leer el archivo Json", err)
      return;

  }

  const estudiantes = JSON.parse(data);
  const nuevoEstudiante = {nombre: 'pedriño', edad: 18, carrera: 'Ingenieria en base de datos'}
  estudiantes.push(nuevoEstudiante);

  
  fs.writeFile(fileName, JSON.stringify(estudiantes,null,2),(err) =>{
    if(err){
      console.error("error al escribir el archivo json", err)
      return;

  }else{
      console.log("estudiante agregado con exito")
    }
   });
 });
};

 module.exports = add;