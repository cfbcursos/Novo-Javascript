//5! = 5*4*3*2*1 = 120

let n=10
let fat=1

while(n>=1){
    fat*=n
    //fat=fat*n
    n--
}

console.log(fat)