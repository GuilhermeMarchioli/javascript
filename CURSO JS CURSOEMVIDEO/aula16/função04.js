// function fatorial(n) {
//     let fat = 1
//     for(let c = n; c > 1; c--) {
//         fat *=c
//     }
//     return fat
// }

// console.log(fatorial())


//Recursividade 
function fatorial(n) {
    let fat = 1
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial())