function ConvertButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition"
    >
      Convert Currency
    </button>
  );
}
export default ConvertButton;
