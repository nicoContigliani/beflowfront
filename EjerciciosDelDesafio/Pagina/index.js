class SueldoOperarios {
    sueldos = [];

    constructor() {

        for (let i = 0; i < 5; i++) {
            const sueldo = prompt(`ingrese el sueldo del operario ${i + 1}`);
            this.sueldos.push(sueldo);
        }
    }

    imprimirSueldos() {
        console.log(this.sueldos);
    }

}


let obj = new SueldoOperarios();
obj.imprimirSueldos();
