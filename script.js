/* ===================================================== */
/* CONTROL DE SECCIONES */
/* ===================================================== */

function mostrarSeccion(id){

const secciones = document.querySelectorAll(".seccion");

/* Oculta todas las secciones */
secciones.forEach(sec => {
sec.style.display = "none";
});

/* Lógica especial para HOME */
if(id === "home"){

document.getElementById("home").style.display = "flex";
document.getElementById("info").style.display = "block";

}
else{

document.getElementById(id).style.display = "block";

}

/* cerrar menu movil si está abierto */
nav.classList.remove("activo");

window.scrollTo({
top:0,
behavior:"smooth"
});

}


/* ===================================================== */
/* BUSCADOR */
/* ===================================================== */

function toggleSearch(){

const search = document.getElementById("searchBar");

if(search.style.display === "block"){

search.style.display = "none";

}else{

search.style.display = "block";
search.focus();

}

}


/* ===================================================== */
/* ESTADO INICIAL */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

mostrarSeccion("home");

});


/* ===================================================== */
/* ANIMACION DE SERVICIOS */
/* ===================================================== */

const slides = document.querySelectorAll(".servicio-slide");

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}else{

entry.target.classList.remove("visible");

}

});

},

{
threshold:0.35
}

);

slides.forEach(slide=>{
observer.observe(slide);
});


/* ===================================================== */
/* MENU HAMBURGUESA */
/* ===================================================== */

const menuBtn = document.getElementById("menuBtn");

/* seleccionamos el nav correcto */
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

nav.classList.toggle("activo");

});


/* ===================================================== */
/* LINKS DEL MENU MOVIL */
/* ===================================================== */

const links = document.querySelectorAll("nav a[data-seccion]");

links.forEach(link => {

link.addEventListener("click", () => {

const seccion = link.getAttribute("data-seccion");

mostrarSeccion(seccion);

nav.classList.remove("activo");

});

});