function CurrencySelector({ from, to, setFrom, setTo }) {
  const currencies = ["USD", "EUR", "GBP", "ETB", "JPY", "CAD"];

  return (
    <div className="bg-gray-100 rounded-xl p-6 shadow-md w-full">
      <label className="block text-gray-600 font-medium mb-2">From</label>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-green-400"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <label className="block text-gray-600 font-medium mb-2">To</label>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
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
