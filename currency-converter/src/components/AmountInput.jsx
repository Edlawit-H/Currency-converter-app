function AmountInput({ amount, setAmount }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 shadow-md w-full">
      <label className="block text-gray-600 font-medium mb-2">
        Enter Amount
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="e.g. 100"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}
export default AmountInput;
