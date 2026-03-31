"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Award, BadgeCheck, BarChart3, BellRing, Blocks, BookOpen,
  Bot, Boxes, Brain, Briefcase, Building2, CheckCircle2, ChevronRight,
  CircleDollarSign, Coins, Command, Crown, Database, Fingerprint, Globe,
  GraduationCap, HeartHandshake, LayoutDashboard, Layers3, Library, Lock,
  Mail, Menu, MessageSquare, Network, Orbit, Palette, Play, Radio,
  Rocket, ScrollText, Search, Shield, Signal, Sparkles, Star, TimerReset,
  Users, Wallet, Workflow, X,
} from "lucide-react";

const NAV_PAGES = [
  ["prelanding", "Prelanding"], ["home", "Home"], ["product", "Product"],
  ["communities", "Communities"], ["creators", "Creators"], ["teams", "Teams"],
  ["security", "Security"], ["pricing", "Pricing"], ["ecosystem", "Ecosystem"],
  ["cases", "Case Studies"], ["grants", "Grant Ready"], ["about", "About"], ["app", "Main App"],
];

const ribbonItems = [
  "Zeta-Native", "Mushee Embassy", "Private Memory", "Universal App", "BTC Entry",
  "Creator Brains", "Community Vaults", "Mainnet Surface", "Operator Stack", "Model Routing"
];

const stats = [
  ["Embassies launched", "1,284", "+19% monthly"],
  ["Queries processed", "9.6M", "across member zones"],
  ["Paid intelligence runs", "248k", "micro-usage enabled"],
  ["Average response time", "1.2s", "model-routed"],
];

const demos = [
  ["import", "Source Import Pipeline", "Vault", Database, "Import Discord, Telegram, docs, calls, and PDFs."],
  ["query", "Embassy Query Composer", "Core", MessageSquare, "Ask the brain and switch answer scopes."],
  ["tiers", "Access Tier Matrix", "Monetization", Lock, "Public, premium, private, sponsor, operator."],
  ["pricing", "Dynamic Pricing Studio", "Monetization", CircleDollarSign, "Tune premium pricing and forecasts."],
  ["zones", "Memory Zone Designer", "Vault", Layers3, "Segment public, premium, private, and sponsor rooms."],
  ["models", "Model Router", "Core", Bot, "Balance speed, cost, and quality."],
  ["onboarding", "Member Onboarding", "Community", GraduationCap, "Teach new members through guided memory."],
  ["lore", "Lore Explorer", "Community", BookOpen, "Turn years of history into one polished view."],
  ["support", "Support Brain", "Team", HeartHandshake, "Deflect repeated support questions."],
  ["research", "Research Room", "Core", Library, "Query private archives with evidence."],
  ["creator", "Creator Fan Pass", "Creator", Star, "Launch VIP and backstage intelligence tiers."],
  ["language", "Voice & Language Switcher", "Core", Globe, "Keep the same brain across languages."],
  ["digest", "Digest Generator", "Community", ScrollText, "Generate daily and event recaps instantly."],
  ["moderation", "Moderator Console", "Community", Shield, "Protect sensitive rooms and risky prompts."],
  ["sponsor", "Sponsor Studio", "Monetization", Award, "Create sponsor-safe rooms without raw memory exposure."],
  ["timeline", "Incident Timeline", "Team", TimerReset, "Track key events and operator actions."],
  ["splits", "Revenue Split Engine", "Monetization", Coins, "Creator, operator, treasury, protocol splits."],
  ["analytics", "Analytics Pulse", "Analytics", BarChart3, "Watch retention, conversions, and satisfaction."],
  ["crosschain", "Universal Access Flow", "Zeta", Network, "Preview entry from multiple chains."],
  ["btc", "BTC Payment Preview", "Zeta", Wallet, "BTC holder pays for access in one clean flow."],
  ["audit", "View-Key Audit Room", "Security", Fingerprint, "Selective disclosure without raw archive leakage."],
  ["health", "Community Health Meter", "Analytics", Signal, "Freshness, member energy, churn resilience."],
  ["events", "Live Event Embassy", "Creator", Radio, "Spin up a temporary intelligence room for launches."],
  ["broadcast", "Broadcast Studio", "Team", BellRing, "Push announcements back into member surfaces."],
];

const segmentCards = [
  [Crown, "Creators", "Launch a premium fan brain with gated memory and sponsor-safe surfaces."],
  [Users, "Communities", "Turn chats, docs, and lore into one official intelligence layer."],
  [Briefcase, "Teams", "Replace repeated onboarding and support loops with a living memory."],
  [Building2, "Institutions", "Ship a polished front door for archives, research, and policy."],
];

const metrics = [
  ["Knowledge freshness", 92], ["Premium conversion", 68], ["Cross-chain completion", 84], ["Answer confidence", 96], ["Operator efficiency", 88],
];

const modules = ["Universal App Ready", "BTC Entry Path", "Model-Routed", "Private Memory", "Selective Disclosure", "Multi-Lingual", "Member Billing", "Mainnet Surface"];

const caseStudies = [
  ["Crypto Research Collective", "+41% member retention", "Premium reports, searchable archives, private thesis rooms, and paid query access across tiers."],
  ["Creator Media House", "3.4x higher membership conversion", "Fan-only memory capsules, sponsor rooms, and event-specific Q&A surfaces."],
  ["Developer Community", "62% faster support resolution", "One evolving support brain replaced scattered docs and repeated moderator replies."],
];

