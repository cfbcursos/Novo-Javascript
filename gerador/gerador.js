const numeros=document.querySelector("#numeros");

let num=[];
let pos=0;
let existe=true;

const max=6;

for(let i=0;i<max;i++){
    num[i]=0;
}

for(let i=0;i<max;i++){
    existe=true;
    while(existe){
        existe=false;
        let numgerado=Math.floor(Math.random()*50);
        for(let p=0;p<max;p++){
            if(num[i]==numgerado){
                existe=true;
            }
        }
        if(!existe){
            num[pos]=numgerado;
            pos++;
        }
    }
}
numeros.innerHTML=num;