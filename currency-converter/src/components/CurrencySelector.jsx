import { useState, useRef, useEffect } from "react";

const currencies = [
  { code: "USD", name: "United States Dollar", color: "text-blue-500" },
  { code: "EUR", name: "Euro", color: "text-yellow-500" },
  { code: "GBP", name: "British Pound Sterling", color: "text-purple-500" },
  { code: "JPY", name: "Japanese Yen", color: "text-red-500" },
  { code: "CAD", name: "Canadian Dollar", color: "text-green-500" },
  { code: "AUD", name: "Australian Dollar", color: "text-indigo-500" },
  { code: "CHF", name: "Swiss Franc", color: "text-teal-500" },
  { code: "CNY", name: "Chinese Yuan", color: "text-pink-500" },
  { code: "INR", name: "Indian Rupee", color: "text-orange-500" },
  { code: "SEK", name: "Swedish Krona", color: "text-cyan-500" },
  { code: "NZD", name: "New Zealand Dollar", color: "text-lime-500" },
  { code: "ZAR", name: "South African Rand", color: "text-fuchsia-500" },
  { code: "SGD", name: "Singapore Dollar", color: "text-rose-500" },
  { code: "HKD", name: "Hong Kong Dollar", color: "text-emerald-500" },
  { code: "NOK", name: "Norwegian Krone", color: "text-violet-500" },
  { code: "KRW", name: "South Korean Won", color: "text-indigo-600" },
  { code: "MXN", name: "Mexican Peso", color: "text-orange-600" },
  { code: "BRL", name: "Brazilian Real", color: "text-green-600" },
  { code: "RUB", name: "Russian Ruble", color: "text-red-600" },
  { code: "TRY", name: "Turkish Lira", color: "text-blue-600" },
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
          <span className={selectedCurrency.color}>{selectedCurrency.code}</span> - {selectedCurrency.name}
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
              <span className={cur.color}>{cur.code}</span> - {cur.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrencySelector;
