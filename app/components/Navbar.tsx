"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "HOME", href: "/dashboard" },
  { label: "SENSORS", href: "/sensors" },
  { label: "ACCOUNT", href: "/account" },
];

/* ── Sun icon ── */
function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/* ── Moon icon ── */
function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 navbar-glass border-b border-rover-border dark:border-dark-border">
      <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-5 max-md:py-4">
        <Link
          href="/dashboard"
          className="font-black text-[1.65rem] leading-tight no-underline tracking-tight transition-colors max-sm:text-[1.3rem]"
          style={{
            fontFamily: "'Barlow Condensed', 'Inter', sans-serif",
            color: theme === "dark" ? "#e4e4e7" : "#111",
          }}
        >
          RECONNAISSANCE<br />ROVER
        </Link>

        <div className="flex items-center gap-8 max-md:gap-5">
          <nav className="flex gap-8 items-center max-md:gap-5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-underline font-[Inter] font-semibold text-[0.82rem] tracking-[0.06em] py-1.5 px-0.5 no-underline transition-colors max-sm:text-[0.75rem] ${
                    isActive
                      ? "text-rover-accent font-bold nav-underline-active"
                      : "text-[#555] dark:text-[#999] hover:text-rover-text dark:hover:text-dark-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-rover-border dark:border-dark-border bg-rover-card dark:bg-dark-card text-rover-muted dark:text-dark-muted cursor-pointer transition-all hover:border-rover-accent hover:text-rover-accent hover:shadow-md"
          >
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: theme === "light" ? 1 : 0,
                transform: theme === "light" ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)",
              }}
            >
              <MoonIcon />
            </span>
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: theme === "dark" ? 1 : 0,
                transform: theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
              }}
            >
              <SunIcon />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
