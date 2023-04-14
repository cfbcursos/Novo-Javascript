const id_numero=document.querySelector("#id_numero");
const mensagem=document.querySelector("#mensagem");
const btn_verificar=document.querySelector("#btn_verificar");

const numerocpu=Math.floor(Math.random()*300);
let quantidade=0;

mensagem.innerHTML=`Número escolhido: Tentativas ${quantidade}`;

btn_verificar.addEventListener("click",(evt)=>{
    quantidade++;
    if(id_numero.value > numerocpu){
        mensagem.innerHTML=`Seu número é maior que o sorteado: Tentativas ${quantidade}`;
    }else if(id_numero.value < numerocpu){
        mensagem.innerHTML=`Seu número é menor que o sorteado: Tentativas ${quantidade}`;
    }else{
        mensagem.innerHTML=`Parabéns você acertou em ${quantidade} tentativas`;
    }
});

