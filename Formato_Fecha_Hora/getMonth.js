
const fechaActual = new Date();

   const mesActual = fechaActual.getMonth();

     let opcionesMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

         let mesAnio = opcionesMeses[mesActual];

   console.log(opcionesMeses);
   console.log(`el mes actual es: ${mesAnio}`);