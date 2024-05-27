let data = (() => {
    let urlDatos = './animales.json'
    let getAnimales = async () => {
        const response = await fetch(urlDatos);
        const { animales } = await response.json();
        return animales;

    }

    return {
        getAnimales
    }

})();

export default data;