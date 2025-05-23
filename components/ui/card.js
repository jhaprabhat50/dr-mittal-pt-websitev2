export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-white text-black shadow ${className}`}>
      {children}
    </div>
  );
}
