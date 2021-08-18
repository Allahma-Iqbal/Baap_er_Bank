/// Handle deposit button event;

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('Deposit Button Click')

    // Get the amount deposit;
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    const depostiTotal = document.getElementById('deposit-total');


    const previousDepostiText = depostiTotal.innerText;

    const previousDepostiAmount = parseFloat(previousDepostiText);

    const newDepositTotal = previousDepostiAmount + newDepositAmount;


    depostiTotal.innerText = newDepositTotal;


    // update account Balnce;
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field;
    depositInput.value= '';

})



/// Handlw Withdraw Button;

document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('Click Withdraw Button')

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    
    console.log(newWithdrawAmount);

    // set withdraw total;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previosWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previosWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update Balance;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText =balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input;
    withdrawInput.value ='';
})