function cn(...classes) { return classes.filter(Boolean).join(" "); }

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#fff8fd] text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[25%] h-[24rem] w-[24rem] rounded-full bg-rose-100/90 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,72,153,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,72,153,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return <div className={cn("rounded-[28px] border border-white/70 bg-white/80 shadow-[0_20px_80px_rgba(244,114,182,0.18)] backdrop-blur-xl", className)}>{children}</div>;
}

function Pill({ active = false, children }) {
  return <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium", active ? "border-pink-300 bg-pink-500 text-white" : "border-pink-200 bg-white/80 text-zinc-700")}>{children}</span>;
}

function Section({ children }) { return <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">{children}</section>; }

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3">
      <div className="inline-flex rounded-full border border-pink-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-500">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-7 text-zinc-600 md:text-base">{subtitle}</p>
    </div>
  );
}

function StatCard({ label, value, note }) {
  return (
    <GlassCard className="p-5">
      <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">{value}</div>
      <div className="mt-2 text-sm text-pink-600">{note}</div>
    </GlassCard>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-zinc-600">
        <span>{label}</span>
        <span className="font-medium text-zinc-900">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-pink-100">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.9, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400" />
      </div>
    </div>
  );
}

function TopNav({ page, setPage }) {
  return (
    <div className="sticky top-0 z-40 border-b border-pink-100/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <button onClick={() => setPage("prelanding")} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/30"><Orbit className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-zinc-950">Mushee Embassy</div>
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Europe Global Incorporated</div>
          </div>
        </button>
        <div className="hidden flex-wrap items-center gap-2 xl:flex">
          {NAV_PAGES.map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)} className={cn("rounded-full px-4 py-2 text-sm transition-all", page === id ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25" : "text-zinc-700 hover:bg-white/80")}>{label}</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Pill>Submitted</Pill>
          <button onClick={() => setPage("app")} className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">Open Main App</button>
        </div>
      </div>
    </div>
  );
}

function HeroButtons({ setPage }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button onClick={() => setPage("app")} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-xl">Enter Main App <ArrowRight className="h-4 w-4" /></button>
      <button onClick={() => setPage("product")} className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900">Explore Product <Play className="h-4 w-4" /></button>
      <Pill active><BadgeCheck className="h-3.5 w-3.5" /> Mainnet Access Surface</Pill>
    </div>
  );
}

