let nome="Bruno";
let nomebase64=btoa(nome);
console.log(nomebase64);
console.log(atob(nomebase64));

const teste_file=document.querySelector("#teste_file");
const btn=document.querySelector("#btn");
const img=document.querySelector("#img");

btn.addEventListener("click",(evt)=>{
    const obj=teste_file.files[0];
    const reader=new FileReader();
    reader.addEventListener("load",(evt)=>{
        const res=reader.result;
        img.src=res;
        partes=res.split(",");
        console.log(res);
        console.log(partes[0]);
        const resmontado="data:image/jpeg;base64,"+partes[1];
        img.src=resmontado;
    },false);
    if(obj){
        reader.readAsDataURL(obj);
    }
})
