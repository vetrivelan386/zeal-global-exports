import { Milestone } from "lucide-react";
import { milestones } from "@/lib/content";

export default function Milestones() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {milestones.map((m) => (
        <div key={m.title} className="flex flex-col rounded-md border border-navy-100 bg-white p-7">
          <Milestone size={26} className="text-emerald-600" strokeWidth={1.5} />
          <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{m.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
