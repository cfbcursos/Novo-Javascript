const f_foto=document.querySelector("#f_foto");
const btn_mostrarFoto=document.querySelector("#btn_mostrarFoto");
const img_foto=document.querySelector("#img_foto");

btn_mostrarFoto.addEventListener("click",(evt)=>{
    converte_imagem_b64(img_foto,f_foto.files[0]);
});

const converte_imagem_b64=(localDestino,arquivoimg)=>{
    const obj=arquivoimg;
    const reader=new FileReader();
    reader.addEventListener("load",(evt)=>{
        const res=reader.result;
        localDestino.src=res;
    });
    if(obj){
        reader.readAsDataURL(obj);
    }
}