import { useState, useRef, useEffect } from "react";

const currencies = [
  { code: "USD", name: "United States Dollar", color: "text-blue-500" },
  { code: "EUR", name: "Euro", color: "text-blue-600" },
  { code: "GBP", name: "British Pound Sterling", color: "text-blue-700" },
  { code: "CAD", name: "Canadian Dollar", color: "text-teal-500" },
  { code: "AUD", name: "Australian Dollar", color: "text-yellow-500" },
  { code: "JPY", name: "Japanese Yen", color: "text-red-500" },
  { code: "CNY", name: "Chinese Yuan", color: "text-red-600" },
  { code: "INR", name: "Indian Rupee", color: "text-orange-600" },
  { code: "CHF", name: "Swiss Franc", color: "text-gray-700" },
  { code: "MXN", name: "Mexican Peso", color: "text-green-600" },
  { code: "BRL", name: "Brazilian Real", color: "text-green-500" },
  { code: "ZAR", name: "South African Rand", color: "text-green-700" },
  { code: "SEK", name: "Swedish Krona", color: "text-yellow-600" },
  { code: "NOK", name: "Norwegian Krone", color: "text-blue-500" },
  { code: "DKK", name: "Danish Krone", color: "text-blue-600" },
  { code: "SGD", name: "Singapore Dollar", color: "text-green-500" },
  { code: "HKD", name: "Hong Kong Dollar", color: "text-red-500" },
  { code: "KRW", name: "South Korean Won", color: "text-blue-700" },
  { code: "MYR", name: "Malaysian Ringgit", color: "text-teal-600" }
];

function CurrencySelector({ label, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const selectedCurrency = currencies.find((cur) => cur.code === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1" ref={ref}>
      <label className="text-sm font-medium text-gray-600 mb-1 block">{label}</label>

      {/* Selected button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl text-left flex justify-between items-center focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <span>
          <span className={`${selectedCurrency.color} font-semibold`}>
            {selectedCurrency.code}
          </span>{" "}
          - {selectedCurrency.name}
        </span>
        <span className="ml-2">▾</span>
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {currencies.map((cur) => (
            <li
              key={cur.code}
              onClick={() => {
                onChange(cur.code);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
            >
              <span>
                <span className={`${cur.color} font-semibold`}>{cur.code}</span> - {cur.name}
              </span>
              {value === cur.code && <span>✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrencySelector;
