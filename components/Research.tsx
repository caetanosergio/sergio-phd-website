import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { research } from "@/content/profile";

export default function Research() {
  return (
    <Section id="research" title="Research">
      <div className="grid gap-4 sm:grid-cols-2">
        {research.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
