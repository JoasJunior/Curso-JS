var values = [];
let number = document.querySelector('#number');
let list = document.querySelector('#list');
let res = document.querySelector('div#res');
let body = document.querySelector('body')

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, v) {
    if(v.indexOf(Number(n)) == -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if(isNumber(number.value) && inList(number.value, values)) {
        values.push(Number(number.value));
        let item = document.createElement('option');
        item.innerHTML = `Número ${number.value} adicionado`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor já adicionado ou não-válido, tente novamente.');
    }
    number.value = '';
    number.focus();
}

function finish() {
    if(values.length == 0) {
        res.innerHTML = 'Adicione valores antes de finalizar.';
    } else {
        let total = values.length;
        let smaller = values[0];
        let bigger = values[0];
        let amount = 0;
        let media = 0;

        for(let pos in values) {
            amount += values[pos];
            if(values[pos] > bigger)
                bigger = values[pos]
            if(values[pos] < smaller)
                smaller = values[pos]
        }
        media = amount / total;

        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.alignItems = 'center'
        res.innerHTML = ''
        res.innerHTML += `<p>Você adicionou ${total} números;</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${bigger};</p>`
        res.innerHTML += `<p>O menor número informado foi ${smaller};</p>`
        res.innerHTML += `<p>A soma de todos os números é ${amount};</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media};</p>`

    }
}