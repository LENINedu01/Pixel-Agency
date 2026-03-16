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
const nav = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {

nav.classList.toggle("activo");
overlay.classList.toggle("activo");


});
overlay.addEventListener("click", () => {

nav.classList.remove("activo");
overlay.classList.remove("activo");

});
/* ================================= */
/* SERVICIOS MENU */
/* ================================= */

function abrirServicio(id){

document.getElementById("menu-servicios").style.display = "none";

document.getElementById(id).style.display = "block";

}

function volverServicios(){

document.getElementById("menu-servicios").style.display = "flex";

document.getElementById("servicio1").style.display = "none";
document.getElementById("servicio2").style.display = "none";
document.getElementById("servicio3").style.display = "none";

}
/* ================================= */
/* Salir spush */
/* ================================= */
let startX = 0;

document.addEventListener("touchstart", e => {

startX = e.touches[0].clientX;

});

document.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX;

if(startX - endX > 80){

nav.classList.remove("activo");
overlay.classList.remove("activo");

}

});