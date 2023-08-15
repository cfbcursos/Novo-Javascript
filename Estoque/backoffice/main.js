if(sessionStorage.getItem("n_pessoa_pessoa")=="-1"){
    window.location.href="./index.html";
}

const btn_menuPrincipal=document.querySelector("#btn_menuPrincipal");
const menuPrincipal=document.querySelector("#menuPrincipal");
const todosmenusprincipais=[...document.querySelectorAll(".btn_menuItem")];
const divid=document.querySelector("#id");
const divnome=document.querySelector("#nome");
const btnlogoff=document.querySelector("#btnlogoff");

btn_menuPrincipal.addEventListener("click",(evt)=>{
    menuPrincipal.classList.toggle("ocultar");
});

todosmenusprincipais.forEach(e=>{
    e.addEventListener("click",(evt)=>{
        menuPrincipal.classList.add("ocultar");
    });
})

btnlogoff.addEventListener("click",(evt)=>{
    sessionStorage.setItem("n_pessoa_pessoa","-1");
    sessionStorage.setItem("s_nome_pessoa","-1");
    window.location.href="./index.html";
});

const n_pessoa_pessoa=sessionStorage.getItem("n_pessoa_pessoa");
const s_nome_pessoa=sessionStorage.getItem("s_nome_pessoa");
divid.innerHTML=`id:${n_pessoa_pessoa}`;
divnome.innerHTML=`nome:${s_nome_pessoa}`;






