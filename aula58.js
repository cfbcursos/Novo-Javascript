class Carro{
    canal="CFB Cursos"
    constructor(pnome,ptipo){
        this.nome=pnome
        this.canal="Youtube"
        if(ptipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(ptipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }
    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log("---------------------")
    }
}

let c1=new Carro("Rapidão",1)
let c2=new Carro("Super Luxo",2)
let c3=new Carro("bombadão",4)
let c4=new Carro("Carrego tudo",3)

c1.setNome("Super Veloz")
c1.setVelMax(500)

c1.info()
//c2.info()
//console.log(c1.getInfo()[0])


