import Section from "@/components/ui/Section";
import { service } from "@/content/profile";

export default function Service() {
  return (
    <Section id="service" title="Service" tinted>
      <ul className="flex flex-col gap-5">
        {service.map((item) => (
          <li key={item.title}>
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
