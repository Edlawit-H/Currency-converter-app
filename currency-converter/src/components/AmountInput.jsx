function AmountInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-gray-600 mb-1 block">
        Amount
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder="Enter amount"
      />
    </div>
  );
}
export default AmountInput;
