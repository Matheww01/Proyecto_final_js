let cuentas = [
    {user: "Mateo@gmail.com", password:"F12023" ,saldo:200},
    {user: "Francisco@gmail.com",password:"ARC21", saldo:290},
    {user: "Regina@gmail.com", password:"REGI07",saldo:67}
];
const userContanier = document.querySelector('#email');
const passwordContanier = document.querySelector('#password');
const saldoContainer = document.querySelector ('#saldo_actual');
const userConfirm= document.querySelector ('#user_conf');
const operationContainer = document.querySelector ('#operation');
function start(numUse){ //Función de inición de sesión 
    userConfirm.textContent = "Haz iniciado sesión";
    saldoContainer.textContent = cuentas[numUse].saldo;
}

function loggin (){
for (let numUse = 0;numUse <= 2; numUse ++){
    if (userContanier.value === cuentas[numUse].user && passwordContanier.value === cuentas[numUse].password){
        start(numUse);}}
if (userConfirm.textContent != "Haz iniciado sesión" ){
    userConfirm.textContent = "Contraseña incorrecta, intente de nuevo.";}}

/*function loggin (){ // Función para iniciar sesión con una cuenta valida
if (userContanier.value === cuentas[0].user && passwordContanier.value === cuentas[0].password){
    start(0);
} else if (userContanier.value === cuentas[1].user && passwordContanier.value === cuentas[1].password){
    start(1)
} else if (userContanier.value === cuentas[2].user && passwordContanier.value === cuentas[2].password){
    start(2)
} else {
    userConfirm.textContent = "Contraseña incorrecta, intente de nuevo.";
}
}*/

function lunchoperation (){//Función que deposita o retira
    const moneyContainer = document.querySelector ('#price');
    const depositContainer = document.querySelector ('#depositos')
    const retirtContainer = document.querySelector ('#retiros')
    const limitOperation = document.querySelector('#operation_limit')
    if (moneyContainer.value >0){
    if (operationContainer.value === "DEPOSITAR"){//Validación de la operación de deposito
        if (parseInt(saldoContainer.textContent) + parseInt(moneyContainer.value) <= 990){
            saldoContainer.textContent = parseInt(saldoContainer.textContent) + parseInt(moneyContainer.value);
            depositContainer.textContent = parseInt(depositContainer.textContent) + parseInt(moneyContainer.value);
            limitOperation.textContent = "Operación realizada";
        } else{
            limitOperation.textContent = "No puedes tener en tu cuenta más de $990";
        }
    }else if(operationContainer.value === "RETIRAR"){//Validación de la operación de retiro
        if (parseInt(saldoContainer.textContent) - parseInt(moneyContainer.value) >= 10){
            saldoContainer.textContent = parseInt(saldoContainer.textContent) - parseInt(moneyContainer.value); 
            retirtContainer.textContent = parseInt(retirtContainer.textContent) - parseInt(moneyContainer.value);
            limitOperation.textContent = "Operación realizada";
        }else{
            limitOperation.textContent = "No es posible retirar, debes tener en tu cuenta un minimo de $10";
        }
    }
    }else{
        limitOperation.textContent = "Ingresa un monto valido";
    }
}