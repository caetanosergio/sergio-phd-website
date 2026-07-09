import Section from "@/components/ui/Section";
import { languages } from "@/content/profile";

export default function Languages() {
  return (
    <Section id="languages" title="Languages">
      <ul className="flex flex-wrap gap-3 text-sm">
        {languages.map((language) => (
          <li
            key={language}
            className="rounded-full border border-border bg-surface px-3 py-1 text-foreground"
          >
            {language}
          </li>
        ))}
      </ul>
    </Section>
  );
}
