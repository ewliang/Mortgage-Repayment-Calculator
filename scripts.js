var principal = document.getElementById('principal');
var interestRate = document.getElementById('interestRate');
var repaymentPeriod = document.getElementById('repaymentPeriod');
var monthlyRepayment = document.getElementById('monthlyRepayment');

function MonthlyPayment () {
  // Form Fields Filled
  // 1. Convert interest rate from % to decimal.
  var decimalInterestRate = parseFloat(interestRate.value) / 100;
  // 2. Convert to monthly interest rate.
  var monthlyInterestRate = decimalInterestRate / 12;
  // 3. Increment by 1.
  var incrementedMonthlyInterestRate = monthlyInterestRate + 1;
  // 4. Number of Monthly Payments
  var numberOfMonthlyPayments = repaymentPeriod.value * 12;
  // 5. Calculate Monthly Payment
  monthlyRepayment.innerHTML = '$' + Math.ceil((monthlyInterestRate / (1 - Math.pow(incrementedMonthlyInterestRate, (-1 * numberOfMonthlyPayments)))) * principal.value).toLocaleString();
}
