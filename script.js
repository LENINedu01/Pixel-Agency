/* ===================================================== */
/* CONTROL DE SECCIONES */
/* ===================================================== */

function mostrarSeccion(id){

const secciones = document.querySelectorAll(".seccion");

/* ocultar todas */

secciones.forEach(sec=>{
sec.style.display="none";
});


/* logica especial HOME */

if(id==="home"){

document.getElementById("home").style.display="flex";
document.getElementById("info").style.display="block";

}else{

document.getElementById(id).style.display="block";

}


/* scroll arriba */

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

const search=document.getElementById("searchBar");

if(search.style.display==="block"){

search.style.display="none";

}else{

search.style.display="block";
search.focus();

}

}



/* ===================================================== */
/* ESTADO INICIAL */
/* ===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

mostrarSeccion("home");

});



/* ===================================================== */
/* ANIMACION SERVICIOS */
/* ===================================================== */

const slides=document.querySelectorAll(".servicio-slide");

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}else{

entry.target.classList.remove("visible");

}

});

},

{threshold:0.35}

);

slides.forEach(slide=>{
observer.observe(slide);
});



/* ===================================================== */
/* MENU MOVIL */
/* ===================================================== */

const menuBtn=document.getElementById("menuBtn");
const nav=document.querySelector("nav");
const overlay=document.getElementById("menuOverlay");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("activo");
overlay.classList.toggle("activo");

});

}


if(overlay){

overlay.addEventListener("click",()=>{

nav.classList.remove("activo");
overlay.classList.remove("activo");

});

}



/* ===================================================== */
/* CLICK EN MENU (LI) */
/* ===================================================== */

document.querySelectorAll("nav li").forEach(item=>{

item.addEventListener("click",()=>{

const texto=item.textContent.toLowerCase().trim();

if(texto==="home") mostrarSeccion("home");
if(texto==="servicios") mostrarSeccion("servicios");
if(texto==="proyectos destacados") mostrarSeccion("proyectos");
if(texto==="resultados") mostrarSeccion("resultados");
if(texto==="marcas") mostrarSeccion("marcas");
if(texto==="contacto") mostrarSeccion("contacto");

});

});