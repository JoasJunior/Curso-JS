var section = document.querySelector('section');
var res = document.querySelector('#res');
var parag = document.querySelector('#parag');
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
section.style.display = 'flex';
section.style.justifyContent = 'center';
section.style.textAlign = 'center';

if (hours > 6 && hours < 12) {

    if(hours < 10 && minutes < 10) {
        parag.innerHTML = `Agora são 0${hours}:0${minutes} horas da manhã!`;
    } else if(hours < 10) {
        parag.innerHTML = `Agora são 0${hours}:${minutes} horas da manhã!`;
    } else if(minutes < 10) {
        parag.innerHTML = `Agora são ${hours}:0${minutes} horas da manhã!`;
    } else {
        parag.innerHTML = `Agora são ${hours}:${minutes} horas da manhã!`;
    }

    var img = document.createElement('img');
    res.appendChild(img);
    img.src = 'images/fotomanha.png';

    document.body.style.background = '#FCC163';

} else if(hours >= 12 && hours <= 18) {

    if(hours < 10 && minutes < 10) {
        parag.innerHTML = `Agora são 0${hours}:0${minutes} horas da tarde!`;
    } else if(hours < 10) {
        parag.innerHTML = `Agora são 0${hours}:${minutes} horas da tarde!`;
    } else if(minutes < 10) {
        parag.innerHTML = `Agora são ${hours}:0${minutes} horas da tarde!`;
    } else {
        parag.innerHTML = `Agora são ${hours}:${minutes} horas da tarde!`;
    }

    var img = document.createElement('img');
    res.appendChild(img);
    img.src = 'images/fototarde.png';

    document.body.style.background = '#EE6100';

} else {
    
    if(hours < 10 && minutes < 10) {
        parag.innerHTML = `Agora são 0${hours}:0${minutes} horas da noite!`;
    } else if(hours < 10) {
        parag.innerHTML = `Agora são 0${hours}:${minutes} horas da noite!`;
    } else if(minutes < 10) {
        parag.innerHTML = `Agora são ${hours}:0${minutes} horas da noite!`;
    } else {
        parag.innerHTML = `Agora são ${hours}:${minutes} horas da noite!`;
    }

    var img = document.createElement('img');
    res.appendChild(img);
    img.src = 'images/fotonoite.png';
    
    document.body.style.background = '#1B507A';

}