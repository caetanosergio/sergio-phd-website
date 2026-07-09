import Section from "@/components/ui/Section";
import { links, site } from "@/content/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-3 text-base leading-relaxed sm:grid-cols-2">
        <a href={`mailto:${links.email}`} className="text-accent hover:underline">
          Email
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        <a
          href={links.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Google Scholar
        </a>
        <a
          href={links.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          ORCID
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={links.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          CV (PDF)
        </a>
        <a
          href={links.labWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          NISE Lab / Lab Profile
        </a>
        <p className="text-foreground sm:col-span-2">
          Location: {site.department}, Ajou University, {site.location}
        </p>
      </div>
    </Section>
  );
}
