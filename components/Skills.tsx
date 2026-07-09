import Section from "@/components/ui/Section";
import { skills } from "@/content/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <dl className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <dt className="text-sm font-semibold text-foreground">{group.category}</dt>
            <dd className="text-base leading-relaxed text-muted">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
