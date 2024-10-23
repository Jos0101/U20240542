
//crea una clase rectangulo con atributos ancho y alto
//define un metodo get llamado area que devuelve el area del rectangulo
//y un metodo set que permita modificar el valor del ancho
//formula para obtener el area ancho * alto

class Rectangulo {
    constructor(ancho, altura) {
        this._ancho = ancho;
        this._altura = altura;
        
    }

    get area(){
        return this._ancho * this._altura;
    }

    set ancho(nuevoAncho){
        this._ancho = nuevoAncho
    }

    mostrarInfo(){
        console.log("El area del triangulo es:" , this.area);
    }
}

  const rect = new Rectangulo(6,6);
  console.log(rect.area);

  rect.ancho = 5
  console.log()
  rect.mostrarInfo()



