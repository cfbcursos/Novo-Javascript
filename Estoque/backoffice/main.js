const serv=sessionStorage.getItem("servidor_nodered");
const verificarToken=()=>{
    const token=sessionStorage.getItem("s_token_token");
    const endpoint=`${serv}/verificatoken/${token}`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        if(res.retorno==200){
            pagina();
        }else{
            alert("Token inválido");
            sessionStorage.removeItem("n_pessoa_pessoa");
            sessionStorage.removeItem("s_nome_pessoa");
            sessionStorage.removeItem("n_token_token");
            sessionStorage.removeItem("s_token_token");             
            window.location.href="./index.html";
        }
    })
}
verificarToken();

const pagina=()=>{
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
}





