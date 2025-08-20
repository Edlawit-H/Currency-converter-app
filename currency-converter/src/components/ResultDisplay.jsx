function ResultDisplay({ amount, from, to, result, rate }) {
  return (
    <div className="bg-green-500 text-white rounded-xl p-6 text-center shadow-md w-full">
      <h3 className="text-2xl font-bold">
        {parseFloat(amount).toLocaleString()} {from} →{" "}
        {result.toLocaleString()} {to}
      </h3>
      <p className="mt-2 text-lg">
        {amount} {from} = {result} {to}
      </p>
      {rate && (
        <div className="mt-3 bg-green-600 p-3 rounded-lg">
          <p className="text-sm">
            📈 Current Exchange Rate
            <p>1 {from} = {rate.toFixed(5)} {to}</p>
          </p>
        </div>
      )}
    </div>
  );
}
export default ResultDisplay;
