const objetos=document.getElementById("objetos")

const computador={
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD.:${this.hd}`)
    }
}
computador["monitor"]="22pol"
computador.placaVideo="rtx"

console.log(computador["ram"])

const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },
    {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    },
    {
        cpu:"i5",
        ram:"16gb",
        hd:"1tb"
    }
]

computadores.forEach((c)=>{
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})

// computador.info()
// console.log(computadores)
// objetos.innerHTML=JSON.stringify(computadores)
