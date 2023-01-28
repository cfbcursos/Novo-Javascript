const carro=document.getElementById("carro")
const btn_parar=document.getElementById("btn_parar")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")

const init=()=>{
    carro.style="position:relative;left:0px"
}

let anima=null

const move=(dir)=>{
    carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
}

btn_parar.addEventListener("click",()=>{
    clearInterval(anima)
})

btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,-1)
})

btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,1)
})

window.onload=init
//window.addEventListener("load",init())