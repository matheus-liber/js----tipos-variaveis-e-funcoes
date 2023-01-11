// parâmetros de função

function soma(a, b) {
    return a + b;
}

console.log(soma(2, 2))


// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

/* console.log(nomeIdade(26, "Matheus")); */

function multiplica (numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplica((soma(4,5)), soma(3, 3)));