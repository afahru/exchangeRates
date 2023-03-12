//Calculate, get API and display the exchange rate
function calculate() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const url = `https://api.exchangerate.host/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const convertedCurrency = data.rates[toCurrency];
            //Format currency based on currency code
            let exchangeRateText = '';
            if (toCurrency === 'IDR') {
                exchangeRateText = `Rp ${convertedCurrency.toFixed(2)}`;
            } else if (toCurrency === 'USD') {
                exchangeRateText = `$ ${convertedCurrency.toFixed(2)}`;
            } else if (toCurrency === 'EUR') {
                exchangeRateText = `€ ${convertedCurrency.toFixed(2)}`;
            } else if (toCurrency === 'GBP') {
                exchangeRateText = `£ ${convertedCurrency.toFixed(2)}`;
            } else if (toCurrency === 'JPY') {
                exchangeRateText = `¥ ${convertedCurrency.toFixed(2)}`;
            } else {
                exchangeRateText = `${convertedCurrency.toFixed(2)} ${toCurrency}`;
            }
            document.getElementById('result').textContent = exchangeRateText;
        })
        .catch(error => console.log(error));
}
//Function to clear the input fields and reset the dropdowns to default
function clearInput() {
    document.getElementById('amount').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('from').selectedIndex = 0;
    document.getElementById('to').selectedIndex = 0;
}