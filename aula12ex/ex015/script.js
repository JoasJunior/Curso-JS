function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var formAno = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var formSex = document.querySelectorAll('input[name="radsex"]');
        var idade = ano - Number(formAno.value);
        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.objectFit = 'cover';
        img.style.height = '250px';
        img.style.width = '250px';
        img.style.borderRadius = '50%';

        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                // CRIANÇA
                img.setAttribute('src', './images/criança-menino.png');
            } else if (idade <= 18) {
                // JOVEM
                img.setAttribute('src', './images/jovem-homem.png');
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', './images/adulto-homem.png');
            } else {
                // IDOSO
                img.setAttribute('src', './images/idoso-homem.png');
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                // CRIANÇA
                img.setAttribute('src', './images/criança-menina.png');
            } else if (idade < 18) {
                // JOVEM
                img.setAttribute('src', './images/jovem-mulher.png');
            } else if (idade >= 18 && idade < 60) {
                // ADULTA
                img.setAttribute('src', './images/adulto-mulher.png');
            } else {
                // IDOSA
                img.setAttribute('src', './images/idoso-mulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}