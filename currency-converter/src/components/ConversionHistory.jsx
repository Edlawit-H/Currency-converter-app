function ConversionHistory({ history }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-bold text-gray-700 mb-3">
        ⏰ Recent Conversions
      </h3>
      <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-2"
          >
            <span className="text-blue-600 font-semibold">
              {item.amount} {item.from} →{" "}
              <span className="text-green-600">
                {item.result.toLocaleString()} {item.to}
              </span>
            </span>
            <span className="text-xs text-gray-500">
              {item.time} <br /> Rate: {item.rate.toFixed(4)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ConversionHistory;
