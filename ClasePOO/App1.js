

class Computadora {
    constructor(marca, ram) {
        this._marca = marca;        
        this._ram = ram;  
    }

    mostrarInfo() {
        console.log(`Marca: ${this._marca}, ram: ${this._ram} GB`);
    }

    get marca() {
        return this._marca;
    }

    set Cambiarmarca(nuevaMarca) {
        this._marca = nuevaMarca;
    }

    get ram() {
        return this._ram;
    }

    set CambiarRam(nuevoram) {
        this._ram = nuevoram;
    }
}

 
const computadora1 = new Computadora('Dell', 16);
const computadora2 = new Computadora('HP', 32);

 
computadora1.mostrarInfo();
computadora2.mostrarInfo();

 
computadora1.Cambiarmarca = 'Lenovo';
computadora1.CambiarRam= 8;

 
