"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BellRing,
  Blocks,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Coins,
  Command,
  Crown,
  Database,
  Fingerprint,
  Globe,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Layers3,
  Library,
  Lock,
  Menu,
  MessageSquare,
  Network,
  Orbit,
  Play,
  Radio,
  Rocket,
  ScrollText,
  Search,
  Shield,
  Signal,
  Sparkles,
  Star,
  TimerReset,
  Users,
  Wallet,
  Workflow,
  X,
  BookOpen,
} from "lucide-react";

const views = [
  ["prelanding", "Pre-Landing"],
  ["landing", "Landing"],
  ["app", "Main App"],
];

const topStats = [
  ["Embassies planned", "128"],
  ["Working demos", "24"],
  ["Operator score", "98/100"],
  ["Main app status", "Submitted"],
];

const demoCards = [
  ["import", "Source Import Pipeline", "Vault", Database, "Import chats, docs, calls, PDFs, and archives into one controlled memory system."],
  ["query", "Embassy Query Composer", "Core", MessageSquare, "Ask the Embassy brain and switch the answer scope instantly."],
  ["tiers", "Access Tier Matrix", "Monetization", Lock, "Public, premium, private, sponsor, and operator room control."],
  ["pricing", "Dynamic Pricing Studio", "Monetization", CircleDollarSign, "Tune prices, trial logic, and premium conversion paths."],
  ["zones", "Memory Zone Designer", "Vault", Layers3, "Split public, premium, private, and operator-only memory."],
  ["models", "Model Router", "Core", Bot, "Switch between speed, depth, and premium quality modes."],
  ["onboarding", "Member Onboarding", "Community", GraduationCap, "Guide new members with a premium step-by-step knowledge path."],
  ["lore", "Lore Explorer", "Community", BookOpen, "Turn years of history into a polished searchable experience."],
  ["support", "Support Brain", "Team", HeartHandshake, "Deflect repeated questions and route support fast."],
  ["research", "Research Room", "Core", Library, "Query private archives and evidence-rich source packs."],
  ["creator", "Creator Fan Pass", "Creator", Star, "Launch VIP and backstage intelligence tiers."],
  ["language", "Voice & Language Switcher", "Core", Globe, "Keep the same memory in multiple languages and tones."],
  ["digest", "Digest Generator", "Community", ScrollText, "Generate daily, weekly, and event recaps."],
  ["moderation", "Moderator Console", "Community", Shield, "Protect sensitive rooms and review risky prompts."],
  ["sponsor", "Sponsor Studio", "Monetization", Award, "Create sponsor-safe rooms without exposing raw memory."],
  ["timeline", "Incident Timeline", "Team", TimerReset, "Track key moments, fixes, and memory updates."],
  ["splits", "Revenue Split Engine", "Monetization", Coins, "Split revenue across operator, creator, treasury, and protocol."],
  ["analytics", "Analytics Pulse", "Analytics", BarChart3, "Track retention, conversions, response quality, and room usage."],
  ["crosschain", "Universal Access Flow", "Zeta", Network, "Preview how users can enter from different chain surfaces."],
  ["btc", "BTC Access Preview", "Zeta", Wallet, "Show a BTC holder unlocking premium Embassy access."],
  ["audit", "View-Key Audit Room", "Security", Fingerprint, "Selective disclosure without exposing sensitive archive content."],
  ["health", "Community Health Meter", "Analytics", Signal, "Measure freshness, energy, clarity, and churn resilience."],
  ["events", "Live Event Embassy", "Creator", Radio, "Spin up a temporary intelligence room for launches and summits."],
  ["broadcast", "Broadcast Studio", "Team", BellRing, "Push updates into public, premium, and operator channels."],
];

