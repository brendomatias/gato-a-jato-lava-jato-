links = [
    "https://maps.app.goo.gl/aZhTJh2wRdKwLg7e6",
    "https://www.instagram.com/gato_a_jato993/",
    "https://wa.me/558399199839?text=Olá%20vim%20pelo%20site"

]


function localizacao(num){

    window.location.href = links[num]
}

setInterval(() =>{
    const agora = new Date();
    const agoraInt = agora.getHours();
    const hora = agora.toLocaleTimeString().slice(0,5);
    const data = agora.getDay();
    console.log(data);
    const statusAbertura = "STATUS ABERTURA";
    const div = document.querySelector(".statusAbertura");
    document.querySelector(".horario").textContent = hora
    if(((agoraInt> 6 && agoraInt< 12)||(agoraInt> 12 &&agoraInt< 19)) && (data >0 && data <=6)){
        document.querySelector(".estatus").innerHTML = "ABERTO"
        div.style.background = "var(--azul)";
    }
    else{
        div.style.background = "red";
        document.querySelector(".estatus").innerHTML = "FECHADO"
    }
},1000);