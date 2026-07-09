import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6 transition-shadow hover:shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <div className="text-base leading-relaxed text-muted">{children}</div>
    </div>
  );
}
