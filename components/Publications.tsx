import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { publications } from "@/content/profile";

export default function Publications() {
  return (
    <Section id="publications" title="Publications" tinted>
      <ul className="flex flex-col gap-6">
        {publications.map((pub) => (
          <li key={pub.title} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <Badge>{pub.status}</Badge>
              <span className="text-xs text-muted">{pub.year}</span>
            </div>
            <h3 className="text-lg font-semibold leading-snug text-foreground">{pub.title}</h3>
            <p className="text-base leading-relaxed text-muted">{pub.authors}</p>
            <p className="text-base italic leading-relaxed text-muted">{pub.venue}</p>
            <div className="mt-2 flex gap-4 text-base">
              {pub.pdfUrl && (
                <a href={pub.pdfUrl} className="text-accent hover:underline">
                  PDF
                </a>
              )}
              {pub.bibtexUrl && (
                <a href={pub.bibtexUrl} className="text-accent hover:underline">
                  BibTeX
                </a>
              )}
              {pub.codeUrl && (
                <a href={pub.codeUrl} className="text-accent hover:underline">
                  Code
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
