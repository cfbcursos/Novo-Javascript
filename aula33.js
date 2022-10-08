const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementById("c1")

//const query_divTodas=[...document.querySelectorAll("div[class]")]
const query_divTodas=[...document.querySelectorAll("div > p")]
const query_cursosTodos=[...document.querySelectorAll(".curso")]
const query_cursosC1=[...document.querySelectorAll(".c1,p")]
const query_cursosC2=[...document.querySelectorAll(".c2")]
//const query_cursoEspecial=document.querySelector("#c1")
const query_cursoEspecial=document.querySelectorAll("#c1")[0]

console.log(query_divTodas)
//console.log(query_cursosC2)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el)=>{
//     el.classList.add("destaque")
// })

