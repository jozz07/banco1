const accountBalance = document.getElementById("account-balance");
const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");

let balance = 0;

function updateBalance() {
  accountBalance.textContent = `Saldo: $${balance}`;
}

depositButton.addEventListener("click", () => {
  const depositAmount = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (!isNaN(depositAmount) && depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
  }
});

withdrawButton.addEventListener("click", () => {
  const withdrawAmount = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= withdrawAmount;
    updateBalance();
  }
});

updateBalance();
