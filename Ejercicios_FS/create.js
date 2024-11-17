
const fs = require('fs');
const fileName = 'estudiantes.json';

function create(){
const estudiantes = [
    {nombre: 'Juan', edad: 19, carrera: 'Ingenieria electrica'},
    {nombre:'Ana', edad: 18 , carrera: 'Ingenieria civil'},
    {nombre:'Stanley', edad: 20, carrera: 'Ingenieria en desarrollo de software'}
]

fs.writeFile(fileName, JSON.stringify(estudiantes,null,2),(err) =>{
          if(err){
            console.error("erro al crear el archivo Json", err)
            return;

        }else{
            console.log("archivo creado con exito")
          }
    });
}

 module.exports = create;