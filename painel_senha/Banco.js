export default class Banco{
    static cont=0
    static senhas=[]
    static novaSenha=(nome,prioridade)=>{
        let padraoSenha={
            senha:`senha${this.cont}`,
            nome:nome,
            prioridade:prioridade,
            status:"A"
        }
        this.senhas.push(padraoSenha)
        this.cont++
    }
    static senhasAguardando=()=>{
        const retorno=this.senhas.filter((e)=>{
            return e.status==="A"
        })
        return retorno
    }
    static senhasChamadas=()=>{
        const retorno=this.senhas.filter((e)=>{
            return e.status==="C"
        })
        return retorno
    }
    static chamarSenha=(senha)=>{
        this.senhas.forEach((s)=>{
            if(s.senha===senha){
                s.status="C"
            }
        })
    }
    static senhaFinalizada=(senha)=>{
        this.senhas.forEach((s)=>{
            if(s.senha===senha){
                s.status="F"
            }
        })
    }
}