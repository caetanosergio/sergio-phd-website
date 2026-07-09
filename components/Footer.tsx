import { site } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-xs text-muted sm:px-8">
      <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      <p className="mt-1">Last updated: July 2026</p>
    </footer>
  );
}
