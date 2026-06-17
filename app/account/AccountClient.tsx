"use client";

import Navbar from "../components/Navbar";
import { signOutAction } from "../(auth)/actions";

interface AccountProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function AccountClient({ user }: AccountProps) {
  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="rover-bg min-h-screen font-[Inter] text-rover-text dark:text-dark-text">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-8 py-8 pb-16 flex flex-col gap-7 max-md:px-4 max-md:py-5">
        <h1 className="font-display font-extrabold text-[1.15rem] tracking-[0.06em] text-rover-text dark:text-dark-text uppercase">
          ACCOUNT
        </h1>

        <div className="grid grid-cols-[280px_1fr] gap-6 items-start max-md:grid-cols-1">
          {/* profile card */}
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-6 py-9 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-rover-accent to-blue-400 text-white flex items-center justify-center font-display font-extrabold text-2xl tracking-[0.04em] mb-4">
              {initials}
            </div>
            <h2 className="font-display font-extrabold text-[1.1rem] text-rover-text dark:text-dark-text mb-1">
              {user.name || "Operator"}
            </h2>
            <p className="text-[0.82rem] text-rover-muted dark:text-dark-muted mb-3">
              {user.email || "—"}
            </p>
            <span className="inline-block px-3.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.06em] bg-rover-accent/10 dark:bg-rover-accent/20 text-rover-accent dark:text-blue-400 border border-rover-accent/20 dark:border-rover-accent/30">
              TEAM MEMBER
            </span>
          </div>

          {/* details card */}
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-7 py-6 shadow-sm hover:shadow-md transition-shadow md:row-span-2">
            <h2 className="font-display font-extrabold text-[0.92rem] tracking-[0.08em] text-[#333] dark:text-dark-text mb-4 uppercase">
              PROFILE DETAILS
            </h2>

            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {[
                { label: "DISPLAY NAME", value: user.name || "" },
                { label: "EMAIL", value: user.email || "" },
                { label: "ROLE", value: "TEAM MEMBER" },
                { label: "TEAM", value: "ALPHA" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-bold tracking-[0.08em] text-rover-muted dark:text-dark-muted uppercase">
                    {field.label}
                  </label>
                  <input
                    className="px-3.5 py-2.5 text-[0.85rem] font-medium border-[1.5px] border-rover-border dark:border-dark-border rounded-lg bg-black/[0.02] dark:bg-white/[0.02] text-rover-text dark:text-dark-text outline-none cursor-default transition-colors focus:border-rover-accent"
                    defaultValue={field.value}
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>

          {/* session info card */}
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-7 py-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-display font-extrabold text-[0.92rem] tracking-[0.08em] text-[#333] dark:text-dark-text mb-4 uppercase">
              SESSION INFO
            </h2>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-bold tracking-[0.08em] text-rover-muted dark:text-dark-muted uppercase">
                  STATUS
                </label>
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-[0.06em] uppercase bg-rover-success/10 text-green-700 border border-rover-success/20 dark:bg-rover-success/20 dark:text-emerald-400 dark:border-rover-success/30">
                  ACTIVE
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-bold tracking-[0.08em] text-rover-muted dark:text-dark-muted uppercase">
                  LAST LOGIN
                </label>
                <span className="text-[0.85rem] font-semibold text-[#333] dark:text-dark-text">
                  {new Date().toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* actions card */}
          <div className="bg-rover-card dark:bg-dark-card border border-rover-border dark:border-dark-border rounded-[10px] px-7 py-6 shadow-sm hover:shadow-md transition-shadow md:col-start-2">
            <h2 className="font-display font-extrabold text-[0.92rem] tracking-[0.08em] text-[#333] dark:text-dark-text mb-4 uppercase">
              ACTIONS
            </h2>
            <div className="flex gap-3">
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="font-display font-bold text-[0.74rem] tracking-[0.06em] px-4 py-1.5 rounded border-[1.5px] border-rover-danger text-rover-danger bg-transparent uppercase cursor-pointer transition-all hover:bg-rover-danger hover:text-white"
                >
                  SIGN OUT
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
