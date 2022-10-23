const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,25,19,20,18,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme na posição " +i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
    //console.log(ret)
})