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

}else{

document.getElementById(id).style.display = "block";

}


/* scroll al inicio */

window.scrollTo({
top:0,
behavior:"smooth"
});


/* cerrar menu movil */

const nav = document.querySelector("nav");
const overlay = document.getElementById("menuOverlay");

if(nav) nav.classList.remove("activo");
if(overlay) overlay.classList.remove("activo");

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
/* MENU MOVIL */
/* ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");
const overlay = document.getElementById("menuOverlay");

if(menuBtn){

menuBtn.addEventListener("click", () => {

nav.classList.toggle("activo");
overlay.classList.toggle("activo");

});

}

if(overlay){

overlay.addEventListener("click", () => {

nav.classList.remove("activo");
overlay.classList.remove("activo");

});

}



/* ===================================================== */
/* CLICK EN LINKS DEL MENU */
/* ===================================================== */

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const id = this.getAttribute("data-seccion");

mostrarSeccion(id);

});

});



/* ===================================================== */
/* ESTADO INICIAL */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

mostrarSeccion("home");

});



/* ===================================================== */
/* ANIMACION DE SERVICIOS AL SCROLL */
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