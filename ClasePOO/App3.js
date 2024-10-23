class Estudiante {
    constructor(nombre, nota) {
        this._nombre = nombre;
        this._nota = nota;  
    }

    set nota(nuevaNota) {
        if (nuevaNota >= 0 && nuevaNota <= 10) {
            this._nota = nuevaNota;
        } else {
            console.log("La nota no está entre 0 y 10");
        }
    }

    mostrarInfo() {
        console.log("Nombre:", this._nombre, "Nota:", this._nota);
    }
}

const estudiante1 = new Estudiante("Stanley", 10);
estudiante1.mostrarInfo();

estudiante1.nota = 9;  
estudiante1.nota = 11;  
estudiante1.mostrarInfo();
