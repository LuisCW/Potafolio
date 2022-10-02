//Buscador

const searchInput = document.querySelector('.Search-input')
const searchButton = document.querySelector('.Search-button')
const boxSearch = document.querySelector('.boxSearch')
const boxResearch = document.querySelector('.boxResearch')
const ocultar = document.querySelector('.ocultar')

//Resultado de busqueda
const resultadoBusqueda=[
    {nombre: 'HTML', pagina: 'index.html#HTML'},
    {nombre: 'CSS', pagina: 'index.html#CSS'},
    {nombre: 'Javascript', pagina: 'index.html#Javascript'},
    {nombre: 'React', pagina: 'index.html#React'},
    {nombre: 'Angular', pagina: 'index.html#Angular'},
    {nombre: 'NodeJS', pagina: 'index.html#NodeJS'},
    {nombre: 'Java', pagina: 'index.html#Java'},
    {nombre: 'PHP', pagina: 'index.html#PHP'},
    {nombre: 'Python', pagina: 'index.html#Python'},
    {nombre: 'Contacto', pagina: '#contacto'},
    {nombre: 'Proyectos', pagina: 'index.html#proyectos'},
    {nombre: 'Portafolio', pagina: 'index.html#portafolio'},
    {nombre: 'Conocimientos', pagina: 'index.html#conocimientos'},
    {nombre: 'Skills', pagina: 'index.html#skills'},
    {nombre: 'Curriculum', pagina: 'about_me.html#curriculum'}
]


const filter = ()=>{
    boxResearch.innerHTML='';
    const buscador = searchInput.value.toUpperCase();
    for (let research of resultadoBusqueda){
        let nombre = research.nombre.toUpperCase();
        if(nombre.indexOf(buscador) !==-1){
            boxResearch.innerHTML+=`
                <li><a href="${research.pagina}">${research.nombre}</a></li>
            `
        }
    }
    if(boxResearch.innerHTML === ''){
        boxResearch.innerHTML+=`
                <li>No hay ningún resultado</li>
            `
    }
}
searchButton.addEventListener('click', filter);
searchButton.addEventListener('keypress', function(e){
    enterFilter(e);
});
searchInput.addEventListener('keypress', function(e){
   enterFilter(e);
});
searchInput.addEventListener('keyup',filter);
function enterFilter(e) {
    let tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==13) alert (searchInput.value);
}
searchInput.addEventListener('click', ()=>{
    searchInput.classList.add('unborderTop');
    boxSearch.classList.add('buttonActive');
    ocultar.classList.add('active');
})
ocultar.addEventListener('click', ()=>{
    searchInput.classList.remove('unborderTop');
    boxSearch.classList.remove('buttonActive');
    ocultar.classList.remove('active');
})
//menu lateral
const sidenav = document.querySelector('.sidenav');
const sidenavContent = document.querySelector('.sidenav-content');
const navMenu = document.querySelector('.nav-menu');
const navMenuResponsive = document.querySelector('.nav-menu-responsive');
const navClose = document.querySelector('#side-nav-close');
const navResponsive = document.querySelector('.navbar-responsive');
const menuNavResponsive = document.querySelector('.menu-nav-responsive');

navMenu.addEventListener('click', ()=>{
    sidenavContent.classList.add('activo');
    sidenav.classList.add('active'); 
    ocultar.classList.add('active');   
})
navMenuResponsive.addEventListener('click', ()=>{
    sidenavContent.classList.add('activo');
    sidenav.classList.add('active');
    ocultar.classList.add('active');    
})
navClose.addEventListener('click', ()=>{
    sidenavContent.classList.remove('activo');
    sidenav.classList.remove('active');
    ocultar.classList.remove('active');
})
ocultar.addEventListener('click', ()=>{
    sidenavContent.classList.remove('activo');
    sidenav.classList.remove('active');
    ocultar.classList.remove('active');
})
menuNavResponsive.addEventListener('click', ()=>{
    navResponsive.classList.add('activo');
    ocultar.classList.add('active');
})
ocultar.addEventListener('click', ()=>{
    navResponsive.classList.remove('activo');
    ocultar.classList.remove('active');
})

const mediaqueryList = window.matchMedia("(min-width: 980px)");


mediaqueryList.addEventListener("change", e =>{
    navResponsive.classList.remove('activo');
    
})


//Imagen Grande//
const imagenes = document.querySelectorAll('.imagenes');
const ImagenGrande = document.querySelector('.ImagenGrande');
const texto = document.querySelector('.Imagen-text');


imagenes.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'))    
    })
})
const addImage = (srcImage, altImage)=>{
    ImagenGrande.src = srcImage;
    texto.innerHTML = altImage
}

//Carrusel//
const fila = document.querySelector('.contenedor-carrusel');
const proyectos = document.querySelectorAll('.proyecto');

//Flechas//
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');

    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');

    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//Paginacion//
const paginas = Math.ceil(proyectos.length / 5);
for(let i=0; i<paginas; i++){
    const indicador = document.createElement('button');
    if(i===0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=> {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

//Hover//

proyectos.forEach((proyecto) => {
    proyecto.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout( () => {
            proyectos.forEach(proyecto => proyecto.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', () => {
    proyectos.forEach(proyecto => proyecto.classList.remove('hover'));
});
