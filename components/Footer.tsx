import { profile, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[var(--text)]">{profile.name}</p>
          <p>{profile.role}</p>
          <p>{profile.location}</p>
        </div>
        <ul className="flex flex-wrap gap-4">
          {socials.map((item) => (
            <li key={item.key}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
