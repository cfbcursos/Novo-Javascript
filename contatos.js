import { contatos } from "./bancoContatos.js";

let i_contados=0

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDOM){
        const cont={
            id:i_contados,
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)
        i_contados++

        destinoDOM.innerHTML=""

        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("id",c.id)
            div.setAttribute("class","contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=c.telefone
            const p_mail=document.createElement("p")
            p_mail.innerHTML=c.email
            const btn_del=document.createElement("button")
            btn_del.innerHTML="remover"
            btn_del.addEventListener("click",(evt)=>{
                const id_el=evt.target.parentElement.id
                // console.log(evt.target.parentElement.id)
                let res=contatos.filter((el)=>{
                    return el.id!=id_el
                })
                contatos=res
            })
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_mail)
            div.appendChild(btn_del)
            destinoDOM.appendChild(div)
        })

    }
}

export default contato