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
function start(numUse){
    userConfirm.textContent = "Haz iniciado sesión";
    saldoContainer.textContent = Cuentas[numUse].Saldo;
}
function loggin (){
if (userContanier.value === Cuentas[0].User && passwordContanier.value === Cuentas[0].Password){
    start(0);
} else if (userContanier.value === Cuentas[1].User && passwordContanier.value === Cuentas[1].Password){
    start(1)
} else if (userContanier.value === Cuentas[2].User && passwordContanier.value === Cuentas[2].Password){
    start(2)
} else {
    userConfirm.textContent = "Contraseña incorrecta, intente de nuevo.";
}
}

function lunchoperation (){
    const moneyContainer = document.querySelector ('#price');
    const depositContainer = document.querySelector ('#depositos')
    const retirtContainer = document.querySelector ('#retiros')
    const limitOperation = document.querySelector('#operation_limit')
    if (moneyContainer.value >0){
    if (operationContainer.value === "DEPOSITAR"){
        if (parseInt(saldoContainer.textContent) + parseInt(moneyContainer.value) <= 990){
            saldoContainer.textContent = parseInt(saldoContainer.textContent) + parseInt(moneyContainer.value);
            depositContainer.textContent = parseInt(depositContainer.textContent) + parseInt(moneyContainer.value);
            limitOperation.textContent = "Operación realizada";
        } else{
            limitOperation.textContent = "No puedes tener en tu cuenta más de $990";
        }
    }else if(operationContainer.value === "RETIRAR"){
        if (parseInt(saldoContainer.textContent) - parseInt(moneyContainer.value) >= 10){
            saldoContainer.textContent = parseInt(saldoContainer.textContent) - parseInt(moneyContainer.value); 
            retirtContainer.textContent = parseInt(retirtContainer.textContent) - parseInt(moneyContainer.value);
            limitOperation.textContent = "Operación realizada";
        }else{
            limitOperation.textContent = "No es posible retirar";
        }
    }
    }else{
        limitOperation.textContent = "Ingresa un monto valido";
    }
}