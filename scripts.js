var principal = document.getElementById('principal');
var interestRate = document.getElementById('interestRate');
var repaymentPeriod = document.getElementById('repaymentPeriod');
var monthlyPayment = document.getElementById('monthlyRepayment');

var monthlyPayment = function () {
  if(principal.value && interestRate.value && repaymentPeriod.value) {
    // Form Fields Filled
    // 1. Convert interest rate from % to decimal.
    var decimalInterestRate = parseFloat(interestRate.value) / 100;
    // 2. Convert to monthly interest rate.
    var monthlyInterestRate = decimalInterestRate / 12;
    // 3. Increment by 1.
    var incrementedMonthlyInterestRate = monthlyInterestRate + 1;
    // 4. Number of Monthly Payments
    var numberOfMonthlyPayments = repaymentPeriod * 12;
    // 5. Calculate Monthly Payment
    monthlyPayment.innerHTML = (monthlyInterest / (1 - Math.pow(incrementedMonthlyInterestRate, (-1 * numberOfMonthlyPayments)))) * principal.value;
  } else {
    // Please fill out all the form fields...
  }
}
