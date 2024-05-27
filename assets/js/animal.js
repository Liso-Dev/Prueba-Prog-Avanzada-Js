export default class Animal {
    #nombre;
    #edad;
    #imagen;
    #comentarios;
    #sonido;
    constructor(nombre, edad, imagen, comentarios, sonido) {

        this.#nombre = nombre;
        this.#edad = edad;
        this.#imagen = imagen;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre;

    }
    get edad() {
        return this.#edad;

    }
    get comentarios() {
        return this.#comentarios;

    }
    get imagen() {
        return this.#imagen;

    }
    get sonido() {
        return this.#sonido;

    }

    set comentarios(nuevoComentario) {
        this.#comentarios = nuevoComentario;
    }
}