function tabuada() {
    let num = document.querySelector('#number');
    let tab = document.querySelector('#tabuada');

    if (num.value.length == 0) {
        alert('Por favor, digite um número.');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''; // Zerar o contador sempre.
        while (c < 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`; // Para outras linguagens necessita, JS não.
            tab.appendChild(item);
            c++;
        }
    }
}