import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";
import data from "./data.js";

const boton = document.getElementById("btnRegistrar");
const animalesSeleccionados = [];
let animalesApi;

const cargarTabla = () => {
    const cargarInfo = document.getElementById("Animales");
    cargarInfo.innerHTML = "";

    animalesSeleccionados.forEach(animal => {
        cargarInfo.innerHTML += `
        <div class="card m-3" style="max-width: 25%;">
            <img src="${animal.imagen}" class="card-img-top" style="max-width: 100%; max-height: 100%">
            <div class="card-body">
                <h5 class="card-title">${animal.nombre}</h5>
            </div>
            <div class="card-footer">
                <button class="btn btn-dark" onclick= "emitirSonido('${animal.nombre}')"> <img height="30px" src= "./assets/imgs/audio.svg"> </img>
                </button>
            </div>
        </div>`

    });
};

window.emitirSonido = (nombre) => {
    console.log(animalesSeleccionados)
    const animalEncontrado = animalesSeleccionados.find(animal => {
        return animal.nombre == nombre;

    });

    animalEncontrado.emitirSonido();
};

let inputAnimal = document.getElementById("animal");
inputAnimal.addEventListener("change", (event) => {
    let selectAnimal = event.target.value;
    let animalEncontrado = animalesApi.find(animal => {
        return animal.name == selectAnimal;
    });
    const preview = document.getElementById("preview");
    preview.style.backgroundImage = `url(./assets/imgs/${animalEncontrado.imagen})`
});

(async () => {
    animalesApi = await data.getAnimales();
})();

boton.addEventListener("click", async (event) => {
    event.preventDefault();

    const inputNombre = document.getElementById("animal");
    const inputEdad = document.getElementById("edad");
    const inputComentarios = document.getElementById("comentarios");

    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const comentarios = inputComentarios.value;

    let animalesApi = await data.getAnimales();
    console.log(animalesApi)

    let animalFound = animalesApi.find(element => element.name == nombre);

    if (!animalFound) {
        return alert("Animal no existe.");
    }

    if (nombre && edad && comentarios) {

        let nuevoAnimal;

        switch (nombre) {
            case "Leon":
                nuevoAnimal = new Leon(animalFound.name, edad, "./assets/imgs/" + animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Lobo":
                nuevoAnimal = new Lobo(animalFound.name, edad, "./assets/imgs/" + animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Oso":
                nuevoAnimal = new Oso(animalFound.name, edad, "./assets/imgs/" + animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Serpiente":
                nuevoAnimal = new Serpiente(animalFound.name, edad, "./assets/imgs/" + animalFound.imagen, comentarios, animalFound.sonido);
                break;
            case "Aguila":
                nuevoAnimal = new Aguila(animalFound.name, edad, "./assets/imgs/" + animalFound.imagen, comentarios, animalFound.sonido);
                break;
        };


        inputNombre.selectedIndex = 0;
        inputEdad.selectedIndex = 0;
        inputComentarios.value = "";

        animalesSeleccionados.push(nuevoAnimal)
        cargarTabla();
    } else {
        alert("Los datos deben ser completados")
    }
});