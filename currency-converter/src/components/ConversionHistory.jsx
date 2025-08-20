function ConversionHistory({ history }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-700 mb-4">
        ⏰ Recent Conversions
      </h3>
      <ul className="space-y-3 max-h-80 overflow-y-auto pr-3">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-3"
          >
            <span className="text-blue-600 font-semibold text-lg">
              {item.amount} {item.from} →{" "}
              <span className="text-green-600">
                {item.result.toLocaleString()} {item.to}
              </span>
            </span>
            <span className="text-sm text-gray-500 text-right">
              {item.time} <br /> Rate: {item.rate.toFixed(4)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversionHistory;
