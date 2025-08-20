function ConvertButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
    >
      Convert
    </button>
  );
}
export default ConvertButton;
