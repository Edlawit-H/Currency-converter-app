function ErrorMessage({ message }) {
  return (
    <div className="mt-4 bg-red-100 text-red-600 rounded-xl p-4 text-center shadow-md w-full max-w-4xl mx-auto">
      <p>{message}</p>
    </div>
  );
}
export default ErrorMessage;
