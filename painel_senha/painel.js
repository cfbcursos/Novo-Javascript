import Banco from './Banco.js'

const painel = document.getElementById("painel")
const topo = document.getElementById("topo")
const registros = document.getElementById("registros")
const aguardando = document.getElementById("aguardando")
const chamadas = document.getElementById("chamadas")
const rodape = document.getElementById("rodape")
const senhasAguardando = document.getElementById("senhasAguardando")
const senhasChamadas = document.getElementById("senhasChamadas")

const gerenciarSenhas=()=>{
    senhasAguardando.innerHTML=""
    senhasChamadas.innerHTML=""
    Banco.senhasAguardando().forEach((s)=>{
        const div=`<div id='${s.senha}' class='senha'>${s.nome}</div>`
        senhasAguardando.innerHTML+=div
    })
    Banco.senhasChamadas().forEach((s)=>{
        const div=`<div id='${s.senha}' class='senha'>${s.nome}</div>`
        senhasChamadas.innerHTML+=div
    })
}

Banco.novaSenha("Bruno",-1)
Banco.novaSenha("Bruce",-1)
Banco.novaSenha("Zig",-1)

Banco.chamarSenha("senha1")
Banco.chamarSenha("senha2")
Banco.senhaFinalizada("senha2")

gerenciarSenhas()
console.log(Banco.senhas)
