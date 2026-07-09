import Section from "@/components/ui/Section";
import { awards } from "@/content/profile";

export default function Awards() {
  return (
    <Section id="awards" title="Awards and Scholarships" tinted>
      <ul className="flex flex-col gap-3">
        {awards.map((item) => (
          <li key={item.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base leading-relaxed">
            <span className="text-foreground">{item.title}</span>
            <span className="text-muted">{item.years}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
