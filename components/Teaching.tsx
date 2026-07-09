import Section from "@/components/ui/Section";
import { additionalTeaching, teaching } from "@/content/profile";

export default function Teaching() {
  return (
    <Section id="teaching" title="Teaching">
      <ul className="flex flex-col gap-6">
        {teaching.map((item) => (
          <li key={item.title + item.period} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <span className="text-xs text-muted">{item.period}</span>
            </div>
            <p className="text-base leading-relaxed text-muted">{item.institution}</p>
            <ul className="mt-2 list-inside list-disc text-base leading-relaxed text-muted">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        Additional Teaching Experience
      </h3>
      <ul className="flex flex-col gap-4">
        {additionalTeaching.map((item) => (
          <li key={item.title}>
            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
            <p className="text-base leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
