let n=0
let max=1000
let pares=0

for(let i=n;i<max;i++){
    if(i%2!=0){
        continue
    }
    pares++
}

console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")