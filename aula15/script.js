let num = [
    4,
    1,
    2,
    3,
    8,
    5,
    9
];

num.sort()

console.log(`Temos no vetor os seguintes valores: ${num}`);
console.log(`Ele tem ${num.length} posições`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log(`Por favor, tente novamente, o valor digitado não existe no sistema!`)
} else {
    console.log(`O valor procurado existe no sistema e está na posição ${pos}`)
}

// for (var pos = 0; pos < num.length; pos++) {
//     console.log(`${num[pos]}`)
// }

// for (let pos in num) {
//     console.log(`A posição ${pos} tem valor ${num[pos]}`)
// }