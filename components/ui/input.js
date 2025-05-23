export function Input({ type = "text", placeholder = "", className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
