async function fetchRate() {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/JPY"
  );
  const data = await response.json();
  return data.rates.EUR;
}

async function convert(event) {
  event.preventDefault();
  // takes yen value from input field
  const yenAmount = parseFloat(document.getElementById("amount").value);
  // calls fetchRate()
  const yenRate = await fetchRate();
  // converts yen into euro according to rate
  const euroValue = yenAmount * yenRate;
  // calls displayResult()
  displayResult(euroValue);
}

function displayResult(value) {
  document.getElementById("finalValue").innerHTML = value;
}

const button = document.getElementById("submitButton");

button.addEventListener("click", convert);
