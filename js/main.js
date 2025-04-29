// Get input elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Add event listeners for real-time conversion
celsiusInput.addEventListener('input', function() {
    const celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit: (C × 9/5) + 32
        fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(2);
        
        // Convert Celsius to Kelvin: C + 273.15
        kelvinInput.value = (celsius + 273.15).toFixed(2);
    } else {
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
});

fahrenheitInput.addEventListener('input', function() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(fahrenheit)) {
        // Convert Fahrenheit to Celsius: (F - 32) × 5/9
        celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        
        // Convert Fahrenheit to Kelvin: (F - 32) × 5/9 + 273.15
        kelvinInput.value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
    } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
    }
});

kelvinInput.addEventListener('input', function() {
    const kelvin = parseFloat(kelvinInput.value);
    
    if (!isNaN(kelvin)) {
        // Convert Kelvin to Celsius: K - 273.15
        celsiusInput.value = (kelvin - 273.15).toFixed(2);
        
        // Convert Kelvin to Fahrenheit: (K - 273.15) × 9/5 + 32
        fahrenheitInput.value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
    }
});