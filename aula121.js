const f_texto=document.querySelector("#f_texto")
const p_texto=document.querySelector("#p_texto")
const btn_texto=document.querySelector("#btn_texto")

btn_texto.addEventListener("click",(evt)=>{

})

let num=10
let curso="Javascript"
// window.localStorage.setItem("numero",num)
// localStorage.setItem("nome","Bruno")
// localStorage.setItem("canal","CFB Cursos")
// localStorage.setItem("curso",curso)
// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(localStorage.getItem("nome"))
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))
localStorage.clear()

sessionStorage.setItem("nome","Bruno")
sessionStorage.setItem("canal","CFB Cursos")
sessionStorage.setItem("curso",curso)