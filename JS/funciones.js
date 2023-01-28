let fondo_original = document.getElementById("experiencia_profesional").style.background;
let color_original = document.getElementById("experiencia_profesional").style.color;

document.getElementById("call_center").addEventListener("mouseover",resaltar);
document.getElementById("call_center").addEventListener("mouseout",devolver);
document.getElementById("call_center").addEventListener("click",mostrar_callcenter);

document.getElementById("dova").addEventListener("mouseover",resaltar);
document.getElementById("dova").addEventListener("mouseout",devolver);
document.getElementById("dova").addEventListener("click",mostrar_dova);

document.getElementById("emsalog").addEventListener("mouseover",resaltar);
document.getElementById("emsalog").addEventListener("mouseout",devolver);
document.getElementById("emsalog").addEventListener("click",mostrar_emsa);

document.getElementById("litoral_citrus").addEventListener("mouseover",resaltar);
document.getElementById("litoral_citrus").addEventListener("mouseout",devolver);
document.getElementById("litoral_citrus").addEventListener("click",mostrar_litoral_citrus);

document.getElementById("iic").addEventListener("mouseover",resaltar);
document.getElementById("iic").addEventListener("mouseout",devolver);
document.getElementById("iic").addEventListener("click",mostrar_iic);

function resaltar(evento){
  let componente = evento.target;
  componente.style.color = "black";
   componente.style.background = "#f9faf8"
};

function devolver(evento){
  let componente = evento.target;
  componente.style.background = fondo_original;
  componente.style.color = color_original
};

function mostrar_callcenter(evento){
    /*window.location.href="call_center.html";*/
    window.open("call_center.html","","width = auto, height = auto");
};

function mostrar_dova(evento){
   window.open("dova.html","","width = auto, height = auto");
};

function mostrar_emsa(evento){
  window.open("emsa.html","","width = auto, height = auto");
}; 

function mostrar_litoral_citrus(evento){
  window.open("litoral_citrus.html","","width = auto, height = auto");
};  

function mostrar_iic(evento){
  window.open("iic.html","","width = auto, height = auto");
};  