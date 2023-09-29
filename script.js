function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA
        img.src = 'Morning.jpg'
        document.body.style.background = '#f5e97f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'Afternoon.jpg'
        document.body.style.background = '#8099df'
    } else {
        // BOA NOITE 
        img.src = 'Night.jpg'
        document.body.style.background = '#012d5e'
    }
}