const endpoint="https://cfbcursos.repl.co/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})

