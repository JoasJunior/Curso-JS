function count() {
    var start = document.querySelector('#start');
    var end = document.querySelector('#end');
    var move = document.querySelector('#move');
    var res = document.querySelector('#res');
    
    if(start.value.length == 0 || end.value.length == 0 || move.value.length == 0) {
        alert('Verifique os dados e tente novamente!');
    } else {
        start = Number(start.value);
        end = Number(end.value);
        move = Number(move.value);
        res.innerHTML = '';
        let c = start;

        if(start < end) {
            for(c; c <= end; c += move) {

                res.innerHTML += `${c} 👉 `;

            } res.innerHTML += `🏁`;

        } else if(start > end) {
            for(c; c >= end; c -= move) {

                res.innerHTML += `${c} 👉 `;

            } res.innerHTML += `🏁`;
        }
    }
}