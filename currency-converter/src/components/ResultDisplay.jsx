function ResultDisplay({ amount, from, to, result, rate }) {
  return (
    <div className="mt-6 bg-green-500 text-white rounded-xl p-4 text-center shadow-md">
      <h3 className="text-xl font-bold">
        {parseFloat(amount).toLocaleString()} {from} →{" "}
        {result.toLocaleString()} {to}
      </h3>
      <p className="mt-2 text-lg">
        {amount} {from} = {result} {to}
      </p>                                                                                                                                                                   
      {rate && (
        <div className="mt-3 bg-green-600 p-2 rounded-lg">
          <p className="text-xs font-semibold flex items-center justify-center gap-1 text-green-100">
            📈 Current Exchange Rate
          </p>
          <p className="text-sm mt-1">
            1 {from} = {rate.toFixed(5)} {to}
          </p>
        </div>
      )}

    </div>
  );
}
export default ResultDisplay;
