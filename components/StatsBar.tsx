import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <div className="bg-navy-800">
      <div className="container-page grid grid-cols-2 divide-x divide-white/10 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0 sm:px-6">
            <p className="font-display text-3xl font-semibold text-emerald-300 sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/50 sm:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
