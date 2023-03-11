const config={
    titulo:"Teste",
    texto:"CFB Cursos",
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)

const btn_mostarcxmsg=document.querySelector("#btn_mostarcxmsg")

btn_mostarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})
