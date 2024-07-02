import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    const [amount, setAmount] = useState('');
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const [result, setResult] = useState('');

    const handleConvert = () => {
        const exchangeRates = {
            USD: { EUR: 0.85, GBP: 0.75, MAD: 9.46 },
            EUR: { USD: 1.18, GBP: 0.88, MAD: 10.58 },
            GBP: { USD: 1.33, EUR: 1.14, MAD: 11.28 },
            MAD: { USD: 0.11, EUR: 0.094, GBP: 0.089 }
        };

        const convertedAmount = amount * exchangeRates[currencyFrom][currencyTo];
        setResult(`${amount} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`);
    };

    return (
        <div className="converter">
            <h1 className="logo react">Convertisseur de Devises</h1>
            <div className="input-group card">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Entrez le montant"
                />
                <select className="card" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="MAD">MAD</option>
                    {/* Ajoutez d'autres devises selon vos besoins */}
                </select>
            </div>
            <div className="input-group card">
                <select className="card" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="MAD">MAD</option>
                    {/* Ajoutez d'autres devises selon vos besoins */}
                </select>
                <button className="card" onClick={handleConvert}>Convertir</button>
            </div>
            {result && <p className="result card">{result}</p>}
        </div>
    );
}

export default App;
