export default function StarRating({ value = 0 }: { value?: number }) {
    const full = Math.round(value);
    return (
        <div className="text-[10px] leading-none" aria-label={`${value} stars`}>
            {"★★★★★".slice(0,full)}
            <span className="opacity-30">{"★★★★★".slice(full)}</span>
        </div>
    )
}