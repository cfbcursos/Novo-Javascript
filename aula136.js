const config={
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostarcxmsg=document.querySelector("#btn_mostarcxmsg")
const btn_mostarcxmsg2=document.querySelector("#btn_mostarcxmsg2")
const btn_mostarcxmsg3=document.querySelector("#btn_mostarcxmsg3")

btn_mostarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar("CFB Cursos","Curso de Javascript")
})

btn_mostarcxmsg2.addEventListener("click",()=>{
    cxmsg.mostrar("Youtube","Canal com cursos de programação")
})

btn_mostarcxmsg3.addEventListener("click",()=>{
    cxmsg.mostrar("Javascript","Aula 136")
})