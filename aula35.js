const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})
