const dados=document.querySelector("#dados");
const fundopopup=document.querySelector("#fundopopup");
const btn_gravar=document.querySelector("#btn_gravar");
const btn_cancelar=document.querySelector("#btn_cancelar");
const f_id=document.querySelector("#f_id");
const f_nome=document.querySelector("#f_nome");
const f_celular=document.querySelector("#f_celular");
const f_email=document.querySelector("#f_email");
const f_dtnasc=document.querySelector("#f_dtnasc");

fetch("gestao.php")
.then(res=>res.json())
.then(res=>{
    console.log(res)
})

btn_gravar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar");
    //const endpoint=`http://127.0.0.1:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_celular.value}/${f_email.value}/${f_dtnasc.value}`;
    console.log(endpoint);
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            preencherdgv();
        }else{
            alert("Erro ao atualizar dados");
        }
    })
});
btn_cancelar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar");
});

const preencherdgv=()=>{
    dados.innerHTML="";
    const entpoint=`http://127.0.0.1:1880/pesquisartodoscontatos`;
    fetch(entpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        dados.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadados");

            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=el.n_contato_contato;
            linha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=el.s_nome_contato;
            linha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=el.s_celular_contato;
            linha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=el.s_email_contato;
            linha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5");
            c5.innerHTML=el.dt_dtnasc_contato;
            linha.appendChild(c5);

            const c6=document.createElement("div");
            c6.setAttribute("class","coluna c6 c_op");
            const imgdelete=document.createElement("img");
            imgdelete.setAttribute("src","delete.svg");
            imgdelete.setAttribute("class","iconeop");
            imgdelete.addEventListener("click",(evt)=>{
                //console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);
                removerContato(evt.target.parentNode.parentNode.firstChild.innerHTML);

            });
            const imgeditar=document.createElement("img");
            imgeditar.setAttribute("src","edit.svg");
            imgeditar.setAttribute("class","iconeop");
            imgeditar.addEventListener("click",(evt)=>{
                fundopopup.classList.remove("ocultar");
                const dados=[...evt.target.parentNode.parentNode.childNodes];
                f_id.value=dados[0].innerHTML;
                f_nome.value=dados[1].innerHTML;
                f_celular.value=dados[2].innerHTML;
                f_email.value=dados[3].innerHTML;
                f_dtnasc.value=dados[4].innerHTML.split("T")[0];       
            });
            c6.appendChild(imgdelete);
            c6.appendChild(imgeditar);
            linha.appendChild(c6);
            
            dados.appendChild(linha);
        })
    })
};

preencherdgv();

const removerContato=(id)=>{
    const endpoint=`http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            preencherdgv();
        }
    })
}