// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calclulatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calclulatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calclulatedPayments).toFixed(2);
    totalInterest.value = ((monthly*calclulatedPayments) - principal).toFixed(2);
  } else {
    // console.log('Please check your numbers');
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// Show Error
function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');
  
  // add class
  errorDiv.className = 'alert alert-danger';

  // Create textNote and append to div
  errorDiv.appendChild(document.createTextNode(error));
}