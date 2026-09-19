"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export default function NavLinks({ className = "" }: { className?: string }) {
  const path = usePathname() ?? "/";

  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex gap-3">
        {links.map((l) => {
          const isActive = path === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  "inline-flex items-center rounded-md px-3 py-1 text-sm font-medium transition " +
                  (isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100")
                }
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
