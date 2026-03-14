

function localizacao(){
    window.location.href = "https://maps.app.goo.gl/V5Uh69pjUpe3WD9JA"
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
    if(((agoraInt> 6 && agoraInt< 12)||(agoraInt> 12 &&agoraInt< 19)) && (data >0 && data <6)){
        document.querySelector(".estatus").innerHTML = "ABERTO"
        div.style.background = "var(--azul)";
    }
    else{
        div.style.background = "red";
        document.querySelector(".estatus").innerHTML = "FECHADO"
    }
},1000);