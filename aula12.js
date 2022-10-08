const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML="curso"
});

console.log(objs1)
console.log(objs2)