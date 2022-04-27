

function horario(){
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();

    if(hora < 12){
        alert(`Agora são exatamente ${hora} horas e ${minutos} minutos! Bom dia`);
    } else if (hora < 18) {
        alert(`Agora são exatamente ${hora} horas e ${minutos} minutos! Boa tarde`);
    } else {
        alert(`Agora são exatamente ${hora} horas e ${minutos} minutos! Boa noite`);
    }
}
horario();

// Modo escuro
function darkMode(){
    var element = document.body;
    var content = document.getElementById('DarkModetext');
    element.className = "darkmode";
    content.innerHTML = 'Modo escuro ativado!';
}

// Modo claro
function ligthMode(){
    var element = document.body;
    var content = document.getElementById('DarkModetext');
    element.className = "lightmode";
    content.innerHTML = 'Modo escuro desativado';
}
