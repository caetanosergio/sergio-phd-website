import Section from "@/components/ui/Section";
import { education } from "@/content/profile";

export default function Education() {
  return (
    <Section id="education" title="Education" tinted>
      <ul className="flex flex-col gap-6">
        {education.map((item) => (
          <li key={item.degree} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-base font-semibold text-foreground">{item.degree}</h3>
            <p className="text-base leading-relaxed text-muted">{item.institution}</p>
            <p className="text-base leading-relaxed text-accent">{item.status}</p>
            {item.thesis && (
              <p className="mt-2 text-base italic leading-relaxed text-muted">Thesis: {item.thesis}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
