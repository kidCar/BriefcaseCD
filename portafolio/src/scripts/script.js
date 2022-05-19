const getCurrentYear = () => {
    const d = new Date();
    return d.getFullYear(); // 2022
};

// Función que agrega el año actual en el Footer
const setYearIdentifierSpan = () => {
    const printYearInDOM = document.getElementById("yearIdentifier");
    printYearInDOM.innerText = getCurrentYear();
};

// Arreglo de Redes sociales
const SocialNetworks = [
    { name: "Twitter", url: "https://twitter.com/?lang=es", icon: "./img/scr/logotipo-de-twitter.png" },
    { name: "Facebook", url: "https://www.facebook.com/", icon: "./src/img/facebook.png" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/carlos-daniel-mondrag%C3%B3n-mart%C3%ADnez-b29b62208/", icon: "./src/img/linkedin.png" },
    { name: "Gmail", url: "mailto:teccarlosd@gmail.com", icon: "./src/img/gmail.png" },
];

// Que se necita par imprimir estas redes sociales en el Front?
// Necesitamos inyectar nodos HTML en el DOM desde alguna funcionalidad
// 1- Iterar o recorrer los elementos
// 2- Insertar cada iteracion como un elemento HTML
// 3- Renderizar esos elementos en el Front     ->     InnerHTML, appendChild

// Función que ejecuta todo el proceso de creación de red social y
// lo inyecta en el HTML
function setSocialNetworksInHTML() {
    const tagSocialNetworks = document.getElementById("socialNetworks");
    var innerHtmlSocialNetworks = "";
    SocialNetworks.forEach((social) => {
        let socialTemp;
        if (social.name === "Twitter") {
            socialTemp = `<span class="social--burbble" style="background-color: #0EAADC;"><a class="text-white" href="${social.url}">${social.name}</a><img src="${social.icon}" alt=""></span>`;
        } else if (social.name === "Facebook") {
            socialTemp = `<span class="social--burbble" style="background-color: #0E59DC;"><a class="text-white" href="${social.url}">${social.name}</a><img src="${social.icon}" alt=""></span>`;
        } else if (social.name === "Linkedin") {
            socialTemp = `<span class="social--burbble" style="background-color: #2956CF;"><a class="text-white" href="${social.url}">${social.name}</a><img src="${social.icon}" alt=""></span>`;
        } else if (social.name === "Gmail") {
            socialTemp = `<span class="social--burbble" style="background-color: #CF2956;"><a class="text-white" href="${social.url}">${social.name}</a><img src="${social.icon}" alt=""></span>`;//mailto:rony.santos@ideatechstudio.com
        }

        innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
    });
    tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
}

const ProyectosDesarrollados = [{
        name: "Portafolio",
        descripcion: `This is a wider card with supporting text 
        below as a natural lead-in to additional content. 
        This content is a little bit longer.`,
        imagen: "",
        url: "",
        tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
        tiempoDesarrollo: "5 días",
    },
    {
        name: "Tienda de celulares",
        descripcion: `This is a wider card with supporting text 
    below as a natural lead-in to additional content. 
    This content is a little bit longer.`,
        imagen: "",
        url: "",
        tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
        tiempoDesarrollo: "10 días",
    },
];

// Pila de ejecución hasta que el DOM esta completamente cargado
document.addEventListener("DOMContentLoaded", function(e) {
    setYearIdentifierSpan();
    setSocialNetworksInHTML();
});

// Que es una instancia de una clase?
// Basicamnete es una llamada a un set de funciones,
// caracteristicas entre otras cosas que me permite reutilizar,
// metodos, funciones o procesos de otros modulos ya desarrollados anteriormente
// o des librerias de terceros o externas.

// POO -> Programación orientada a objetos

// Función anonima: Función que se
// ejecuta pero que no tiene un nombre establecido
// me permite hacer acciones sin declarar un nombre a la función

// Ejemplos de iteracion con For y Foreach
// const listaSuper = ["refresco", "agua", "jabon", "fruta"];

// for (let i = 0; i < listaSuper.length; i++) {
//   console.log(`Item: ${listaSuper[i]} comprado`);
// }

// listaSuper.forEach((productp) => {
//   console.log(`Item: ${productp} comprado`);
// });