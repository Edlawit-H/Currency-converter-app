const currencies = ["USD", "EUR", "GBP", "ETB", "JPY", "CAD"];

function CurrencySelector({ label, value, onChange }) {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-gray-600 mb-1 block">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}
export default CurrencySelector;
