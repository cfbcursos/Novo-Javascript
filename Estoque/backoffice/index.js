import {Cxmsg} from "../../utils/cxmsg.js";

const f_email=document.querySelector("#f_email");
const f_senha=document.querySelector("#f_senha");
const btn_login=document.querySelector("#btn_login");
const primeiroAcessso=document.querySelector("#primeiroAcessso");
const login=document.querySelector("#login");

let serv=null;

const endpoint_config=`../config.txt`;
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    sessionStorage.setItem("servidor_nodered",res.servidor_nodered);
    sessionStorage.setItem("versao",res.versao);
    serv=res.servidor_nodered;
});

btn_login.addEventListener("click",(evt)=>{
    if(serv!=null){
        const email=f_email.value;
        let senha=f_senha.value;
        if(senha==""){
            senha="-1";
        }
        const endpoint=`${serv}/login/${email}/${senha}`;
        fetch(endpoint)
        .then(res=>{
            if(res.status==200){ //OK
                window.location.href="./main.html";
            }else if(res.status==208){ //Senha errada
                const config={
                    titulo:"Erro",
                    texto:"Senha Incorreta",
                    cor:"#008",
                    tipo:"ok",
                    ok:()=>{},
                    sim:()=>{},
                    nao:()=>{}
                }
                Cxmsg.mostrar(config);
            }else if(res.status==205){ //Primeiro Acesso
                console.log("Primeiro Acesso");
                login.classList.add("ocultarPopup");
                primeiroAcessso.classList.remove("ocultarPopup");
            }
        })
    }
});