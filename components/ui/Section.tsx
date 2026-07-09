import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  tinted?: boolean;
};

export default function Section({ id, title, children, tinted }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-border ${tinted ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
