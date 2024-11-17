
const readline =  require('readline');


//Llamamos las funciones de cada archivo
const create = require('./create');
const add = require('./add');
const read = require('./read');
const modify = require('./modify');
const deleteStudent = require('./delete');
const count = require('./count');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu(){
    console.log('\n---menu---')
    console.log('1. Crear archivo JSON')
    console.log('2. Leer archivo JSON')
    console.log('3. Agregar estudiante')
    console.log('4. Modificar archivo JSON')
    console.log('5. Eliminar estudiante')
    console.log('6. Contar estudiantes')
    console.log('7. Salir')

}

function manejarMenu(opcion){
    switch (opcion) {
        case '1':
            create()
            break;
          case '2':
                read()
                break;
            case '3':
                    add()
                    break;
                case '4':
                        modify()
                        break;
                    case '5':
                            deleteStudent()
                            break;
                         case '6':
                                count()
                                break;
                            case '7':
                                    console.log('Saliendo del programa')
                                    rl.close();
                                    return;
                                  
    
        default:
              console.log('Opcion no valida. Intentelo de nuevo')
            break;
    }

    setTimeout(prompMenu,1000)
}


  function prompMenu(){
    menu();
    rl.question('Seleccione una opcion: ', manejarMenu);
  }

  prompMenu();