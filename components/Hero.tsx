import Image from "next/image";
import { bio, links, site } from "@/content/profile";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 px-6 py-16 sm:flex-row sm:items-start sm:px-8 sm:py-24">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-accent">{site.role}</p>
          <p className="text-base text-muted">{site.institution}</p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{bio}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${links.email}`}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Email
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              ORCID
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={links.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              CV (PDF)
            </a>
            <a
              href={links.labWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Lab Profile
            </a>
          </div>
        </div>

        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-accent-soft sm:h-40 sm:w-40">
          <Image
            src={links.photo}
            alt="Sergio Paulo Caetano profile photo"
            width={160}
            height={160}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
