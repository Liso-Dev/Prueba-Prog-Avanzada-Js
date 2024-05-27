import Animal from "./animal.js";
const reproductor = document.getElementById('player')

export class Leon extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    rugir() {
        reproductor.src = `./assets/sounds/${this.sonido}`;
        reproductor.play();

    }

    emitirSonido() {
        this.rugir();
    }
}
export class Lobo extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    aullar() {
        reproductor.src = `./assets/sounds/${this.sonido}`;
        reproductor.play();
    }
    emitirSonido() {
        this.aullar();
    }
}
export class Oso extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);

    }

    grunir() {
        reproductor.src = `./assets/sounds/${this.sonido}`;
        reproductor.play();
    }
    emitirSonido() {
        this.grunir();
    }

}
export class Serpiente extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    sisear() {
        reproductor.src = `./assets/sounds/${this.sonido}`;
        reproductor.play();
    }
    emitirSonido() {
        this.sisear();
    }
}
export class Aguila extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }

    chillar() {
        reproductor.src = `./assets/sounds/${this.sonido}`;
        reproductor.play();
    }
    emitirSonido() {
        this.chillar();
    }
}