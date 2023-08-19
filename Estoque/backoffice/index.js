import {Cxmsg} from "../../utils/cxmsg.js";

const f_email=document.querySelector("#f_email");
const f_senha=document.querySelector("#f_senha");
const btn_login=document.querySelector("#btn_login");
const primeiroAcessso=document.querySelector("#primeiroAcessso");
const login=document.querySelector("#login");
const emaildefsenha=document.querySelector("#emaildefsenha");
const btn_fecharPopupDefSenha=document.querySelector("#btn_fecharPopupDefSenha");
const iddefsenha=document.querySelector("#iddefsenha");
const f_senha1=document.querySelector("#f_senha1");
const f_senha2=document.querySelector("#f_senha2");
const btn_gravarSenha=document.querySelector("#btn_gravarSenha");

sessionStorage.setItem("n_pessoa_pessoa","-1");
sessionStorage.setItem("s_nome_pessoa","-1");

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
        .then(res=>res.json())
        .then(res=>{
            if(res.retorno==200){ //OK
                sessionStorage.setItem("n_pessoa_pessoa",res.n_pessoa_pessoa);
                sessionStorage.setItem("s_nome_pessoa",res.s_nome_pessoa);
                sessionStorage.setItem("n_token_token",res.insertId);
                sessionStorage.setItem("s_token_token",res.token);
                window.location.href="./main.html";
            }else if(res.retorno==208){ //Senha errada
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
            }else if(res.retorno==205){ //Primeiro Acesso
                console.log("Primeiro Acesso");
                iddefsenha.value=res.n_pessoa_pessoa;
                emaildefsenha.value=f_email.value;
                login.classList.add("ocultarPopup");
                primeiroAcessso.classList.remove("ocultarPopup");
            }
        })
    }
});

btn_fecharPopupDefSenha.addEventListener("click",(evt)=>{
    primeiroAcessso.classList.add("ocultarPopup");
    login.classList.remove("ocultarPopup");
});

btn_gravarSenha.addEventListener("click",(evt)=>{
    if(f_senha1.value!="" && f_senha2.value!=""){
        if(f_senha1.value != f_senha2.value){
            const config={
                titulo:"Alerta",
                texto:"Senhas não são iguais",
                cor:"#008",
                tipo:"ok",
                ok:()=>{},
                sim:()=>{},
                nao:()=>{}
            }
            Cxmsg.mostrar(config);
        }else{
            const dados={
                n_pessoa_pessoa:iddefsenha.value,
                s_senha_pessoa:f_senha1.value,
            }
            const cab={
                method:'post',
                body:JSON.stringify(dados)
            }
            let endpoint=`${serv}/gravarnovasenha`;
            fetch(endpoint,cab)
            .then(res=>{
                if(res.status==200){
                    primeiroAcessso.classList.add("ocultarPopup");
                    login.classList.remove("ocultarPopup");
                    f_senha.value=f_senha1.value;
                }
            })
        }
    }else{
        const config={
            titulo:"Alerta",
            texto:"Digite a senha nos dois campos",
            cor:"#008",
            tipo:"ok",
            ok:()=>{},
            sim:()=>{},
            nao:()=>{}
        }
        Cxmsg.mostrar(config);
    }
});
