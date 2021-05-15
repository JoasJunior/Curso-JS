let number = document.querySelector('#number');
let list = document.querySelector('#list');
let res = document.querySelector('div#res');
var values = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(number.value) && !isList(number.value, values)) {
        values.push(Number(number.value));
        let item = document.createElement('option');
        item.text = `Valor ${number.value} adicionado`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já existente. Tente novamente!');
    }
    number.value = '';
    number.focus();
}

function finish() {
    if (values.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = values.length;
        let bigger = values[0];
        let smaller = values[0];
        let amount = 0;
        let media = 0;
        for (let pos in values) {
            amount += values[pos];
            if (values[pos] > bigger)
                bigger = values[pos]
            if (values[pos] < smaller)
                smaller = values[pos]
        }
        media = amount / total;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`
        res.innerHTML += `<p>A soma de todos os valores foi ${amount}.</p>`
        res.innerHTML += `<p>A média da soma dos valores foi ${media}.</p>`
    }
}