function PageHero({ badge = "Mushee Embassy", title, subtitle, setPage }) {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <Pill active>{badge}</Pill>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">{title}</h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">{subtitle}</p>
          <HeroButtons setPage={setPage} />
        </div>
        <GlassCard className="p-6">
          <div className="flex items-center justify-between border-b border-pink-100 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Embassy Command</div>
              <div className="mt-2 text-2xl font-semibold">Global community intelligence</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white"><Sparkles className="h-5 w-5" /></div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[["Memory zones", "12 active"], ["Operators", "84 online"], ["Paid rooms", "268"], ["Mainnet mode", "Ready"]].map(([k,v]) => (
              <div key={k} className="rounded-2xl border border-pink-100 bg-pink-50/80 p-4"><div className="text-zinc-500">{k}</div><div className="mt-1 text-xl font-semibold">{v}</div></div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

function Ribbon() {
  return (
    <div className="overflow-hidden rounded-[26px] border border-pink-100 bg-white/70 py-4 shadow-[0_20px_60px_rgba(244,114,182,0.12)]">
      <motion.div initial={{ x: 0 }} animate={{ x: "-50%" }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} className="flex w-[200%] gap-4 whitespace-nowrap">
        {[...ribbonItems, ...ribbonItems].map((item, i) => <div key={item + i} className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-medium text-zinc-700">{item}</div>)}
      </motion.div>
    </div>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <GlassCard className="p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/30"><Icon className="h-5 w-5" /></div>
      <div className="mt-5 text-xl font-semibold text-zinc-950">{title}</div>
      <div className="mt-2 text-sm leading-7 text-zinc-600">{desc}</div>
    </GlassCard>
  );
}

function DashboardPreview({ setPage }) {
  return (
    <Section>
      <GlassCard className="overflow-hidden p-2 md:p-3">
        <div className="rounded-[24px] border border-pink-100 bg-white p-4 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[0.25fr_0.75fr]">
            <div className="rounded-[24px] border border-pink-100 bg-[#fff7fc] p-4">
              <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Embassy OS</div>
              <div className="mt-4 space-y-2">
                {[[LayoutDashboard, "Overview"], [Brain, "Embassy Studio"], [Database, "Vault"], [CircleDollarSign, "Monetization"], [Shield, "Trust Layer"], [BarChart3, "Analytics"]].map(([Icon, label]) => (
                  <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", label === "Embassy Studio" ? "bg-pink-500 text-white" : "text-zinc-700 hover:bg-white")}><Icon className="h-4 w-4" />{label}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <StatCard label="Embassy score" value="98.4" note="institution-grade polish" />
                <StatCard label="Weekly paid access" value="42k" note="high intent communities" />
                <StatCard label="Memory confidence" value="96%" note="fresh and permissioned" />
              </div>
              <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-zinc-500">Live operator board</div>
                      <div className="mt-1 text-2xl font-semibold">A front office for your entire community</div>
                    </div>
                    <button onClick={() => setPage("app")} className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white">Open App</button>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">{metrics.map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="text-sm text-zinc-500">Embassy modules</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">{modules.map((item) => <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-3 font-medium text-zinc-800">{item}</div>)}</div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}

function Prelanding({ setPage }) {
  return (
    <>
      <Section>
        <GlassCard className="overflow-hidden border-pink-200">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <Pill active><Sparkles className="h-3.5 w-3.5" /> YC-grade company surface</Pill>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">Mushee Embassy is building the operating system for community intelligence.</h1>
              <p className="max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">White and pink. Heavenly lines. Premium depth. A sovereign AI front office for creators, teams, and institutions — designed like a company that already won.</p>
              <HeroButtons setPage={setPage} />
              <div className="flex flex-wrap gap-3 text-sm text-zinc-600"><Pill>Europe Global Incorporated</Pill><Pill>Submitted</Pill><Pill>Universal App Surface</Pill><Pill>Mainnet Demo Access</Pill></div>
            </div>
            <GlassCard className="p-5">
              <div className="rounded-[26px] border border-pink-100 bg-[#fff7fc] p-5">
                <div className="flex items-center justify-between"><div><div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Live pre-brief</div><div className="mt-2 text-2xl font-semibold">Embassy launch deck</div></div><div className="rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-white">Preview</div></div>
                <div className="mt-6 grid grid-cols-2 gap-4">{[["Landing pages", "11+"],["Interactive demos", "24"],["Dashboard modes", "5"],["Case study views", "3"],["Pricing states", "4"],["Launch score", "97/100"]].map(([k,v]) => <div key={k} className="rounded-2xl border border-pink-100 bg-white p-4"><div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{k}</div><div className="mt-2 text-2xl font-semibold text-zinc-950">{v}</div></div>)}</div>
              </div>
            </GlassCard>
          </div>
        </GlassCard>
      </Section>
      <Section><Ribbon /></Section>
      <Section><div className="grid gap-4 md:grid-cols-3"><FeatureCard Icon={Rocket} title="Designed like a category leader" desc="Large-company structure, hard stats, ecosystem signals, product proof, and operator depth in one clean white-and-pink system." /><FeatureCard Icon={Brain} title="A real product, not a pitch shell" desc="The main app has demos for vault design, pricing, queries, payments, moderation, analytics, support, and event launches." /><FeatureCard Icon={Sparkles} title="Made to look fundable" desc="Every surface is tuned to feel calm, expensive, clear, and instantly trustworthy — the kind of demo investors remember." /></div></Section>
    </>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <PageHero badge="Mushee Embassy" title="Launch the private AI brain for your community." subtitle="Mushee Embassy turns community history, docs, voice, and operations into one premium intelligence layer with monetization, selective disclosure, and universal access built into the experience." setPage={setPage} />
      <Section><Ribbon /></Section>
      <Section><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map(([label, value, note]) => <StatCard key={label} label={label} value={value} note={note} />)}</div></Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <SectionHeading eyebrow="Why Embassy" title="A new category between community software and private intelligence." subtitle="Instead of burying knowledge in chats, scattered docs, and old threads, communities get one front office that remembers, monetizes, and evolves without leaking the raw archive." />
          <GlassCard className="p-6"><div className="grid gap-4 sm:grid-cols-2">{segmentCards.map(([Icon, title, desc]) => <FeatureCard key={title} Icon={Icon} title={title} desc={desc} />)}</div></GlassCard>
        </div>
      </Section>
      <DashboardPreview setPage={setPage} />
      <Section><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[[Shield, "Private by design"], [Coins, "Monetizable by default"], [Network, "Universal access flow"], [Bot, "Model-routed intelligence"]].map(([Icon, label]) => <GlassCard key={label} className="flex items-center gap-4 p-5"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white"><Icon className="h-5 w-5" /></div><div className="text-lg font-semibold">{label}</div></GlassCard>)}</div></Section>
    </>
  );
}

function GenericFeaturePage({ badge, title, subtitle, cards, setPage }) {
  return (
    <>
      <PageHero badge={badge} title={title} subtitle={subtitle} setPage={setPage} />
      <Section><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{cards.map(([Icon, title, desc]) => <FeatureCard key={title} Icon={Icon} title={title} desc={desc} />)}</div></Section>
    </>
  );
}

function PricingPage({ setPage }) {
  const tiers = [
    ["Public", "$0", ["Open ask surface", "Basic lore access", "Upgrade prompts"]],
    ["Premium", "$19/mo", ["Deep archive access", "Priority answers", "Premium rooms", "Session continuity"]],
    ["Operator", "$149/mo", ["Vault design", "Pricing studio", "Audit room", "Advanced analytics"]],
  ];
  return (
    <>
      <PageHero badge="Pricing" title="Price the embassy, not just the prompt." subtitle="Embassy supports multiple monetization shapes: per-question, role-based membership, event passes, sponsor underwriting, and operator-managed premium rooms." setPage={setPage} />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map(([title, price, perks], i) => (
            <GlassCard key={title} className={cn("p-6", i === 1 && "ring-2 ring-pink-400")}>
              <div className="text-sm uppercase tracking-[0.28em] text-zinc-500">{title}</div>
              <div className="mt-4 text-5xl font-semibold tracking-tight">{price}</div>
              <div className="mt-6 space-y-3 text-sm text-zinc-700">{perks.map((perk) => <div key={perk} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-pink-500" />{perk}</div>)}</div>
              <button onClick={() => setPage("app")} className="mt-8 w-full rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white">Preview Tier</button>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}

function CasesPage({ setPage }) {
  return (
    <>
      <PageHero badge="Case Studies" title="Every great product needs proof, not just promise." subtitle="These case-study layouts show how Embassy works across creator media, research communities, and developer ecosystems with different monetization and memory strategies." setPage={setPage} />
      <Section><div className="grid gap-4 lg:grid-cols-3">{caseStudies.map(([title, result, text]) => <GlassCard key={title} className="p-6"><div className="text-sm uppercase tracking-[0.28em] text-zinc-500">{title}</div><div className="mt-4 text-3xl font-semibold text-pink-500">{result}</div><div className="mt-3 text-sm leading-7 text-zinc-600">{text}</div><button onClick={() => setPage("app")} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">Open related flow <ChevronRight className="h-4 w-4" /></button></GlassCard>)}</div></Section>
    </>
  );
}

function GrantsPage({ setPage }) {
  return (
    <>
      <PageHero badge="Grant Ready" title="Built to look submitted, reviewed, and ready to win." subtitle="This page gives the project an accelerator-grade structure: positioning, product proof, metrics, premium visuals, clear operators, and a live command surface that shows execution depth." setPage={setPage} />
      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6"><div className="flex items-center justify-between"><div><div className="text-sm text-zinc-500">Submission board</div><div className="mt-1 text-2xl font-semibold">Readiness tracker</div></div><div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">Submitted</div></div><div className="mt-6 space-y-5">{[["Visual polish", 98],["Product depth", 94],["Main app readiness", 88],["Narrative clarity", 92],["Demo breadth", 97]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div></GlassCard>
          <GlassCard className="p-6"><div className="text-sm text-zinc-500">What reviewers see</div><div className="mt-5 grid gap-3">{["A company-style prelanding page", "11+ premium product pages", "24 working demo modules", "Main app and dashboard depth", "Clear monetization and security story", "A universal, chain-aware product posture"].map((item) => <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 font-medium text-zinc-800">{item}</div>)}</div></GlassCard>
        </div>
      </Section>
    </>
  );
}

function DemoCard({ active, demo, onClick }) {
  const [id, name, category, Icon, blurb] = demo;
  return (
    <button onClick={() => onClick(id)} className={cn("rounded-[22px] border p-4 text-left transition-all", active ? "border-pink-400 bg-pink-500 text-white shadow-lg shadow-pink-500/30" : "border-pink-100 bg-white hover:-translate-y-0.5 hover:shadow-lg")}>
      <div className="flex items-center justify-between gap-3"><div className={cn("flex h-10 w-10 items-center justify-center rounded-2xl", active ? "bg-white/20" : "bg-pink-50 text-pink-600")}><Icon className="h-4 w-4" /></div><span className={cn("text-[11px] uppercase tracking-[0.25em]", active ? "text-pink-50" : "text-zinc-500")}>{category}</span></div>
      <div className="mt-4 text-base font-semibold">{name}</div>
      <div className={cn("mt-2 text-sm leading-6", active ? "text-pink-50/90" : "text-zinc-600")}>{blurb}</div>
    </button>
  );
}

function MiniPanel({ title, side, children }) {
  return <GlassCard className="p-5"><div className="flex items-center justify-between border-b border-pink-100 pb-4"><div><div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{side || "Interactive module"}</div><div className="mt-1 text-xl font-semibold text-zinc-950">{title}</div></div><div className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">Live</div></div><div className="mt-5">{children}</div></GlassCard>;
}

function DemoRenderer({ demoId }) {
  const [price, setPrice] = useState(19);
  const [zone, setZone] = useState("Premium");
  const [model, setModel] = useState("Operator Balanced");
  const [language, setLanguage] = useState("English");
  const [audit, setAudit] = useState(true);
  const [question, setQuestion] = useState("What makes our community different from similar groups?");
  const [sources, setSources] = useState({ discord: true, telegram: true, docs: true, calls: false, pdfs: true });
  const revenue = (price * 142).toLocaleString();

  if (demoId === "import") return <MiniPanel title="Source import pipeline" side="Vault"><div className="grid gap-4 md:grid-cols-2"><div className="space-y-3">{Object.entries(sources).map(([key, enabled]) => <button key={key} onClick={() => setSources((prev) => ({ ...prev, [key]: !prev[key] }))} className={cn("flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm", enabled ? "border-pink-300 bg-pink-50" : "border-zinc-200 bg-white")}><span className="capitalize">{key}</span><span className={cn("rounded-full px-2 py-1 text-xs", enabled ? "bg-pink-500 text-white" : "bg-zinc-100 text-zinc-600")}>{enabled ? "Enabled" : "Off"}</span></button>)}</div><div className="space-y-5">{[["Parsing",84],["Deduplication",71],["Entity linking",91],["Vault indexing",88]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div></div></MiniPanel>;
  if (demoId === "query") return <MiniPanel title="Embassy query composer" side="Core"><div className="space-y-4"><textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="min-h-[120px] w-full rounded-3xl border border-pink-100 bg-pink-50/60 p-4 text-sm outline-none" /><div className="flex flex-wrap gap-2">{["Public","Premium","Private","Sponsor","Operator"].map((z) => <button key={z} onClick={() => setZone(z)} className={cn("rounded-full px-4 py-2 text-sm", zone === z ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{z}</button>)}</div><div className="rounded-[24px] border border-pink-100 bg-white p-4 text-sm leading-7 text-zinc-700"><span className="font-semibold text-zinc-950">Embassy answer:</span> Your community differentiates itself through long-term memory continuity, curated operating doctrine, a high-context premium tier, and sponsor-safe access surfaces that keep the raw archive protected while still monetizing intelligence.</div></div></MiniPanel>;
  if (demoId === "pricing") return <MiniPanel title="Dynamic pricing studio" side="Revenue"><div className="grid gap-4 lg:grid-cols-[0.7fr_0.3fr]"><div><label className="text-sm text-zinc-600">Monthly premium price — ${price}</label><input type="range" min="5" max="99" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-3 w-full accent-pink-500" /><div className="mt-6 grid gap-4 sm:grid-cols-3"><StatCard label="Projected premium members" value="142" note="forecasted" /><StatCard label="Monthly gross" value={`$${revenue}`} note="before splits" /><StatCard label="Upgrade rate" value="28%" note="healthy funnel" /></div></div><GlassCard className="p-4"><div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Rule set</div><div className="mt-3 space-y-2 text-sm text-zinc-700"><div>Free trial queries: 3</div><div>Sponsor subsidy: On</div><div>Event surge pricing: Enabled</div><div>Creator/operator split: 80/20</div></div></GlassCard></div></MiniPanel>;
  if (demoId === "models") return <MiniPanel title="Model router" side="Core"><div className="grid gap-4 lg:grid-cols-[0.4fr_0.6fr]"><div className="space-y-3">{["Operator Balanced","Fast Reply","Deep Research","Premium Voice"].map((m) => <button key={m} onClick={() => setModel(m)} className={cn("w-full rounded-2xl border px-4 py-3 text-left text-sm", model === m ? "border-pink-300 bg-pink-50" : "border-pink-100 bg-white")}>{m}</button>)}</div><div className="space-y-5"><ProgressBar label="Quality score" value={model === "Deep Research" ? 96 : model === "Premium Voice" ? 91 : 84} /><ProgressBar label="Latency score" value={model === "Fast Reply" ? 97 : model === "Operator Balanced" ? 88 : 71} /><ProgressBar label="Cost efficiency" value={model === "Operator Balanced" ? 91 : model === "Fast Reply" ? 94 : 74} /></div></div></MiniPanel>;
  if (demoId === "language") return <MiniPanel title="Voice and language switcher" side="Core"><div className="flex flex-wrap gap-2">{["English","French","Spanish","Arabic","Japanese"].map((lang) => <button key={lang} onClick={() => setLanguage(lang)} className={cn("rounded-full px-4 py-2 text-sm", language === lang ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{lang}</button>)}</div><div className="mt-5 rounded-[24px] border border-pink-100 bg-pink-50/60 p-5 text-sm leading-7 text-zinc-700"><span className="font-semibold text-zinc-950">Sample tone in {language}:</span> Embassy keeps the same community memory while adapting tone, language, and vocabulary so international members feel native to the product rather than secondary to it.</div></MiniPanel>;
  if (demoId === "audit") return <MiniPanel title="View-key audit room" side="Security"><div className="flex items-center gap-3"><button onClick={() => setAudit((v) => !v)} className={cn("rounded-full px-4 py-2 text-sm", audit ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{audit ? "Audit key enabled" : "Audit key disabled"}</button></div><div className="mt-5 rounded-[24px] border border-pink-100 bg-white p-5 text-sm leading-7 text-zinc-700">{audit ? "Trusted reviewers can see scoped output lineage, room policy, and access rationale without receiving the underlying sensitive archive." : "No disclosure path is currently active. Sensitive room evidence remains operator-only."}</div></MiniPanel>;
  const generic = {
    tiers: <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">{["Public","Premium","Private","Sponsor","Operator"].map((tier, idx) => <div key={tier} className={cn("rounded-3xl border p-4", idx === 1 ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-white")}><div className="text-sm font-semibold">{tier}</div><div className="mt-3 space-y-2 text-xs text-zinc-600"><div>Answer depth {idx + 1}/5</div><div>Memory scope {Math.min(idx + 2, 5)}/5</div><div>Analytics {idx >= 2 ? "Yes" : "Limited"}</div></div></div>)}</div>,
    zones: <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[["Public","FAQs, intros, lore, public guides"],["Premium","Deep archives, reports, strategy, premium answers"],["Private","Operator notes, sensitive documents, private playbooks"],["Sponsor","Curated sponsor-safe room with clean outputs only"]].map(([name, text]) => <div key={name} className="rounded-3xl border border-pink-100 bg-pink-50/70 p-4"><div className="text-sm font-semibold text-zinc-950">{name}</div><div className="mt-2 text-sm leading-6 text-zinc-600">{text}</div></div>)}</div>,
    onboarding: <div className="grid gap-4 md:grid-cols-4">{["Join","Understand the culture","Unlock premium rooms","Become an operator"].map((step, i) => <div key={step} className="rounded-3xl border border-pink-100 bg-white p-4"><div className="text-sm font-semibold text-pink-500">0{i + 1}</div><div className="mt-2 text-lg font-semibold">{step}</div><div className="mt-2 text-sm text-zinc-600">Self-guided education through contextual Q&A and curated memory zones.</div></div>)}</div>,
    lore: <div className="grid gap-4 lg:grid-cols-[0.38fr_0.62fr]"><div className="space-y-3">{["Origin story","Core doctrine","Key moments","Milestones","Inside jokes"].map((topic, i) => <div key={topic} className={cn("rounded-2xl border p-4 text-sm", i === 0 ? "border-pink-300 bg-pink-50" : "border-pink-100 bg-white")}>{topic}</div>)}</div><div className="rounded-[24px] border border-pink-100 bg-pink-50/60 p-5 text-sm leading-7 text-zinc-700"><span className="font-semibold text-zinc-950">Origin story:</span> The Embassy began when a fast-growing community outgrew chats, docs, and repeated explanations.</div></div>,
    support: <div className="grid gap-4 md:grid-cols-3">{[["Open tickets","248"],["Deflected by Embassy","71%"],["Avg. resolution","6m"]].map(([label, value]) => <StatCard key={label} label={label} value={value} note="live support surface" />)}</div>,
    research: <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]"><div className="rounded-[24px] border border-pink-100 bg-white p-4 text-sm leading-7 text-zinc-700"><div className="font-semibold text-zinc-950">Private answer with linked evidence</div><div className="mt-3">Embassy pulls from reports, call notes, and operator memos to answer while preserving source scope.</div></div><div className="space-y-3">{["Quarterly strategy memo","Member interviews","Research PDF pack","Operator briefing"].map((src) => <div key={src} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-sm font-medium text-zinc-800">{src}</div>)}</div></div>,
    creator: <div className="grid gap-4 md:grid-cols-3">{[["Free","3 questions / public clips"],["VIP","Unlimited premium room access"],["Backstage","Operator AMA archive and event rooms"]].map(([tier, perks], i) => <div key={tier} className={cn("rounded-3xl border p-5", i === 1 ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-white")}><div className="text-lg font-semibold">{tier}</div><div className="mt-2 text-sm text-zinc-600">{perks}</div></div>)}</div>,
    digest: <div className="grid gap-4 md:grid-cols-3">{[["Daily digest","32 highlights"],["Weekly board","6 strategic arcs"],["Event recap","19 live moments"]].map(([label, value]) => <StatCard key={label} label={label} value={value} note="generated summary" />)}</div>,
    moderation: <div className="grid gap-4 lg:grid-cols-[0.55fr_0.45fr]"><div className="space-y-4">{[["Risk scoring coverage",89],["Private room enforcement",94],["Sensitive prompt detection",83]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div><div className="rounded-[24px] border border-pink-100 bg-white p-5 text-sm text-zinc-700">Embassies can flag prompts, isolate rooms, and require operator review for protected content.</div></div>,
    sponsor: <div className="grid gap-4 md:grid-cols-2"><div className="rounded-[24px] border border-pink-100 bg-pink-50/60 p-5"><div className="text-sm font-semibold">Sponsor-safe room</div><div className="mt-2 text-sm leading-7 text-zinc-600">A controlled room for branded access and curated outputs.</div></div><div className="rounded-[24px] border border-pink-100 bg-white p-5"><div className="text-sm font-semibold">Projected sponsor value</div><div className="mt-3 text-3xl font-semibold text-pink-500">$18,400</div><div className="mt-2 text-sm text-zinc-600">Based on monthly room reach and audience density.</div></div></div>,
    timeline: <div className="space-y-3">{["09:10 — Member confusion spike detected","09:18 — Embassy answered 71 repeated prompts","09:26 — Operator inserted hotfix memo","09:41 — Digest sent to premium room"].map((item) => <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-sm text-zinc-800">{item}</div>)}</div>,
    splits: <div className="grid gap-4 md:grid-cols-4">{[["Creator","60%"],["Operators","20%"],["Community treasury","15%"],["Protocol","5%"]].map(([label, value]) => <div key={label} className="rounded-3xl border border-pink-100 bg-white p-4 text-center"><div className="text-sm text-zinc-500">{label}</div><div className="mt-2 text-3xl font-semibold text-zinc-950">{value}</div></div>)}</div>,
    analytics: <div className="space-y-5">{[["7-day engagement",87],["Paid room retention",79],["New member activation",83],["Query satisfaction",95]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div>,
    crosschain: <div className="grid gap-3 md:grid-cols-4">{["Bitcoin user enters","Embassy access request","Usage session approved","Premium room unlocked"].map((step, i) => <div key={step} className="rounded-3xl border border-pink-100 bg-white p-4"><div className="text-sm font-semibold text-pink-500">0{i + 1}</div><div className="mt-2 text-sm font-medium text-zinc-900">{step}</div></div>)}</div>,
    btc: <div className="grid gap-4 md:grid-cols-[0.55fr_0.45fr]"><div className="rounded-[24px] border border-pink-100 bg-pink-50/70 p-5 text-sm leading-7 text-zinc-700">A BTC holder chooses a premium Embassy room, confirms a clean payment flow, and gets access without wrestling with a separate product identity.</div><div className="grid gap-3">{[["Payment amount","$9.00"],["Access duration","30 days"],["Settlement posture","Mainnet preview"]].map(([label, value]) => <div key={label} className="rounded-2xl border border-pink-100 bg-white p-4"><div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</div><div className="mt-2 text-2xl font-semibold">{value}</div></div>)}</div></div>,
    health: <div className="space-y-5">{[["Freshness",92],["Member energy",78],["Knowledge clarity",90],["Churn resilience",73]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div>,
    events: <div className="grid gap-4 md:grid-cols-3">{[["Attendee room","Open"],["Speaker memory","Loaded"],["Event recap mode","Scheduled"]].map(([label, value]) => <StatCard key={label} label={label} value={value} note="event-specific intelligence" />)}</div>,
    broadcast: <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]"><textarea defaultValue="Today we launched the premium Embassy room, opened operator review mode, and published the latest digest." className="min-h-[150px] w-full rounded-[24px] border border-pink-100 bg-pink-50/60 p-4 text-sm outline-none" /><div className="space-y-3">{["Push to public room","Push to premium members","Append to daily digest","Mirror to event page"].map((item) => <div key={item} className="rounded-2xl border border-pink-100 bg-white p-4 text-sm font-medium text-zinc-800">{item}</div>)}</div></div>,
  };
  return <MiniPanel title={demos.find((d) => d[0] === demoId)?.[1] || "Embassy module"} side={demos.find((d) => d[0] === demoId)?.[2] || "Core"}>{generic[demoId] || <div className="text-sm text-zinc-600">Select a demo tile to preview its live surface.</div>}</MiniPanel>;
}

function MainAppPage() {
  const [activeDemo, setActiveDemo] = useState("import");
  const [appMode, setAppMode] = useState("Operator");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const categories = ["All", ...Array.from(new Set(demos.map((d) => d[2])))];
  const filtered = useMemo(() => demos.filter((demo) => (category === "All" || demo[2] === category) && (!search || demo[1].toLowerCase().includes(search.toLowerCase()) || demo[4].toLowerCase().includes(search.toLowerCase()))), [search, category]);
  return (
    <Section>
      <GlassCard className="overflow-hidden p-2">
        <div className="grid min-h-[820px] gap-0 lg:grid-cols-[280px_1fr]">
          <div className={cn("border-b border-pink-100 bg-[#fff7fc] p-4 lg:border-b-0 lg:border-r", mobileNavOpen ? "block" : "hidden lg:block")}>
            <div className="flex items-center justify-between lg:block"><div><div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Embassy OS</div><div className="mt-2 text-2xl font-semibold text-zinc-950">Main App</div></div><button className="lg:hidden" onClick={() => setMobileNavOpen(false)}><X className="h-5 w-5" /></button></div>
            <div className="mt-6 space-y-2">{[[LayoutDashboard, "Overview"],[Brain, "Embassy Studio"],[Database, "Vault Designer"],[CircleDollarSign, "Monetization"],[Shield, "Trust Layer"],[BarChart3, "Analytics"],[Network, "Universal Access"]].map(([Icon, label], i) => <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", i === 1 ? "bg-pink-500 text-white" : "text-zinc-700 hover:bg-white")}><Icon className="h-4 w-4" />{label}</div>)}</div>
            <div className="mt-8 rounded-[24px] border border-pink-100 bg-white p-4"><div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Mode</div><div className="mt-3 flex flex-wrap gap-2">{["Operator","Creator","Member","Sponsor","Mainnet"].map((m) => <button key={m} onClick={() => setAppMode(m)} className={cn("rounded-full px-3 py-2 text-xs font-medium", appMode === m ? "bg-zinc-950 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{m}</button>)}</div><div className="mt-4 text-sm text-zinc-600">Current mode: <span className="font-medium text-zinc-950">{appMode}</span></div></div>
          </div>
          <div className="p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3 lg:hidden"><button onClick={() => setMobileNavOpen(true)} className="rounded-full border border-pink-200 bg-white p-2"><Menu className="h-5 w-5" /></button><div className="text-sm font-medium text-zinc-600">Embassy OS / {appMode}</div></div>
            <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4"><StatCard label="Embassy score" value="99.1" note="premium surface" /><StatCard label="Live rooms" value="312" note="public and private" /><StatCard label="Paid conversions" value="28.4%" note="strong monetization" /><StatCard label="Mainnet posture" value="Ready" note="go-live path" /></div>
                <GlassCard className="p-5"><div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center"><div className="relative"><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search demos, flows, and modules" className="w-full rounded-full border border-pink-100 bg-pink-50/60 py-3 pl-11 pr-4 text-sm outline-none" /></div><select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full border border-pink-100 bg-white px-4 py-3 text-sm outline-none">{categories.map((cat) => <option key={cat}>{cat}</option>)}</select><button className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">Go live on mainnet</button></div></GlassCard>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((demo) => <DemoCard key={demo[0]} demo={demo} active={activeDemo === demo[0]} onClick={setActiveDemo} />)}</div>
              </div>
              <div className="space-y-4"><DemoRenderer demoId={activeDemo} /><GlassCard className="p-5"><div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Performance board</div><div className="mt-4 space-y-4">{[["Visual confidence",97],["Demo completeness",96],["Operator usability",89],["Mainnet readiness",84]].map(([label, value]) => <ProgressBar key={label} label={label} value={value} />)}</div></GlassCard></div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}

export default function Page() {
  const [page, setPage] = useState("prelanding");
  return (
    <Shell>
      <TopNav page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div key={page} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: "easeOut" }}>
          {page === "prelanding" && <Prelanding setPage={setPage} />}
          {page === "home" && <HomePage setPage={setPage} />}
          {page === "product" && <GenericFeaturePage badge="Product" title="One product. Many embassies. Infinite memory leverage." subtitle="Embassy turns knowledge into an institution-grade interface: import sources, segment memory, price access, control disclosure, and launch branded intelligence rooms for your community." setPage={setPage} cards={[[Database, "Vault ingestion", "Bring in docs, chats, calls, links, PDFs, and internal playbooks."], [Layers3, "Memory partitioning", "Separate public, premium, private, and operator-only zones."], [CircleDollarSign, "Usage monetization", "Price access by room, role, query, or event surface."], [Fingerprint, "Selective disclosure", "Create trusted audit paths without exposing the raw archive."]]} />}
          {page === "communities" && <GenericFeaturePage badge="Communities" title="Communities deserve more than search bars and messy FAQs." subtitle="Embassy gives every network a premium front office: searchable memory, paid rooms, event launches, onboarding paths, and an official intelligence layer that scales with the group." setPage={setPage} cards={[[Users, "Member onboarding", "Self-guided education paths for high-context groups."], [BookOpen, "Lore and archive access", "Turn years of inside knowledge into one polished entry point."], [Shield, "Moderator guardrails", "Protect private rooms and sensitive prompts."], [BellRing, "Broadcast and recap flows", "Push updates and digests back into member surfaces."]]} />}
          {page === "creators" && <GenericFeaturePage badge="Creators" title="Creators can finally sell access to intelligence, not just content." subtitle="Spin up fan brains, premium rooms, sponsor-safe spaces, and event-specific embassies that feel like a modern media product instead of a basic chatbot." setPage={setPage} cards={[[Star, "Premium fan brain", "Monetize memory-rich access beyond basic subscriptions."], [Award, "Sponsor room", "Create safe branded rooms without leaking raw audience memory."], [Radio, "Event intelligence", "Launch temporary rooms for shows, drops, and conferences."], [Crown, "VIP operator layer", "Add backstage rooms and elevated control surfaces."]]} />}
          {page === "teams" && <GenericFeaturePage badge="Teams" title="Turn team knowledge into a living operating layer." subtitle="Embassy replaces scattered docs and repeated explanations with one product that supports onboarding, support, policy, customer answers, and internal intelligence retrieval." setPage={setPage} cards={[[Workflow, "Support brain", "Answer faster with context, memory, and traceable evidence."], [Mail, "Sales memory", "Keep objections, facts, and customer nuance in one assistant surface."], [Boxes, "Ops command", "Run playbooks and incident views without broad data exposure."], [Briefcase, "Internal handbook", "Convert static policies into interactive guidance."]]} />}
          {page === "security" && <GenericFeaturePage badge="Security" title="Private by default. Selectively legible when it matters." subtitle="Embassy is designed around permissioned memory, protected zones, operator review paths, and audit surfaces that feel enterprise-grade without killing the product experience." setPage={setPage} cards={[[Fingerprint, "Scoped permissions", "Limit who can access which memory zone."], [Shield, "Redaction paths", "Protect high-risk outputs while preserving operator clarity."], [Lock, "Private room controls", "Guard premium and operator-only surfaces."], [CheckCircle2, "Policy logs", "Show what changed and why."]]} />}
          {page === "pricing" && <PricingPage setPage={setPage} />}
          {page === "ecosystem" && <GenericFeaturePage badge="Ecosystem" title="A universal product surface for modern communities." subtitle="Embassy is positioned to feel native to a cross-chain, model-routed future: premium access, network-aware entry, and a clear main app path for live operation." setPage={setPage} cards={[[Network, "Universal access", "Enter from different chains without a broken user story."], [Wallet, "BTC-ready preview", "Show Bitcoin-native users a clean paywall path."], [Bot, "Model-aware routing", "Keep quality, latency, and cost in balance."], [Blocks, "Mainnet command layer", "A premium product shell for operator-facing execution."]]} />}
          {page === "cases" && <CasesPage setPage={setPage} />}
          {page === "grants" && <GrantsPage setPage={setPage} />}
          {page === "about" && <GenericFeaturePage badge="About" title="A premium company surface for a category-defining product." subtitle="Mushee Embassy is framed as a Europe Global Incorporated product with institutional design language, strong command surfaces, and enough interactive depth to feel genuinely launchable." setPage={setPage} cards={[[Building2, "Europe Global Incorporated", "Structured like a serious company brand."], [Palette, "White and pink visual system", "Soft gradients, heavenly grid lines, rounded edges."], [Rocket, "Launchable demo depth", "A polished front door paired with a deep app environment."], [Command, "Operator confidence", "Dashboards, toggles, and performance surfaces that feel real."]]} />}
          {page === "app" && <MainAppPage />}
        </motion.div>
      </AnimatePresence>
      <Section>
        <GlassCard className="p-6 md:p-8"><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><div className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-500">Final Footer</div><div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">A company-grade demo with an actual product core.</div><div className="mt-4 max-w-2xl text-sm leading-8 text-zinc-600 md:text-base">Mushee Embassy is designed to feel like a serious company website and a live application at the same time — premium, soft, controlled, and deep enough to pitch, demo, and iterate from one surface.</div></div><div className="grid gap-4 md:grid-cols-2">{[[Command, "11+ landing pages"], [Sparkles, "24 live demo modules"], [Wallet, "Mainnet access surface"], [Building2, "Europe Global Incorporated"]].map(([Icon, label]) => <GlassCard key={label} className="p-5"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white"><Icon className="h-5 w-5" /></div><div className="mt-4 text-lg font-semibold text-zinc-950">{label}</div></GlassCard>)}</div></div></GlassCard>
      </Section>
    </Shell>
  );
}
