const btn_menuPrincipal=document.querySelector("#btn_menuPrincipal");
const menuPrincipal=document.querySelector("#menuPrincipal");
const todosmenusprincipais=[...document.querySelectorAll(".btn_menuItem")];

btn_menuPrincipal.addEventListener("click",(evt)=>{
    menuPrincipal.classList.toggle("ocultar");
});

todosmenusprincipais.forEach(e=>{
    e.addEventListener("click",(evt)=>{
        menuPrincipal.classList.add("ocultar");
    });
})




