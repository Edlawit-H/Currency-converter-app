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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 overflow-y-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Currency Converter
        </h1>
        <p className="text-gray-500 mt-1">
          Real-time exchange rates at your fingertips
        </p>
      </header>

      {/* Converter Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
        <AmountInput value={amount} onChange={setAmount} />
        <div className="flex items-center gap-3 my-4">
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

        {error && <ErrorMessage message={error} />}
        {result && (
          <ResultDisplay
            amount={amount}
            from={fromCurrency}
            to={toCurrency}
            result={result}
            rate={rate}
          />
        )}
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="mt-8 w-[400px]">
          <ConversionHistory history={history} />
          <button
          onClick={handleClear}
          className="w-full mt-2 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
        >
          Clear All
        </button>
        </div>
      )}
    </div>
  );
}

export default App;
