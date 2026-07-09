import Section from "@/components/ui/Section";
import { links, site } from "@/content/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <dl className="grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Email</dt>
          <dd>
            <a href={`mailto:${links.email}`} className="text-accent hover:underline">
              Email
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">GitHub</dt>
          <dd>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">ORCID</dt>
          <dd>
            <a
              href={links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ORCID
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">LinkedIn</dt>
          <dd>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">CV</dt>
          <dd>
            <a
              href={links.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              CV (PDF)
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">Lab Website</dt>
          <dd>
            <a
              href={links.labWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              NISE Lab / Lab Profile
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">Location</dt>
          <dd className="text-foreground">{site.department}, Ajou University, {site.location}</dd>
        </div>
      </dl>
    </Section>
  );
}
