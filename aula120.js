const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg=null
    if(f_nota.validity.valueMissing){
        msg="Poxa, este campo é obrigatótio"
    }else if(f_nota.validity.rangeOverflow){
        msg="Nossa, que nota alta você digitou"
    }else if(f_nota.validity.rangeUnderflow){
        msg="Credo, que nota baixa você digitou"
    }
    // f_nota.reportValidity()
    f_msg.innerHTML=msg
    evt.preventDefault()
})

// document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
//     let estadoValidacao=f_nota.validity
//     if(estadoValidacao.valueMissing){
//         f_nota.setCustomValidity("Poxa, este campo é obrigatótio")
//     }else if(estadoValidacao.rangeOverflow){
//         f_nota.setCustomValidity("Nossa, que nota alta você digitou")
//     }else if(estadoValidacao.rangeUnderflow){
//         f_nota.setCustomValidity("Credo, que nota baixa você digitou")
//     }
//     f_nota.reportValidity()
//     // f_msg.innerHTML=f_nota.validationMessage
//     evt.preventDefault()
// })

//Métodos de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/