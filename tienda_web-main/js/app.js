addEventListener('DOMContentLoaded', () =>{
    
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
            alert("Hola"); 
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle(' show')
        })
    }
})

let indice = 1;
muestraSlide(indice);

function avanzaSlide(n){
    muestraSlide(indice+=n);
}

function posicionSlide(){
    muestraSlide(indice=n);
}

setInterval(function tiempo(){
    muestraSlide(indice+=1)
},4000)

function muestraSlide(n){
let i;
let slides = document.getElementsByClassName('mislider');
let barras = document.getElementsByClassName('barra');

if(n > slides.length){
    indice = 1;
}

if(n < 1){
indice = slides.length();
}

for(i=0; i < slides.length; i++){
    slides[i].style.display = 'none';

}

for(i=0; i < barras.length; i++){
    barras[i].className = barras[i].className.replace(" active", "");

}

slides[indice-1].style.display = 'block';
barras[indice-1].className += ' active';


}


/*
function showmenu() {
    alert("Hola ")
    document.getElementById("otroModo").classList.toggle("show");
  
  }*/



  function mostrarFiltro(){
    document.getElementById("despleFiltro").style.display = "none";
    }
    
    function ocultarFiltro(){
    document.getElementById("despleFiltro").style.display = "flex";
    }
    
    function filtro(){
    var caja = document.getElementById("despleFiltro");
    
    if (caja.style.display == "none"){
      ocultarFiltro();
    } else{
      mostrarFiltro();
    }
    
    }
    