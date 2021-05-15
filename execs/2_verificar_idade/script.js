function verify() {

    var number = document.querySelector('#number');
    var man = document.querySelector('#man');
    var wom = document.querySelector('#wom');
    var res = document.querySelector('#res');

    if (number.value.length == 0) {

        alert('Verifique os dados e tente novamente!');

    } else {
        res.innerHTML = '';
        var age = Number(number.value);
        var parag = document.createElement('p');
        var img = document.createElement('img');
        res.style.display = 'flex';
        res.style.flexDirection = 'column';
        res.style.alignItems = 'center';
        res.appendChild(parag);
        res.appendChild(img);
        img.style.borderRadius = '50%';
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.objectFit = 'cover';

        if(man.checked) {

            if(age < 13) {
                parag.innerHTML = `Detectamos menino com ${age} anos de idade.`;
                img.src = 'images/criança-menino.png';
            } else if(age < 25) {
                parag.innerHTML = `Detectamos jovem com ${age} anos de idade.`;
                img.src = 'images/jovem-homem.png';
            } else if(age < 60) {
                parag.innerHTML = `Detectamos adulto com ${age} anos de idade.`;
                img.src = 'images/adulto-homem.png';
            } else {
                parag.innerHTML = `Detectamos idoso com ${age} anos de idade.`;
                img.src = 'images/idoso-homem.png';
            }
            
        } else if(wom.checked) {

            if(age < 13) {
                parag.innerHTML = `Detectamos menina com ${age} anos de idade.`;
                img.src = 'images/criança-menina.png';
            } else if(age < 25) {
                parag.innerHTML = `Detectamos jovem com ${age} anos de idade.`;
                img.src = 'images/jovem-mulher.jpg';
            } else if(age < 60) {
                parag.innerHTML = `Detectamos adulta com ${age} anos de idade.`;
                img.src = 'images/adulto-mulher.png';
            } else {
                parag.innerHTML = `Detectamos idosa com ${age} anos de idade.`;
                img.src = 'images/idoso-mulher.png';
            }
            
        }
    }
    
}