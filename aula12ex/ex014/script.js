function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        img.src = './images/fotomanha.png'
        document.body.style.background = '#B5C5D9'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './images/fototarde.png'
        document.body.style.background = '#FEB643'
    } else {
        img.src = './images/fotonoite.png'  
        document.body.style.background = '#16435D'
    }
}