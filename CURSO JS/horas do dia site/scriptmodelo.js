function carregar(){
    var agora = new Date()
    var hora = 6//agora.getHours()
    var txt = document.getElementById('texto')
    txt.innerHTML = `Agora são ${hora} horas !`
    var img = document.getElementById('imagem')
    if (hora > 4 && hora<12){
        img.src ='bomdia.png'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora > 11 && hora<18){
        img.src='boatarde.png'
        document.body.style.background = '#b8946f'
    }
    else {
        img.src='boanoite.png'
        document.body.style.background= '#515154'
    }

}
