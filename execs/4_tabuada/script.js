function create() {
    var number = document.querySelector('#number');
    var list = document.querySelector('#list');

    if(number.value.length == 0) {
        alert('Verifique os dados e tente novamente!')
    } 
    else {
        number = Number(number.value);
        list.innerHTML = '';
        let n = 1;

        while(n <= 10) {
            var item = document.createElement('option');
            list.appendChild(item);
            item.innerHTML += `${n} x ${number} = ${n * number}`;
            n++;
        }
    }
}