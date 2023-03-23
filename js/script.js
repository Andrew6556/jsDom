"use strict";


document.querySelector(".main__btn").addEventListener("click",()=>{
    document.querySelector(".popup").style.visibility = 'visible';
    document.querySelector(".popup").style.opacity    = "1";
})
document.querySelector(".popup__close").addEventListener("click", ()=>{
    document.querySelector(".popup").style.visibility = 'hidden';
    document.querySelector(".popup").style.opacity    = "0";
})
document.querySelector(".form__btn").addEventListener("click", ()=>{
    document.querySelector(".popup").style.visibility = 'hidden';
    document.querySelector(".popup").style.opacity    = "0";
})