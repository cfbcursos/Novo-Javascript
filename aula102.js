let nome=new String("Bruno Pinho Campos")
let nome2=new String("Bruno Pinho Campos")
let canal=new String("CFBCursos")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(nome.indexOf("o"))

console.log(nome.lastIndexOf("o"))

console.log(nome.localeCompare(nome2))

console.log(nome.replace("Pinho","Teste"))

console.log(nome.search("Pinho"))

let sobrenome=nome.slice(6,11)
console.log(sobrenome)

let arr_nome=nome.split(" ")
console.log(arr_nome)

