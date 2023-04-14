"use strict"
let nota1=20;
let nota2=25;
let nota3=0;
let nota4=2;
let res=nota1+nota2+nota3+nota4;
console.log(res);
if(res >= 70){
    res="Aprovado";
}else if(res >= 50){
    res="Recuperação";
}else{
    res="Reprovado";
}
console.log(res);