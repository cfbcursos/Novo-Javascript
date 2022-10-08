function* contator(){
    let i=0
    while(true){
        yield i++
        if(i>5)
            break
    }
}
const itc=contator()
for(let c of itc){
    console.log(c)
}