import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { projects } from "@/content/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" tinted>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
