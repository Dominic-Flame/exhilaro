const map: Record<string, string> = {
  Black: "#111827", White: "#f9fafb", Sand: "#e7d7c9", Coal: "#374151",
  Sage: "#a7b8a8", Bone: "#e5e7eb", Navy: "#1f2a44", Grey: "#9ca3af",
  Charcoal:"#4b5563", Olive:"#586b4a", Moss:"#6b8f62", Natural:"#efe7da", Stone:"#c6c6c6"
};
export default function ColorDots({ colors = [] as string[] }) {
  return (
    <div className="flex gap-1.5">
      {colors.slice(0,4).map(c => (
        <span key={c} className="h-2.5 w-2.5 rounded-full border" style={{backgroundColor:map[c] ?? "#e5e7eb"}} title={c}/>
      ))}
    </div>
  );
}
