const fecha_1 = new Date('05/02/2004');
const fecha_2 = new Date('08/19/1966');

const diferenciaMilisegundos = fecha_1 - fecha_2;
   const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(`la diferencia de dias entre las dos fechas es de: ${diferenciaDias} dias`)




