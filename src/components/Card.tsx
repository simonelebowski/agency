export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border shadow-sm p-6 bg-white/70 backdrop-blur">
      {children}
    </div>
  );
}
