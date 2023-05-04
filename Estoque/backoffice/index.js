const btn_menuPrincipal=document.querySelector("#btn_menuPrincipal");
const menuPrincipal=document.querySelector("#menuPrincipal");
const todosmenusprincipais=document.querySelectorAll(".btn_menuItem");

btn_menuPrincipal.addEventListener("click",(evt)=>{
    menuPrincipal.classList.toggle("ocultar");
    return 0;
});
console.log(todosmenusprincipais)
todosmenusprincipais.forEach(e=>{
    btn_menuPrincipal.addEventListener("click",(evt)=>{
        evt.stopPropagation();    
        menuPrincipal.classList.add("ocultar");
        return;
        console.log("teste")
    })
})