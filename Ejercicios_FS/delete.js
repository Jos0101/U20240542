
const fs = require('fs')
const fileName = 'estudiantes.json'


function deleteStudent(){
fs.readFile(fileName, 'utf8',(err,data) =>{
    if(err){
      console.error("error al leer el archivo Json", err)
      return;

  }
  const estudiantes = JSON.parse(data);
  estudiantes.splice(0, 1);


  fs.writeFile(fileName, JSON.stringify(estudiantes,null,2),(err) =>{
    if(err){
        console.log('Error al eliminar estudiante')
    }else{
        console.log('Estudiante eliminado exitosamente')
    }
  });
 });
}
   module.exports = deleteStudent;