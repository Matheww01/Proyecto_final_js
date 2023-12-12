let Cuentas = [
    {User: "Mateo@gmail.com", Password:"F12023" ,Saldo:200},
    {User: "Francisco@gmail.com",Password:"ARC21", Saldo:290},
    {User: "Regina@gmail.com", Password:"REGI07",Saldo:67}
];

const userContanier = document.querySelector('#email');
const passwordContanier = document.querySelector('#password');
const saldoContainer = document.querySelector ('#saldo_actual');
const userConfirm= document.querySelector ('#user_conf');
const operationContainer = document.querySelector ('#operation');


function loggin (){
if (userContanier.value === Cuentas[0].User && passwordContanier.value === Cuentas[0].Password){
    userConfirm.textContent = "Haz iniciado sesión";
    saldoContainer.textContent = Cuentas[0].Saldo;
} else if (userContanier.value === Cuentas[1].User && passwordContanier.value === Cuentas[1].Password){
    userConfirm.textContent = "Haz iniciado sesión";
    saldoContainer.textContent = Cuentas[1].Saldo;
} else if (userContanier.value === Cuentas[2].User && passwordContanier.value === Cuentas[2].Password){
    userConfirm.textContent = "Haz iniciado sesión";
    saldoContainer.textContent = Cuentas[2].Saldo;
} else {
    userConfirm.textContent = "Contraseña incorrecta, intente de nuevo.";
}
}

function lunchoperation (){
    const moneyContainer = document.querySelector ('#price');
    const depositContainer = document.querySelector ('#depositos')
    const retirtContainer = document.querySelector ('#retiros')
    if (operationContainer.value === "DEPOSITAR"){
        saldoContainer.textContent = parseInt(saldoContainer.textContent) + parseInt(moneyContainer.value);
        depositContainer.textContent = parseInt(depositContainer.textContent) + parseInt(moneyContainer.value);
    }else if(operationContainer.value === "RETIRAR"){
        saldoContainer.textContent = parseInt(saldoContainer.textContent) - parseInt(moneyContainer.value); 
        retirtContainer.textContent = parseInt(retirtContainer.textContent) - parseInt(moneyContainer.value);
    }
}