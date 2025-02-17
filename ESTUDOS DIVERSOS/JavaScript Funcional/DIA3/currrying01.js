// Função tradicional:
function multiplica(a, b, c) {
    return a * b * c
}
console.log(multiplica(5, 2, 3))

//função com Currying:
function multiplicaCurrying(a) {
    return function(b) {
        return function(c) {
            return a * b * c
        }
    }
}

console.log(multiplicaCurrying(5)(2)(3))