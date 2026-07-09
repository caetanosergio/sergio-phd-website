import Section from "@/components/ui/Section";
import { news } from "@/content/profile";

export default function News() {
  return (
    <Section id="news" title="News">
      <ul className="flex flex-col gap-4">
        {news.map((item) => (
          <li key={item.date + item.text} className="flex gap-4 text-base leading-relaxed">
            <span className="w-20 shrink-0 font-mono text-xs text-muted">{item.date}</span>
            <span className="text-foreground">{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
