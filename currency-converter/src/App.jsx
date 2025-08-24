import { useState } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";
import ErrorMessage from "./components/ErrorMessage";
import ConversionHistory from "./components/ConversionHistory";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const handleConvert = async () => {
    if (!amount) {
      setError("Please enter an amount");
      return;
    }
    setError("");
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      const converted = data.rates[toCurrency];
      setResult(converted);
      setRate(converted / amount);

      const newEntry = {
        amount,
        from: fromCurrency,
        to: toCurrency,
        result: converted,
        rate: converted / amount,
        time: new Date().toLocaleTimeString(),
      };

      setHistory([newEntry, ...history.slice(0, 4)]);
    } catch (err) {
      setError("Failed to fetch conversion rate.");
    }
  };

  const handleClear = () => {
    setAmount("");
    setResult(null);
    setRate(null);
    setError("");
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4 px-2 sm:py-8 sm:px-4 space-y-6 overflow-y-auto">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 leading-tight sm:leading-snug md:leading-normal lg:leading-normal">
          Currency Converter
        </h1>
        <p className="text-gray-500 mt-1">
          Real-time exchange rates at your fingertips
        </p>
      </header>

      {/* 1️⃣ Converter Card */}
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full sm:max-w-xl md:max-w-2xl">
        <AmountInput value={amount} onChange={setAmount} />
        <div className="flex flex-col sm:flex-row items-center gap-3 my-4">
          <CurrencySelector
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
          />
          <button
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
            className="p-2 border rounded-full hover:bg-gray-100 transition"
          >
            ↕
          </button>
          <CurrencySelector
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
          />
        </div>

        <ConvertButton onClick={handleConvert} />
      </div>

      {/* 2️⃣ Result Display Card */}
      {result && (
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full sm:max-w-xl md:max-w-2xl">
          <ResultDisplay
            amount={amount}
            from={fromCurrency}
            to={toCurrency}
            result={result}
            rate={rate}
          />
        </div>
      )}

      {/* 3️⃣ Conversion History Card */}
      {history.length > 0 && (
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full sm:max-w-xl md:max-w-2xl">
          <ConversionHistory history={history} />
          <button
            onClick={handleClear}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Error message */}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default App;
