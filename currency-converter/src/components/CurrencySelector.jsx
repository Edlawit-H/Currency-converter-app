import { useState, useRef, useEffect } from "react";

const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "ZAR", name: "South African Rand" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "KRW", name: "South Korean Won" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "TRY", name: "Turkish Lira" },
];

function CurrencySelector({ label, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedCurrency = currencies.find((cur) => cur.code === value);

  return (
    <div className="flex flex-col w-full sm:w-64 relative" ref={ref}>
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>

      {/* Selected button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left border border-gray-300 rounded-xl p-2 bg-white shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0"
      >
        <span className="truncate sm:overflow-visible">
          {selectedCurrency.code} - {selectedCurrency.name}
        </span>
        <span className="ml-2 text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
          {currencies.map((cur) => (
            <li
              key={cur.code}
              onClick={() => {
                onChange(cur.code);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-blue-100 cursor-pointer text-sm sm:text-base"
            >
              {cur.code} - {cur.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrencySelector;
