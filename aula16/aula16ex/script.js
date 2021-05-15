let number = document.querySelector('#number');
let list = document.querySelector('#list');
let res = document.querySelector('div#res');
var values = [];

function add() {
    if (number.value.length == 0 || number.value < 1 || number.value > 100) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let num = Number(number.value)
        if (values.includes(num)) {
            alert(`O número ${num} já existe, tente novamente.`)
        } else {
            values.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado`
            list.appendChild(item)
        }
    }
    return values
}

function finish() {
    var array = add();
    console.log(array[0]);
}