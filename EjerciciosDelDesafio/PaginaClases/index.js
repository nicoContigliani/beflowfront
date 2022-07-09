// 3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros
// dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
// return ((this.edad>=18)?("es mayor"):("es menor"))

class Alumno {
    nombre = "";
    edad = 0;


    constructor() {
        this.nombre = prompt('ingrese nombre');
        this.edad = prompt('ingrese edad');      
    }

    mostrarDatos(){
       console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }

    mostrarSiEsMayorOMenor() {
         ((this.edad >= 18) ? (console.log(`${this.nombre} es mayor de edad`)) : (console.log(`${this.nombre} es menor de edad`)))
    }

}

const alumno = new Alumno();
alumno.mostrarDatos()
alumno.mostrarSiEsMayorOMenor()



