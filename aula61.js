const Pessoa={
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.nome=idade
    }
}

const p2=Pessoa
const p3=Pessoa

p3.nome="Cladisvardson"
p2["nome"]="Bridgertrudismelda"
Pessoa.setNome("Patricscrerdison")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)