const features = [
  [Brain, "Private community intelligence", "Your docs, chats, and archives become a premium knowledge engine."],
  [Coins, "Monetization built in", "Charge for premium rooms, event passes, and operator-level access."],
  [Network, "Zeta-aligned access", "Frame the product as a serious Embassy experience with a main app path."],
  [Briefcase, "Company-grade command surface", "A YC-style product shell with pre-landing, landing, and deep demo room."],
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(69,255,184,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(76,189,255,0.14),transparent_32%),radial-gradient(circle_at_bottom,rgba(69,255,184,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
        <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Panel({ children, className = "" }) {
  return (
    <div className={cn("rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}

function Section({ children, className = "" }) {
  return <section className={cn("mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16", className)}>{children}</section>;
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
      {children}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <Panel className="p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
    </Panel>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>{label}</span>
        <span className="font-medium text-white">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-500"
        />
      </div>
    </div>
  );
}

function Nav({ view, setView }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <button onClick={() => setView("prelanding")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-300 text-[#041014] shadow-[0_10px_40px_rgba(103,232,249,0.18)]">
            <Orbit className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-white">Mushee Embassy</div>
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Europe Global Incorporated</div>
          </div>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {views.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all",
                view === id ? "bg-white text-zinc-950" : "text-zinc-300 hover:bg-white/5"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300 md:block">
            Submitted
          </div>
          <button onClick={() => setView("app")} className="hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 md:block">
            Open Main App
          </button>
          <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/10 p-2 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {views.map(([id, label]) => (
              <button
                key={id}
                onClick={() => {
                  setView(id);
                  setOpen(false);
                }}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm",
                  view === id ? "bg-white text-zinc-950" : "bg-white/[0.03] text-zinc-300"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PreLanding({ setView }) {
  return (
    <Section className="pt-14 md:pt-20">
      <Panel className="overflow-hidden p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>
              <Sparkles className="h-3.5 w-3.5" /> Pre-Landing Surface
            </Eyebrow>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Build the sovereign AI brain for your community.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              Mushee Embassy turns chats, docs, archives, calls, and internal memory into one premium intelligence layer with private rooms,
              operator control, monetization, and a serious main app experience.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => setView("landing")} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950">
                Enter Landing Page <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => setView("app")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white">
                Open Main App <Play className="h-4 w-4" />
              </button>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Zeta-Aligned • Submitted
              </div>
            </div>
          </div>

          <Panel className="border-white/12 bg-white/[0.03] p-5">
            <div className="rounded-[24px] border border-white/10 bg-[#091118] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Launch Board</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Embassy Preview</div>
                </div>
                <div className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-semibold text-[#061117]">Ready</div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {topStats.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>
      </Panel>
    </Section>
  );
}

function Landing({ setView, activeDemo, setActiveDemo }) {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <Eyebrow>
              <Building2 className="h-3.5 w-3.5" /> Mushee Embassy Landing
            </Eyebrow>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              A premium demo that opens into the actual Embassy product.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              This is the real flow: pre-landing page, landing page, then the main app. No copied branding. No extra company filler.
              Just Mushee Embassy with a deep interactive surface and 24 working demo modules.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => setView("app")} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950">
                Open Main App <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => document.getElementById("demo-grid")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white">
                Explore Demos <Play className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Panel className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {topStats.map(([label, value]) => (
                <StatCard key={label} label={label} value={value} />
              ))}
            </div>
          </Panel>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map(([Icon, title, text]) => (
            <Panel key={title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xl font-semibold text-white">{title}</div>
              <div className="mt-2 text-sm leading-7 text-zinc-400">{text}</div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section id="demo-grid">
        <div className="mb-8 space-y-4">
          <Eyebrow>
            <Blocks className="h-3.5 w-3.5" /> Demo Grid
          </Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">More than 20 working demos in one landing surface.</h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            Click any demo card below. The preview panel updates immediately, then you can move into the full main app dashboard.
          </p>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {demoCards.map(([id, title, category, Icon, blurb]) => (
              <button
                key={id}
                onClick={() => setActiveDemo(id)}
                className={cn(
                  "rounded-[24px] border p-5 text-left transition-all",
                  activeDemo === id
                    ? "border-emerald-300/40 bg-emerald-300/10 shadow-[0_18px_60px_rgba(16,185,129,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", activeDemo === id ? "bg-white text-zinc-950" : "bg-white/[0.06] text-white")}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">{category}</div>
                </div>
                <div className="mt-4 text-base font-semibold text-white">{title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{blurb}</div>
              </button>
            ))}
          </div>
          <DemoRenderer demoId={activeDemo} compact />
        </div>
      </Section>
    </>
  );
}

function MiniPanel({ side, title, children, compact = false }) {
  return (
    <Panel className={cn("p-5", compact && "sticky top-24 self-start")}>
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{side}</div>
          <div className="mt-1 text-xl font-semibold text-white">{title}</div>
        </div>
        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">Live</div>
      </div>
      <div className="mt-5">{children}</div>
    </Panel>
  );
}

function DemoRenderer({ demoId, compact = false }) {
  const [price, setPrice] = useState(24);
  const [zone, setZone] = useState("Premium");
  const [mode, setMode] = useState("Operator Balanced");
  const [language, setLanguage] = useState("English");
  const [auditEnabled, setAuditEnabled] = useState(true);
  const [question, setQuestion] = useState("What makes our community different from other groups?");
  const [query, setQuery] = useState("");

  const filteredDemos = useMemo(() => {
    if (!query.trim()) return demoCards;
    const q = query.toLowerCase();
    return demoCards.filter(([, title, category, , blurb]) => title.toLowerCase().includes(q) || category.toLowerCase().includes(q) || blurb.toLowerCase().includes(q));
  }, [query]);

  if (demoId === "import") {
    return (
      <MiniPanel side="Vault" title="Source Import Pipeline" compact={compact}>
        <div className="grid gap-3 md:grid-cols-2">
          {["Discord export", "Telegram archive", "PDF reports", "Call notes", "Operator memos", "Docs and FAQs"].map((item, idx) => (
            <div key={item} className={cn("rounded-2xl border p-4 text-sm", idx < 4 ? "border-emerald-300/20 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-300")}>
              {item}
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "query") {
    return (
      <MiniPanel side="Core" title="Embassy Query Composer" compact={compact}>
        <div className="space-y-4">
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="min-h-[120px] w-full rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none" />
          <div className="flex flex-wrap gap-2">
            {["Public", "Premium", "Private", "Sponsor", "Operator"].map((z) => (
              <button key={z} onClick={() => setZone(z)} className={cn("rounded-full px-4 py-2 text-sm", zone === z ? "bg-white text-zinc-950" : "border border-white/10 bg-white/[0.03] text-zinc-300")}>
                {z}
              </button>
            ))}
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
            <span className="font-semibold text-white">Embassy answer:</span> Your community stands out because it turns scattered knowledge into a protected premium intelligence system, with better onboarding, private rooms, and an operator layer that feels like a real institution.
          </div>
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "tiers") {
    return (
      <MiniPanel side="Monetization" title="Access Tier Matrix" compact={compact}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {["Public", "Premium", "Private", "Sponsor", "Operator"].map((item, idx) => (
            <div key={item} className={cn("rounded-2xl border p-4", idx === 1 ? "border-emerald-300/30 bg-emerald-300/10" : "border-white/10 bg-white/[0.03]") }>
              <div className="text-sm font-semibold text-white">{item}</div>
              <div className="mt-3 text-xs leading-6 text-zinc-400">Answer depth {idx + 1}/5 • Memory scope {Math.min(idx + 2, 5)}/5</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "pricing") {
    return (
      <MiniPanel side="Revenue" title="Dynamic Pricing Studio" compact={compact}>
        <div className="space-y-5">
          <div>
            <div className="text-sm text-zinc-400">Premium room price — ${price}</div>
            <input type="range" min="5" max="99" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-3 w-full accent-emerald-300" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard label="Projected members" value="142" />
            <StatCard label="Monthly gross" value={`$${(price * 142).toLocaleString()}`} />
            <StatCard label="Upgrade rate" value="28%" />
          </div>
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "zones") {
    return (
      <MiniPanel side="Vault" title="Memory Zone Designer" compact={compact}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Public", "Intro, FAQs, public lore"],
            ["Premium", "Deep reports and member archives"],
            ["Private", "Sensitive operator documents"],
            ["Sponsor", "Curated sponsor-safe answers"],
          ].map(([name, text]) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-white">{name}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{text}</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "models") {
    return (
      <MiniPanel side="Core" title="Model Router" compact={compact}>
        <div className="grid gap-5 md:grid-cols-[0.45fr_0.55fr]">
          <div className="space-y-3">
            {["Operator Balanced", "Fast Reply", "Deep Research", "Premium Voice"].map((item) => (
              <button key={item} onClick={() => setMode(item)} className={cn("w-full rounded-2xl border px-4 py-3 text-left text-sm", mode === item ? "border-emerald-300/30 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-300")}>
                {item}
              </button>
            ))}
          </div>
          <div className="space-y-5">
            <ProgressBar label="Quality score" value={mode === "Deep Research" ? 96 : mode === "Premium Voice" ? 92 : 86} />
            <ProgressBar label="Latency score" value={mode === "Fast Reply" ? 97 : mode === "Operator Balanced" ? 88 : 74} />
            <ProgressBar label="Cost efficiency" value={mode === "Operator Balanced" ? 91 : mode === "Fast Reply" ? 94 : 70} />
          </div>
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "language") {
    return (
      <MiniPanel side="Core" title="Voice & Language Switcher" compact={compact}>
        <div className="flex flex-wrap gap-2">
          {["English", "French", "Spanish", "Arabic", "Japanese"].map((item) => (
            <button key={item} onClick={() => setLanguage(item)} className={cn("rounded-full px-4 py-2 text-sm", language === item ? "bg-white text-zinc-950" : "border border-white/10 bg-white/[0.03] text-zinc-300")}>
              {item}
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
          <span className="font-semibold text-white">Sample in {language}:</span> Embassy keeps the same memory while adapting tone, vocabulary, and context so every member feels like the product was made for them.
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "audit") {
    return (
      <MiniPanel side="Security" title="View-Key Audit Room" compact={compact}>
        <button onClick={() => setAuditEnabled((v) => !v)} className={cn("rounded-full px-4 py-2 text-sm", auditEnabled ? "bg-white text-zinc-950" : "border border-white/10 bg-white/[0.03] text-zinc-300")}>
          {auditEnabled ? "Audit enabled" : "Audit disabled"}
        </button>
        <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
          {auditEnabled
            ? "Trusted reviewers can see scoped answer lineage and permission logic without getting the raw sensitive archive."
            : "Disclosure is disabled. Sensitive room material stays operator-only."}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "analytics") {
    return (
      <MiniPanel side="Analytics" title="Analytics Pulse" compact={compact}>
        <div className="space-y-5">
          <ProgressBar label="7-day engagement" value={87} />
          <ProgressBar label="Paid room retention" value={79} />
          <ProgressBar label="New member activation" value={83} />
          <ProgressBar label="Query satisfaction" value={95} />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "crosschain") {
    return (
      <MiniPanel side="Zeta" title="Universal Access Flow" compact={compact}>
        <div className="grid gap-3 md:grid-cols-4">
          {["User enters", "Embassy access request", "Premium room confirmed", "Main app unlocked"].map((item, idx) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-emerald-300">0{idx + 1}</div>
              <div className="mt-2 text-sm text-white">{item}</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "btc") {
    return (
      <MiniPanel side="Zeta" title="BTC Access Preview" compact={compact}>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Price" value="$9" />
          <StatCard label="Access window" value="30 days" />
          <StatCard label="Status" value="Mainnet-ready preview" />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "support") {
    return (
      <MiniPanel side="Team" title="Support Brain" compact={compact}>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Open tickets" value="248" />
          <StatCard label="Deflected" value="71%" />
          <StatCard label="Avg. resolution" value="6m" />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "research") {
    return (
      <MiniPanel side="Core" title="Research Room" compact={compact}>
        <div className="grid gap-4 md:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
            Embassy retrieves from reports, interviews, and operator memos while keeping source scope aligned to the chosen room.
          </div>
          <div className="space-y-3">
            {["Quarterly strategy memo", "Member interviews", "Research pack", "Operator briefing"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
            ))}
          </div>
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "health") {
    return (
      <MiniPanel side="Analytics" title="Community Health Meter" compact={compact}>
        <div className="space-y-5">
          <ProgressBar label="Freshness" value={92} />
          <ProgressBar label="Member energy" value={78} />
          <ProgressBar label="Knowledge clarity" value={90} />
          <ProgressBar label="Churn resilience" value={73} />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "onboarding") {
    return (
      <MiniPanel side="Community" title="Member Onboarding" compact={compact}>
        <div className="grid gap-3 md:grid-cols-4">
          {["Join", "Learn the culture", "Unlock premium rooms", "Become an operator"].map((item, idx) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-emerald-300">0{idx + 1}</div>
              <div className="mt-2 text-sm text-white">{item}</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "lore") {
    return (
      <MiniPanel side="Community" title="Lore Explorer" compact={compact}>
        <div className="grid gap-4 md:grid-cols-[0.4fr_0.6fr]">
          <div className="space-y-3">
            {["Origin story", "Core values", "Milestones", "Inside jokes", "Cultural notes"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
            ))}
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
            The Embassy lore layer turns years of community context into a premium structured memory system instead of leaving it buried in chat.
          </div>
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "creator") {
    return (
      <MiniPanel side="Creator" title="Creator Fan Pass" compact={compact}>
        <div className="grid gap-3 md:grid-cols-3">
          {["Free", "VIP", "Backstage"].map((item, idx) => (
            <div key={item} className={cn("rounded-2xl border p-4", idx === 1 ? "border-emerald-300/30 bg-emerald-300/10" : "border-white/10 bg-white/[0.03]") }>
              <div className="text-sm font-semibold text-white">{item}</div>
              <div className="mt-2 text-xs leading-6 text-zinc-400">Premium intelligence access tier</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "digest") {
    return (
      <MiniPanel side="Community" title="Digest Generator" compact={compact}>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Daily digest" value="32 highlights" />
          <StatCard label="Weekly board" value="6 strategic arcs" />
          <StatCard label="Event recap" value="19 live moments" />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "moderation") {
    return (
      <MiniPanel side="Community" title="Moderator Console" compact={compact}>
        <div className="space-y-5">
          <ProgressBar label="Risk coverage" value={89} />
          <ProgressBar label="Private room enforcement" value={94} />
          <ProgressBar label="Sensitive prompt detection" value={83} />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "sponsor") {
    return (
      <MiniPanel side="Monetization" title="Sponsor Studio" compact={compact}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">A sponsor-safe room can underwrite access while keeping sensitive memory protected.</div>
          <StatCard label="Projected sponsor value" value="$18.4k" />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "timeline") {
    return (
      <MiniPanel side="Team" title="Incident Timeline" compact={compact}>
        <div className="space-y-3">
          {["09:10 — confusion spike detected", "09:18 — Embassy answered 71 repeated prompts", "09:26 — operator memo inserted", "09:41 — digest pushed to premium room"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "splits") {
    return (
      <MiniPanel side="Monetization" title="Revenue Split Engine" compact={compact}>
        <div className="grid gap-4 md:grid-cols-4">
          {[["Creator", "60%"], ["Operators", "20%"], ["Treasury", "15%"], ["Protocol", "5%"]].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "events") {
    return (
      <MiniPanel side="Creator" title="Live Event Embassy" compact={compact}>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Attendee room" value="Open" />
          <StatCard label="Speaker memory" value="Loaded" />
          <StatCard label="Recap mode" value="Scheduled" />
        </div>
      </MiniPanel>
    );
  }

  if (demoId === "broadcast") {
    return (
      <MiniPanel side="Team" title="Broadcast Studio" compact={compact}>
        <div className="grid gap-4 md:grid-cols-[0.6fr_0.4fr]">
          <textarea defaultValue="Today we launched the premium Embassy room, activated operator review mode, and published the latest digest." className="min-h-[150px] w-full rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none" />
          <div className="space-y-3">
            {["Push to public room", "Push to premium room", "Append to digest", "Mirror to event page"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
            ))}
          </div>
        </div>
      </MiniPanel>
    );
  }

  return (
    <MiniPanel side="Main App" title="Embassy Demo Finder" compact={compact}>
      <div className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search demo modules"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none"
          />
        </div>
        <div className="max-h-[360px] space-y-2 overflow-auto pr-1">
          {filteredDemos.map(([id, title]) => (
            <div key={id} className={cn("rounded-2xl border px-4 py-3 text-sm", id === demoId ? "border-emerald-300/30 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-300")}>
              {title}
            </div>
          ))}
        </div>
      </div>
    </MiniPanel>
  );
}

function MainApp() {
  const [activeDemo, setActiveDemo] = useState("query");
  const [appMode, setAppMode] = useState("Operator");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(demoCards.map(([, , c]) => c)))];

  const filteredDemos = useMemo(() => {
    const q = search.toLowerCase();
    return demoCards.filter(([, title, cat, , blurb]) => {
      const byCategory = category === "All" || cat === category;
      const bySearch = !q || title.toLowerCase().includes(q) || cat.toLowerCase().includes(q) || blurb.toLowerCase().includes(q);
      return byCategory && bySearch;
    });
  }, [search, category]);

  return (
    <Section>
      <Panel className="overflow-hidden p-2">
        <div className="grid min-h-[860px] gap-0 lg:grid-cols-[280px_1fr]">
          <div className={cn("border-b border-white/10 bg-[#071018] p-4 lg:border-b-0 lg:border-r", mobileOpen ? "block" : "hidden lg:block")}>
            <div className="flex items-center justify-between lg:block">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Embassy OS</div>
                <div className="mt-2 text-2xl font-semibold text-white">Main App</div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="lg:hidden">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-2">
              {[
                [LayoutDashboard, "Overview"],
                [Brain, "Embassy Studio"],
                [Database, "Vault Designer"],
                [CircleDollarSign, "Monetization"],
                [Shield, "Trust Layer"],
                [BarChart3, "Analytics"],
                [Network, "Universal Access"],
                [Workflow, "Operator Flows"],
              ].map(([Icon, label], idx) => (
                <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", idx === 1 ? "bg-white text-zinc-950" : "text-zinc-300 hover:bg-white/[0.04]")}>
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Mode</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Operator", "Creator", "Member", "Sponsor", "Mainnet"].map((item) => (
                  <button key={item} onClick={() => setAppMode(item)} className={cn("rounded-full px-3 py-2 text-xs font-medium", appMode === item ? "bg-white text-zinc-950" : "border border-white/10 bg-white/[0.03] text-zinc-300")}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-sm text-zinc-400">Current mode: <span className="font-medium text-white">{appMode}</span></div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between lg:hidden">
              <button onClick={() => setMobileOpen(true)} className="rounded-full border border-white/10 p-2">
                <Menu className="h-5 w-5" />
              </button>
              <div className="text-sm font-medium text-zinc-400">Embassy OS / {appMode}</div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_400px]">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  {[["Embassy score", "99.1"], ["Live rooms", "312"], ["Paid conversion", "28.4%"], ["Mainnet posture", "Ready"]].map(([label, value]) => (
                    <StatCard key={label} label={label} value={value} />
                  ))}
                </div>

                <Panel className="p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search demo modules"
                        className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none"
                      />
                    </div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none">
                      {categories.map((item) => (
                        <option key={item} className="bg-[#071018]">{item}</option>
                      ))}
                    </select>
                    <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950">Go live</button>
                  </div>
                </Panel>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredDemos.map(([id, title, categoryLabel, Icon, blurb]) => (
                    <button
                      key={id}
                      onClick={() => setActiveDemo(id)}
                      className={cn(
                        "rounded-[24px] border p-5 text-left transition-all",
                        activeDemo === id
                          ? "border-emerald-300/30 bg-emerald-300/10"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", activeDemo === id ? "bg-white text-zinc-950" : "bg-white/[0.06] text-white")}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">{categoryLabel}</div>
                      </div>
                      <div className="mt-4 text-base font-semibold text-white">{title}</div>
                      <div className="mt-2 text-sm leading-6 text-zinc-400">{blurb}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <DemoRenderer demoId={activeDemo} />
                <Panel className="p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Performance board</div>
                  <div className="mt-4 space-y-4">
                    <ProgressBar label="Visual confidence" value={97} />
                    <ProgressBar label="Demo completeness" value={96} />
                    <ProgressBar label="Operator usability" value={89} />
                    <ProgressBar label="Main app readiness" value={84} />
                  </div>
                </Panel>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Section>
  );
}

export default function Page() {
  const [view, setView] = useState("prelanding");
  const [activeDemo, setActiveDemo] = useState("query");

  return (
    <Shell>
      <Nav view={view} setView={setView} />

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {view === "prelanding" && <PreLanding setView={setView} />}
          {view === "landing" && <Landing setView={setView} activeDemo={activeDemo} setActiveDemo={setActiveDemo} />}
          {view === "app" && <MainApp />}
        </motion.div>
      </AnimatePresence>

      <Section>
        <Panel className="p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>
                <Command className="h-3.5 w-3.5" /> Final Surface
              </Eyebrow>
              <div className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Mushee Embassy only. Pre-landing. Landing. Main app.
              </div>
              <div className="mt-4 max-w-2xl text-sm leading-8 text-zinc-400 md:text-base">
                The flow is now clean and aligned to your brief: no copied site naming, no extra fake homepage sections, and no reference-brand clutter.
                Just a premium Embassy shell with a real demo environment behind it.
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [Rocket, "Pre-landing entry"],
                [Sparkles, "Landing + 24 demos"],
                [LayoutDashboard, "Main app dashboard"],
                [CheckCircle2, "Submitted state"],
              ].map(([Icon, label]) => (
                <Panel key={label} className="p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">{label}</div>
                </Panel>
              ))}
            </div>
          </div>
        </Panel>
      </Section>
    </Shell>
  );
}
