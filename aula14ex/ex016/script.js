function contarNumeros() {
    var res = document.body.querySelector('div#resultado');
    var start = Number(document.querySelector('input#start').value);
    var end = Number(document.querySelector('input#end').value);
    var move = Number(document.querySelector('input#move').value);

    if (start < end) {
        if (start > 0 && end > 0 && move > 0) {
            res.innerHTML = 'Contando:';
            while (start <= end) {
                res.innerHTML += ` ${start} 👉`;
                start = start + move;
            }
        } else if (move <= 0) {
            alert('Passo não reconhecido. Contaremos de 1 em 1.')
            res.innerHTML = 'Contando:';
            while (start <= end) {
                res.innerHTML += ` ${start} 👉`;
                start++;
            }
        } else {
            alert('Verifique os dados e tente novamente!');
        }
    } else {
        if (start > end) {
            res.innerHTML = 'Contando:';
            while (start >= end) {
                res.innerHTML += ` ${start} 👉`;
                start = start - move;
            }
        }
    }
}