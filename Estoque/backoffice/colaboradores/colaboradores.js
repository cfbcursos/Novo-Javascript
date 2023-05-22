const dadosGrid=document.querySelector("#dadosGrid");
const btn_add=document.querySelector("#btn_add");
const novoColaborador=document.querySelector("#novoColaborador");
const btn_fecharPopup=document.querySelector("#btn_fecharPopup");
const btn_gravarPopup=document.querySelector("#btn_gravarPopup");
const btn_cancelarPopup=document.querySelector("#btn_cancelarPopup");
const telefones=document.querySelector("#telefones");
const f_fone=document.querySelector("#f_fone");
const f_nome=document.querySelector("#f_nome");
const f_tipoColab=document.querySelector("#f_tipoColab");
const f_status=document.querySelector("#f_status");
const f_foto=document.querySelector("#f_foto");
const img_foto=document.querySelector("#img_foto");

const endpoint_todoscolaboradores=`http://127.0.0.1:1880/todosusuarios`;
fetch(endpoint_todoscolaboradores)
.then(res=>res.json())
.then(res=>{
    console.log(res);
    dadosGrid.innerHTML="";
    res.forEach(e=>{
        const divlinha=document.createElement("div");
        divlinha.setAttribute("class","linhaGrid");

        const divc1=document.createElement("div");
        divc1.setAttribute("class","colunaLinhaGrid c1");
        divc1.innerHTML=e.n_usuario_usuario;
        divlinha.appendChild(divc1);

        const divc2=document.createElement("div");
        divc2.setAttribute("class","colunaLinhaGrid c2");
        divc2.innerHTML=e.s_nome_usuario;
        divlinha.appendChild(divc2);
        
        const divc3=document.createElement("div");
        divc3.setAttribute("class","colunaLinhaGrid c3");
        divc3.innerHTML=e.n_tipousuario_tipousuario;
        divlinha.appendChild(divc3);
        
        const divc4=document.createElement("div");
        divc4.setAttribute("class","colunaLinhaGrid c4");
        divc4.innerHTML=e.c_status_usuario;
        divlinha.appendChild(divc4);    
        
        const divc5=document.createElement("div");
        divc5.setAttribute("class","colunaLinhaGrid c5");
        divlinha.appendChild(divc5);
        
        const img_status=document.createElement("img");
        img_status.setAttribute("src","../../imgs/on.svg");
        img_status.setAttribute("class","icone_op");
        divc5.appendChild(img_status);

        const img_editar=document.createElement("img");
        img_editar.setAttribute("src","../../imgs/editar.svg");
        img_editar.setAttribute("class","icone_op");
        divc5.appendChild(img_editar);
        
        const img_remover=document.createElement("img");
        img_remover.setAttribute("src","../../imgs/delete.svg");
        img_remover.setAttribute("class","icone_op");
        divc5.appendChild(img_remover); 

        dadosGrid.appendChild(divlinha);
    });
});

const endpoint_tiposColab=`http://127.0.0.1:1880/tiposcolab`;
fetch(endpoint_tiposColab)
.then(res=>res.json())
.then(res=>{
    f_tipoColab.innerHTML="";
    res.forEach(e=>{
        const opt=document.createElement("option");
        opt.setAttribute("value",e.n_tipousuario_tipousuario);
        opt.innerHTML=e.s_desc_tipousuario;
        f_tipoColab.appendChild(opt);
    });
})

btn_add.addEventListener("click",(evt)=>{
    novoColaborador.classList.remove("ocultarPopup");
});
btn_fecharPopup.addEventListener("click",(evt)=>{
    novoColaborador.classList.add("ocultarPopup");
});
btn_gravarPopup.addEventListener("click",(evt)=>{
    const tels=[...document.querySelectorAll(".numTel")];
    console.log(tels);
    let numTels=[];
    tels.forEach(t=>{
        numTels.push(t.innerHTML);
    });
    const dados={
        s_nome_usuario:f_nome.value,
        n_tipousuario_tipousuario:f_tipoColab.value,
        c_status_usuario:f_status.value,
        numtelefones:numTels,
        s_foto_usuario:img_foto.getAttribute("src")
    }
    const cab={
        method:'post',
        body:JSON.stringify(dados)
    }
    const endpointnovocolab=`http://127.0.0.1:1880/novocolab`
    fetch(endpointnovocolab,cab)
    .then(res=>{
        if(res.status==200){
            alert("Novo colaborador gravado");
            f_nome.value="";
            f_tipoColab.value="";
            f_status.value="";
            f_foto.value="";
            img_foto.setAttribute("src","#");
            telefones.innerHTML="";
        }else{
            alert("Erro ao gravar novo colaborador");
        }
    })
    
});
btn_cancelarPopup.addEventListener("click",(evt)=>{
    novoColaborador.classList.add("ocultarPopup");
});

f_fone.addEventListener("keyup",(evt)=>{
    if(evt.key=="Enter"){
        if(evt.target.value.length >= 8){
            const divTel=document.createElement("div");
            divTel.setAttribute("class","tel");

            const numTel=document.createElement("div");
            numTel.setAttribute("class","numTel");
            numTel.innerHTML=evt.target.value;
            divTel.appendChild(numTel);

            const delTel=document.createElement("img");
            delTel.setAttribute("src","../../imgs/delete.svg");
            delTel.setAttribute("class","delTel");
            delTel.addEventListener("click",(evt)=>{
                evt.target.parentNode.remove();
            });
            divTel.appendChild(delTel);
            
            telefones.appendChild(divTel);

            evt.target.value="";
        }else{
            alert("Número de Telefone inválido");
        }
    }
});

const converte_imagem_b64=(localDestino,arquivoimg)=>{
    const obj=arquivoimg;
    const reader=new FileReader();
    reader.addEventListener("load",(evt)=>{
        localDestino.src=reader.result;
    });
    if(obj){
        reader.readAsDataURL(obj);
    }
}

f_foto.addEventListener("change",(evt)=>{
    converte_imagem_b64(img_foto,evt.target.files[0]);
});