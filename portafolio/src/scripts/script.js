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
  {
    name: "Twitter",
    url: "https://twitter.com/?lang=es",
    icon: "./src/img/logotipo-de-twitter.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "./src/img/facebook.png",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/carlos-daniel-mondrag%C3%B3n-mart%C3%ADnez-b29b62208/",
    icon: "./src/img/linkedin.png",
  },
  {
    name: "Gmail",
    url: "mailto:teccarlosd@gmail.com",
    icon: "./src/img/gmail.png",
  },
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
      socialTemp = `<span class="social--burbble" style="background-color: #CF2956;"><a class="text-white" href="${social.url}">${social.name}</a><img src="${social.icon}" alt=""></span>`; //mailto:rony.santos@ideatechstudio.com
    }

    innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
  });
  tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
}

const ProyectosDesarrollados = [
  {
    name: "Control-Inventory",
    descripcion: `SYSLACRESTORE-Aplicacion Web para la asignacion de Inventario Fijo Pala la empresa El***IS.`,
    imagen: "./src/img/5.png",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "4 Mese",
  },{
    name: "My Cv",
    descripcion: `Uno de los primero proyectos personales, fue crear una paguina 
    HTML con información sobre mi carrera y formacion.`,
    imagen: "./src/img/1.png",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "5 días",
  },
  {
    name: "Clon-de-Google ",
    descripcion: `This is a wider card with supporting text 
      below as a natural lead-in to additional content. 
      This content is a little bit longer.`,
    imagen: "./src/img/2.png",
    url: "",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "1 día",
  },{
    
      name: "Netflix-Proyecto",
      descripcion: `This is a wider card with supporting text 
        below as a natural lead-in to additional content. 
        This content is a little bit longer.`,
      imagen: "./src/img/3.png",
      url: "",
      tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
      tiempoDesarrollo: "10 días",
    }
  
];
function setProyectosDesarrollados() {
  let card = "";
  ProyectosDesarrollados.forEach((project) => {
    card =
      card +
      `<div class="col">
          <div class="card shadow-sm">
            <img src="${project.imagen}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${project.name}</h5>
              <p class="card-text">${project.descripcion}</p>
              <div class="row">
                ${setIcons(project.tecnologias)}
              </div>
            </div>
          </div>
        </div>`;
  });
  document.getElementById("projects").innerHTML = card;
}

function setIcons(tecnologias) {
  let iconos = "";
  tecnologias.forEach((tecno) => {
    switch (tecno) {
      case "Html":
        iconos =
          iconos +
          `<div class="col-3 text-danger">
                              Html 5 <i class="fa-brands fa-html5"></i>
                            </div>`;
        break;
      case "CSS":
        iconos =
          iconos +
          `<div class="col-3 text-primary">
                                CSS <i class="fa-brands fa-css3"></i>
                              </div>`;
        break;
      case "JS":
        iconos =
          iconos +
          `<div class="col-3 text-warning">
                                JS <i class="fa-brands fa-js"></i>
                              </div>`;
        break;
      case "Bootstrap":
        iconos =
          iconos +
          `<div class="col-3 purple">
                              Bootstrap <i class="fa-brands fa-bootstrap"></i>
                            </div>`;
        break;
    }
  });
  return iconos;
}

//Funcion para ocultar o mostrar
function showRegister() {
  document.getElementById("secFormation").style.display = "none";
  document.getElementById("album").style.display = "none";
  document.getElementById("profileS").style.display = "block";
}
function showRegister1() {
  document.getElementById("profileS").style.display = "none";
  document.getElementById("album").style.display = "none";
  document.getElementById("secFormation").style.display = "block";
}
function showRegister2() {
  document.getElementById("profileS").style.display = "none";
  document.getElementById("secFormation").style.display = "none";
  document.getElementById("album").style.display = "block";
}

// Pila de ejecución hasta que el DOM esta completamente cargado
document.addEventListener("DOMContentLoaded", function (e) {
  setYearIdentifierSpan();
  setSocialNetworksInHTML();
  setProyectosDesarrollados();
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
