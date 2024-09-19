// Step-- 1
document.getElementById('btn-money').addEventListener('click', function(event){
    event.preventDefault();  //for automatic reload problem

    // step-- 2 : add how much money want to add in account 

    // get the amount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // get the pin  number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    // step-- 3: verify the pin number
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');
        // step-- 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)
        // step-- 5: add new balance with current balance
        const addMoneyNumber = parseFloat(addMoneyInput);  //add money string converted to number
        const balanceNumber = parseFloat(balance);  // currnet balance converted to number
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance)

        // step-- 6: update the balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again')
    }
})