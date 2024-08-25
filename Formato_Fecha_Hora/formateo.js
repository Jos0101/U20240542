
const fecha = new Date('Feb 20, 2012, 3:12 am');

let horas = fecha.getHours();
 let minutos = fecha.getMinutes();

    const opciones = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
            };

  const horaFormateada = fecha.toLocaleTimeString('en-US',opciones);

console.log(horaFormateada);

 



 
