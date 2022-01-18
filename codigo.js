

// let nombre =  prompt('¿Cual es tu nombre?');
// alert(`Hola ${nombre} , Hace Tu Pedido`);

let btnReg = document.querySelector('.btn-reg');

btnReg.addEventListener('click', (e)=>{
    (e).preventDefault;
    console.log('Te Registraste Correctamene');
})

let password = document.querySelector('.password');

password.addEventListener('keypress', (e) =>{
    console.log(e)
})