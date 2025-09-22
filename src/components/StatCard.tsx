export default function StatCard({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-1 text-[color:var(--muted)] text-sm">{sub}</div>
    </div>
  );
}
