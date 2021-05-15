function calcular() {
    let number = document.querySelector('#number');
    let list = document.querySelector('#list');

    if (number.value.length == 0) {
        alert('Valor inválido. Tente novamente!');
    } else {
        let num = Number(number.value);
        let c = 1;
        list.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            // item.value = `list${c}`;
            list.appendChild(item);
            c++;
        }
    }
}