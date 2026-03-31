"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BellRing,
  Blocks,
  BookOpen,
  Bot,
  Boxes,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
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
  Mail,
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
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const NAV_PAGES = [
  ["prelanding", "Prelanding"],
  ["home", "Home"],
  ["product", "Product"],
  ["communities", "Communities"],
  ["creators", "Creators"],
  ["teams", "Teams"],
  ["security", "Security"],
  ["pricing", "Pricing"],
  ["ecosystem", "Ecosystem"],
  ["cases", "Case Studies"],
  ["grants", "Grant Ready"],
  ["about", "About"],
  ["app", "Main App"],
];

const PARTNERS = [
  "ZetaChain",
  "Mainnet Access",
  "BTC Entry",
  "Private Memory",
  "Universal Apps",
  "Operator Stack",
  "Community Vaults",
  "Member Billing",
  "Global Rooms",
  "Embassy OS",
];

const NETWORK_STATS = [
  ["Embassies launched", "1,284", "+19% monthly"],
  ["Queries processed", "9.6M", "across member zones"],
  ["Paid intelligence runs", "248k", "micro-usage enabled"],
  ["Average response time", "1.2s", "model-routed"],
];

const SECTION_METRICS = [
  ["Community freshness", 92],
  ["Premium conversion", 68],
  ["Cross-chain completion", 84],
  ["Answer confidence", 96],
  ["Operator efficiency", 88],
];

const SEGMENTS = [
  [Crown, "Creators", "Launch a premium fan brain with gated memory, event rooms, and sponsor-safe access."],
  [Users, "Communities", "Turn chat history, documents, and lore into one official intelligence front office."],
  [Briefcase, "Teams", "Replace repeated onboarding and support loops with one living operating layer."],
  [Building2, "Institutions", "Ship a polished public and private interface for archives, policy, and research."],
];

const VALUE_STACK = [
  [Blocks, "Universal entry", "Members can arrive through one clean product surface instead of fragmented flows."],
  [Brain, "Private intelligence", "Memory zones are structured to feel premium, useful, and controlled."],
  [CircleDollarSign, "Built-in monetization", "Charge for rooms, sessions, memberships, sponsors, or events."],
  [Shield, "Selective disclosure", "Give trusted reviewers visibility without exposing the raw archive broadly."],
  [Bot, "Model routing", "Switch quality, latency, and cost profiles without breaking the user experience."],
  [TrendingUp, "Operator analytics", "Track retention, knowledge freshness, conversions, and answer quality."],
];

const USE_CASES = [
  ["Creator media", "Membership brain, sponsor-safe rooms, backstage archives, launch events."],
  ["Research communities", "Private thesis vaults, premium rooms, operator notes, and live briefings."],
  ["Developer ecosystems", "Support brain, docs layer, release lore, onboarding concierge."],
  ["Institutions", "Policy room, multilingual knowledge access, public and private trust surfaces."],
];

const NEWS = [
  ["Launch", "Embassy operator board reaches 1.2s response time across premium rooms."],
  ["Use Case", "Creator House opens sponsor-backed intelligence rooms without exposing archive data."],
  ["Ecosystem", "BTC entry preview goes live for premium Embassy access."],
  ["Community", "Research collective crosses 40% retention lift using private knowledge rooms."],
];

const CASE_STUDIES = [
  ["Crypto Research Collective", "+41% member retention", "Premium reports, searchable archives, private thesis rooms, and paid query access across tiers."],
  ["Creator Media House", "3.4x higher membership conversion", "Fan-only memory capsules, sponsor rooms, and event-specific Q&A surfaces."],
  ["Developer Community", "62% faster support resolution", "One evolving support brain replaced scattered docs and repeated moderator replies."],
];

const DEMOS = [
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

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#fff8fd] text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute right-[-8%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[26%] h-[24rem] w-[24rem] rounded-full bg-rose-100/80 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={cn("rounded-[30px] border border-white/70 bg-white/80 shadow-[0_20px_80px_rgba(244,114,182,0.16)] backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}

function Pill({ children, active = false }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium", active ? "border-pink-300 bg-pink-500 text-white" : "border-pink-200 bg-white text-zinc-700")}>
      {children}
    </span>
  );
}

function Section({ children, className = "" }) {
  return <section className={cn("mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16", className)}>{children}</section>;
}

function Heading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn("space-y-3", center && "text-center") }>
      <div className={cn("inline-flex rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-500", center && "mx-auto")}>{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
      <p className={cn("text-sm leading-7 text-zinc-600 md:text-base", center ? "mx-auto max-w-3xl" : "max-w-3xl")}>{subtitle}</p>
    </div>
  );
}

function StatCard({ label, value, note }) {
  return (
    <Card className="p-5">
      <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">{value}</div>
      <div className="mt-2 text-sm text-pink-600">{note}</div>
    </Card>
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
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-400"
        />
      </div>
    </div>
  );
}

function TopNav({ page, setPage }) {
  return (
    <div className="sticky top-0 z-40 border-b border-pink-100/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <button onClick={() => setPage("prelanding")} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/25">
            <Orbit className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-zinc-950">Mushee Embassy</div>
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Europe Global Incorporated</div>
          </div>
        </button>

        <div className="hidden flex-wrap items-center gap-2 xl:flex">
          {NAV_PAGES.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setPage(id)}
              className={cn("rounded-full px-4 py-2 text-sm transition-all", page === id ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25" : "text-zinc-700 hover:bg-white")}
            >
              {label}
            </button>
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
      <button onClick={() => setPage("app")} className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-xl">
        Enter Main App <ArrowRight className="h-4 w-4" />
      </button>
      <button onClick={() => setPage("product")} className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900">
        Explore Product <Play className="h-4 w-4" />
      </button>
      <Pill active>
        <BadgeCheck className="h-3.5 w-3.5" /> Mainnet Access Surface
      </Pill>
    </div>
  );
}

function PageHero({ badge = "Mushee Embassy", title, subtitle, setPage }) {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-6">
          <Pill active>{badge}</Pill>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">{title}</h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">{subtitle}</p>
          <HeroButtons setPage={setPage} />
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between border-b border-pink-100 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Embassy Command</div>
              <div className="mt-2 text-2xl font-semibold">Global community intelligence</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              ["Memory zones", "12 active"],
              ["Operators", "84 online"],
              ["Paid rooms", "268"],
              ["Mainnet mode", "Ready"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-pink-100 bg-pink-50/80 p-4">
                <div className="text-zinc-500">{label}</div>
                <div className="mt-1 text-xl font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function PartnerRibbon() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-pink-100 bg-white/70 py-4 shadow-[0_20px_60px_rgba(244,114,182,0.12)]">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex w-[200%] gap-4 whitespace-nowrap"
      >
        {[...PARTNERS, ...PARTNERS].map((item, i) => (
          <div key={`${item}-${i}`} className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-medium text-zinc-700">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function LargeCompanyMetrics() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {NETWORK_STATS.map(([label, value, note]) => (
          <StatCard key={label} label={label} value={value} note={note} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <Card className="p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/30">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-5 text-xl font-semibold text-zinc-950">{title}</div>
      <div className="mt-2 text-sm leading-7 text-zinc-600">{desc}</div>
    </Card>
  );
}

function SystemsBoard({ setPage }) {
  return (
    <Section>
      <Card className="overflow-hidden p-3">
        <div className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr]">
          <div className="rounded-[26px] border border-pink-100 bg-[#fff7fc] p-4">
            <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Embassy OS</div>
            <div className="mt-4 space-y-2">
              {[
                [LayoutDashboard, "Overview"],
                [Brain, "Embassy Studio"],
                [Database, "Vault"],
                [CircleDollarSign, "Monetization"],
                [Shield, "Trust Layer"],
                [BarChart3, "Analytics"],
              ].map(([Icon, label], i) => (
                <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", i === 1 ? "bg-pink-500 text-white" : "text-zinc-700 hover:bg-white") }>
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard label="Embassy score" value="98.8" note="institution-grade polish" />
              <StatCard label="Weekly paid access" value="42k" note="high-intent members" />
              <StatCard label="Memory confidence" value="96%" note="fresh and permissioned" />
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
              <Card className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-zinc-500">Live operator board</div>
                    <div className="mt-1 text-2xl font-semibold">A front office for your entire community</div>
                  </div>
                  <button onClick={() => setPage("app")} className="rounded-full bg-zinc-950 px-4 py-2 text-sm text-white">Open App</button>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {SECTION_METRICS.map(([label, value]) => (
                    <ProgressBar key={label} label={label} value={value} />
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-sm text-zinc-500">Product modules</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Universal App Ready",
                    "BTC Entry Path",
                    "Model-Routed",
                    "Private Memory",
                    "Selective Disclosure",
                    "Multi-Lingual",
                    "Member Billing",
                    "Mainnet Surface",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-3 font-medium text-zinc-800">
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

function BuildersGrid() {
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Heading
          eyebrow="Built with support"
          title="A company-grade front door with a product-grade core."
          subtitle="This demo mirrors the kind of large-company structure users feel on major protocol sites: a massive hero, hard metrics, clear vertical sections, partner signals, product proof, and a serious operating dashboard."
        />
        <Card className="p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {SEGMENTS.map(([Icon, title, desc]) => (
              <FeatureCard key={title} Icon={Icon} title={title} desc={desc} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function ValueStack() {
  return (
    <Section>
      <Heading
        eyebrow="Why Embassy"
        title="A new category between community software and private intelligence."
        subtitle="Instead of burying knowledge in chats, docs, and old threads, Embassy turns memory into an operating asset that communities can organize, govern, and monetize."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {VALUE_STACK.map(([Icon, title, desc]) => (
          <FeatureCard key={title} Icon={Icon} title={title} desc={desc} />
        ))}
      </div>
    </Section>
  );
}

function UseCaseMatrix() {
  return (
    <Section>
      <Card className="p-6 md:p-8">
        <Heading
          eyebrow="Use cases"
          title="Structured like an internet-scale product company."
          subtitle="Embassy is presented like a modern category leader: one product core, many verticals, and a polished story for every audience from creators to institutions."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {USE_CASES.map(([title, desc], i) => (
            <div key={title} className={cn("rounded-[28px] border p-5", i === 0 ? "border-pink-300 bg-pink-50/80" : "border-pink-100 bg-white") }>
              <div className="text-xl font-semibold text-zinc-950">{title}</div>
              <div className="mt-2 text-sm leading-7 text-zinc-600">{desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}

function NewsSection() {
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Heading
          eyebrow="Latest news"
          title="A live narrative layer makes the company feel real."
          subtitle="The best protocol-style sites do not stop at a hero. They show motion, updates, launches, and proof that the product is alive."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {NEWS.map(([type, title]) => (
            <Card key={title} className="p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-pink-500">{type}</div>
              <div className="mt-3 text-lg font-semibold text-zinc-950">{title}</div>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                Explore update <ChevronRight className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FooterBand() {
  return (
    <Section>
      <Card className="p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-pink-500">Final footer</div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">A company-grade demo with a real product heart.</div>
            <div className="mt-4 max-w-2xl text-sm leading-8 text-zinc-600 md:text-base">
              Mushee Embassy is designed to feel like a serious company website and a live application at the same time — premium, soft, controlled, and deep enough to pitch, demo, and iterate from one surface.
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [Command, "11+ landing pages"],
              [Sparkles, "24 live demo modules"],
              [Wallet, "Mainnet access surface"],
              [Building2, "Europe Global Incorporated"],
            ].map(([Icon, label]) => (
              <Card key={label} className="p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-semibold text-zinc-950">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}

function LandingHome({ setPage }) {
  return (
    <>
      <PageHero
        title="Launch the private AI brain for your community."
        subtitle="Mushee Embassy turns community history, documents, voice, and operations into one premium intelligence layer with monetization, selective disclosure, and universal access built into the experience."
        setPage={setPage}
      />
      <Section className="pt-0">
        <PartnerRibbon />
      </Section>
      <LargeCompanyMetrics />
      <BuildersGrid />
      <SystemsBoard setPage={setPage} />
      <ValueStack />
      <UseCaseMatrix />
      <NewsSection />
    </>
  );
}

function Prelanding({ setPage }) {
  return (
    <>
      <Section>
        <Card className="overflow-hidden border-pink-200">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <Pill active>
                <Sparkles className="h-3.5 w-3.5" /> YC-grade company surface
              </Pill>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-7xl">
                Mushee Embassy is building the operating system for community intelligence.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">
                A prelanding page shaped like a serious protocol company: giant hero, hard metrics, partner proof, multi-page navigation, and a main app path that feels launchable.
              </p>
              <HeroButtons setPage={setPage} />
              <div className="flex flex-wrap gap-3 text-sm text-zinc-600">
                <Pill>Europe Global Incorporated</Pill>
                <Pill>Submitted</Pill>
                <Pill>Universal App Surface</Pill>
                <Pill>Mainnet Demo Access</Pill>
              </div>
            </div>

            <Card className="p-5">
              <div className="rounded-[26px] border border-pink-100 bg-[#fff7fc] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Live pre-brief</div>
                    <div className="mt-2 text-2xl font-semibold">Embassy launch deck</div>
                  </div>
                  <div className="rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-white">Preview</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    ["Landing pages", "11+"],
                    ["Interactive demos", "24"],
                    ["Dashboard modes", "5"],
                    ["Case study views", "3"],
                    ["Pricing states", "4"],
                    ["Launch score", "97/100"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-pink-100 bg-white p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
                      <div className="mt-2 text-2xl font-semibold text-zinc-950">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </Section>

      <Section className="pt-0">
        <PartnerRibbon />
      </Section>
      <LargeCompanyMetrics />
      <ValueStack />
    </>
  );
}

function ProductPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Product"
        title="One product. Many embassies. Infinite memory leverage."
        subtitle="Embassy turns knowledge into an institution-grade interface: import sources, segment memory, price access, control disclosure, and launch branded intelligence rooms for your community."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Database, "Vault ingestion", "Bring in docs, chats, calls, links, PDFs, and internal playbooks."],
            [Layers3, "Memory partitioning", "Separate public, premium, private, and operator-only knowledge zones."],
            [CircleDollarSign, "Usage monetization", "Price access by room, role, query, or event surface."],
            [Fingerprint, "Selective disclosure", "Create trusted audit paths without exposing the raw archive."],
          ].map(([Icon, title, desc]) => (
            <FeatureCard key={title} Icon={Icon} title={title} desc={desc} />
          ))}
        </div>
      </Section>
      <SystemsBoard setPage={setPage} />
    </>
  );
}

function CommunitiesPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Communities"
        title="Communities deserve more than search bars and messy FAQs."
        subtitle="Embassy gives every network a premium front office: searchable memory, paid rooms, event launches, onboarding paths, and an official intelligence layer that scales with the group."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Users, "Member onboarding"],
            [BookOpen, "Lore and archive access"],
            [Shield, "Moderator guardrails"],
            [BellRing, "Broadcast and recap flows"],
          ].map(([Icon, title]) => (
            <FeatureCard key={title} Icon={Icon} title={title} desc="Built for high-context groups that want one official interface for years of accumulated knowledge." />
          ))}
        </div>
      </Section>
    </>
  );
}

function CreatorsPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Creators"
        title="Creators can finally sell access to intelligence, not just content."
        subtitle="Spin up fan brains, premium rooms, sponsor-safe spaces, and event-specific embassies that feel like a modern media product instead of a basic chatbot."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm text-zinc-500">Revenue surfaces</div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Premium fan brain",
                "Event-only access",
                "Sponsor-backed room",
                "VIP operator layer",
                "Brand voice archive",
                "Creator Q&A memory",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 font-medium text-zinc-800">{item}</div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-zinc-500">Creator performance</div>
            <div className="mt-6 space-y-5">
              <ProgressBar label="Member upgrade intent" value={81} />
              <ProgressBar label="Repeat paid sessions" value={76} />
              <ProgressBar label="Sponsor room relevance" value={89} />
              <ProgressBar label="Brand voice consistency" value={94} />
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

function TeamsPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Teams"
        title="Turn team knowledge into a living operating layer."
        subtitle="Embassy replaces scattered docs and repeated explanations with one product that supports onboarding, support, policy, customer answers, and internal intelligence retrieval."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard Icon={Workflow} title="Support brain" desc="Let customer-facing teams answer quickly with context, memory, and traceable evidence." />
          <FeatureCard Icon={Mail} title="Sales memory" desc="Keep objection handling, product facts, and customer nuance in one premium assistant surface." />
          <FeatureCard Icon={Boxes} title="Ops command" desc="Run internal playbooks, incident views, and operator controls without exposing private data broadly." />
        </div>
      </Section>
    </>
  );
}

function SecurityPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Security"
        title="Private by default. Selectively legible when it matters."
        subtitle="Embassy is designed around permissioned memory, protected zones, operator review paths, and audit surfaces that feel enterprise-grade without killing the product experience."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-6">
            <div className="text-2xl font-semibold">Trust layer modules</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Scoped memory permissions",
                "Private room controls",
                "Selective disclosure views",
                "Operator policy logs",
                "Redaction trails",
                "High-risk prompt review",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-sm font-medium text-zinc-800">{item}</div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-zinc-500">Security and trust posture</div>
            <div className="mt-6 space-y-5">
              <ProgressBar label="Memory partition integrity" value={97} />
              <ProgressBar label="Operator review coverage" value={82} />
              <ProgressBar label="Disclosure precision" value={91} />
              <ProgressBar label="Sensitive source isolation" value={95} />
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

function PricingPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Price the embassy, not just the prompt."
        subtitle="Embassy supports multiple monetization shapes: per-question, role-based membership, event passes, sponsor underwriting, and operator-managed premium rooms."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Public", "$0", ["Open ask surface", "Basic lore access", "Upgrade prompts"]],
            ["Premium", "$19/mo", ["Deep archive access", "Priority answers", "Premium rooms", "Session continuity"]],
            ["Operator", "$149/mo", ["Vault design", "Pricing studio", "Audit room", "Advanced analytics"]],
          ].map(([title, price, perks], i) => (
            <Card key={title} className={cn("p-6", i === 1 && "ring-2 ring-pink-400") }>
              <div className="text-sm uppercase tracking-[0.28em] text-zinc-500">{title}</div>
              <div className="mt-4 text-5xl font-semibold tracking-tight">{price}</div>
              <div className="mt-6 space-y-3 text-sm text-zinc-700">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-pink-500" />
                    {perk}
                  </div>
                ))}
              </div>
              <button onClick={() => setPage("app")} className="mt-8 w-full rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white">Preview Tier</button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function EcosystemPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Ecosystem"
        title="A universal product surface for modern communities."
        subtitle="Embassy is positioned to feel native to a cross-chain, model-routed future: premium access, network-aware entry, and a clear main app path for live operation."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Network, "Universal access"],
            [Wallet, "BTC-ready preview"],
            [Bot, "Model-aware routing"],
            [Blocks, "Mainnet command layer"],
          ].map(([Icon, title]) => (
            <FeatureCard key={title} Icon={Icon} title={title} desc="Built to look and feel like a serious, chain-aware product rather than a small demo shell." />
          ))}
        </div>
      </Section>
      <NewsSection />
    </>
  );
}

function CasesPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Every great product needs proof, not just promise."
        subtitle="These case-study layouts show how Embassy works across creator media, research communities, and developer ecosystems with different monetization and memory strategies."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {CASE_STUDIES.map(([title, result, text]) => (
            <Card key={title} className="p-6">
              <div className="text-sm uppercase tracking-[0.28em] text-zinc-500">{title}</div>
              <div className="mt-4 text-3xl font-semibold text-pink-500">{result}</div>
              <div className="mt-3 text-sm leading-7 text-zinc-600">{text}</div>
              <button onClick={() => setPage("app")} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                Open related flow <ChevronRight className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function GrantsPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="Grant Ready"
        title="Built to look submitted, reviewed, and ready to win."
        subtitle="This page gives the project an accelerator-grade structure: positioning, product proof, metrics, premium visuals, clear operators, and a live command surface that shows execution depth."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-zinc-500">Submission board</div>
                <div className="mt-1 text-2xl font-semibold">Readiness tracker</div>
              </div>
              <div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">Submitted</div>
            </div>
            <div className="mt-6 space-y-5">
              <ProgressBar label="Visual polish" value={98} />
              <ProgressBar label="Product depth" value={94} />
              <ProgressBar label="Main app readiness" value={88} />
              <ProgressBar label="Narrative clarity" value={92} />
              <ProgressBar label="Demo breadth" value={97} />
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-zinc-500">What reviewers see</div>
            <div className="mt-5 grid gap-3">
              {[
                "A company-style prelanding page",
                "11+ premium product pages",
                "24 working demo modules",
                "Main app and dashboard depth",
                "Clear monetization and security story",
                "A universal, chain-aware product posture",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 font-medium text-zinc-800">{item}</div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

function AboutPage({ setPage }) {
  return (
    <>
      <PageHero
        badge="About"
        title="A premium company surface for a category-defining product."
        subtitle="Mushee Embassy is framed as a Europe Global Incorporated product with institutional design language, strong command surfaces, and enough interactive depth to feel genuinely launchable."
        setPage={setPage}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard Icon={Building2} title="Europe Global Incorporated" desc="Structured like a serious company brand with premium landing surfaces, ecosystem language, and product confidence." />
          <FeatureCard Icon={Sparkles} title="White and pink visual system" desc="Soft light gradients, heavenly grid lines, rounded edges, and calm high-trust typography throughout." />
          <FeatureCard Icon={Rocket} title="Launchable demo depth" desc="A polished front door paired with a deep app environment, so the product narrative and proof live together." />
        </div>
      </Section>
    </>
  );
}

function DemoCard({ demo, active, onClick }) {
  const Icon = demo[3];
  return (
    <button
      onClick={() => onClick(demo[0])}
      className={cn(
        "rounded-[24px] border p-4 text-left transition-all",
        active ? "border-pink-400 bg-pink-500 text-white shadow-lg shadow-pink-500/30" : "border-pink-100 bg-white hover:-translate-y-0.5 hover:shadow-lg"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-2xl", active ? "bg-white/20" : "bg-pink-50 text-pink-600") }>
          <Icon className="h-4 w-4" />
        </div>
        <span className={cn("text-[11px] uppercase tracking-[0.25em]", active ? "text-pink-50" : "text-zinc-500")}>{demo[2]}</span>
      </div>
      <div className="mt-4 text-base font-semibold">{demo[1]}</div>
      <div className={cn("mt-2 text-sm leading-6", active ? "text-pink-50/90" : "text-zinc-600")}>{demo[4]}</div>
    </button>
  );
}

function DemoRenderer({ demoId }) {
  const [price, setPrice] = useState(19);
  const [zone, setZone] = useState("Premium");
  const [model, setModel] = useState("Operator Balanced");
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("What makes our community different from similar groups?");
  const [sources, setSources] = useState({ discord: true, telegram: true, docs: true, calls: false, pdfs: true });
  const [audit, setAudit] = useState(true);
  const revenue = (price * 142).toLocaleString();

  const Panel = ({ title, side, children }) => (
    <Card className="p-5">
      <div className="flex items-center justify-between border-b border-pink-100 pb-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{side || "Interactive module"}</div>
          <div className="mt-1 text-xl font-semibold text-zinc-950">{title}</div>
        </div>
        <div className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">Live</div>
      </div>
      <div className="mt-5">{children}</div>
    </Card>
  );

  if (demoId === "import") {
    return (
      <Panel title="Source import pipeline" side="Vault">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            {Object.entries(sources).map(([key, enabled]) => (
              <button
                key={key}
                onClick={() => setSources((prev) => ({ ...prev, [key]: !prev[key] }))}
                className={cn("flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm", enabled ? "border-pink-300 bg-pink-50" : "border-zinc-200 bg-white")}
              >
                <span className="capitalize">{key}</span>
                <span className={cn("rounded-full px-2 py-1 text-xs", enabled ? "bg-pink-500 text-white" : "bg-zinc-100 text-zinc-600")}>{enabled ? "Enabled" : "Off"}</span>
              </button>
            ))}
          </div>
          <div className="space-y-5">
            <ProgressBar label="Parsing" value={84} />
            <ProgressBar label="Deduplication" value={71} />
            <ProgressBar label="Entity linking" value={91} />
            <ProgressBar label="Vault indexing" value={88} />
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "query") {
    return (
      <Panel title="Embassy query composer" side="Core">
        <div className="space-y-4">
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="min-h-[120px] w-full rounded-3xl border border-pink-100 bg-pink-50/60 p-4 text-sm outline-none" />
          <div className="flex flex-wrap gap-2">
            {["Public", "Premium", "Private", "Sponsor", "Operator"].map((z) => (
              <button key={z} onClick={() => setZone(z)} className={cn("rounded-full px-4 py-2 text-sm", zone === z ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{z}</button>
            ))}
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-white p-4 text-sm leading-7 text-zinc-700">
            <span className="font-semibold text-zinc-950">Embassy answer:</span> Your community differentiates itself through long-term memory continuity, curated operating doctrine, a high-context premium tier, and sponsor-safe access surfaces that keep the raw archive protected while still monetizing intelligence.
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "tiers") {
    return (
      <Panel title="Access tier matrix" side="Monetization">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {["Public", "Premium", "Private", "Sponsor", "Operator"].map((tier, idx) => (
            <div key={tier} className={cn("rounded-3xl border p-4", idx === 1 ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-white") }>
              <div className="text-sm font-semibold">{tier}</div>
              <div className="mt-3 space-y-2 text-xs text-zinc-600">
                <div>Answer depth {idx + 1}/5</div>
                <div>Memory scope {Math.min(idx + 2, 5)}/5</div>
                <div>Analytics {idx >= 2 ? "Yes" : "Limited"}</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "pricing") {
    return (
      <Panel title="Dynamic pricing studio" side="Revenue">
        <div className="grid gap-4 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <label className="text-sm text-zinc-600">Monthly premium price — ${price}</label>
            <input type="range" min="5" max="99" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-3 w-full accent-pink-500" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <StatCard label="Projected premium members" value="142" note="forecasted" />
              <StatCard label="Monthly gross" value={`$${revenue}`} note="before splits" />
              <StatCard label="Upgrade rate" value="28%" note="healthy funnel" />
            </div>
          </div>
          <Card className="p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Rule set</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-700">
              <div>Free trial queries: 3</div>
              <div>Sponsor subsidy: On</div>
              <div>Event surge pricing: Enabled</div>
              <div>Creator/operator split: 80/20</div>
            </div>
          </Card>
        </div>
      </Panel>
    );
  }

  if (demoId === "zones") {
    return (
      <Panel title="Memory zone designer" side="Vault">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Public", "FAQs, intros, lore, public guides"],
            ["Premium", "Deep archives, reports, strategy, premium answers"],
            ["Private", "Operator notes, sensitive documents, private playbooks"],
            ["Sponsor", "Curated sponsor-safe room with clean outputs only"],
          ].map(([name, text]) => (
            <div key={name} className="rounded-3xl border border-pink-100 bg-pink-50/70 p-4">
              <div className="text-sm font-semibold text-zinc-950">{name}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-600">{text}</div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "models") {
    return (
      <Panel title="Model router" side="Core">
        <div className="grid gap-4 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="space-y-3">
            {["Operator Balanced", "Fast Reply", "Deep Research", "Premium Voice"].map((m) => (
              <button key={m} onClick={() => setModel(m)} className={cn("w-full rounded-2xl border px-4 py-3 text-left text-sm", model === m ? "border-pink-300 bg-pink-50" : "border-pink-100 bg-white")}>{m}</button>
            ))}
          </div>
          <div className="space-y-5">
            <ProgressBar label="Quality score" value={model === "Deep Research" ? 96 : model === "Premium Voice" ? 91 : 84} />
            <ProgressBar label="Latency score" value={model === "Fast Reply" ? 97 : model === "Operator Balanced" ? 88 : 71} />
            <ProgressBar label="Cost efficiency" value={model === "Operator Balanced" ? 91 : model === "Fast Reply" ? 94 : 74} />
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "onboarding") {
    return (
      <Panel title="Member onboarding journey" side="Community">
        <div className="grid gap-4 md:grid-cols-4">
          {["Join", "Understand the culture", "Unlock premium rooms", "Become an operator"].map((step, i) => (
            <div key={step} className="rounded-3xl border border-pink-100 bg-white p-4">
              <div className="text-sm font-semibold text-pink-500">0{i + 1}</div>
              <div className="mt-2 text-lg font-semibold">{step}</div>
              <div className="mt-2 text-sm text-zinc-600">Self-guided education through contextual Q&A and curated memory zones.</div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "lore") {
    return (
      <Panel title="Lore explorer" side="Community">
        <div className="grid gap-4 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="space-y-3">
            {["Origin story", "Core doctrine", "Key moments", "Milestones", "Inside jokes"].map((topic, i) => (
              <div key={topic} className={cn("rounded-2xl border p-4 text-sm", i === 0 ? "border-pink-300 bg-pink-50" : "border-pink-100 bg-white")}>{topic}</div>
            ))}
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-pink-50/60 p-5 text-sm leading-7 text-zinc-700">
            <span className="font-semibold text-zinc-950">Origin story:</span> The Embassy began when a fast-growing community outgrew chats, docs, and repeated explanations. Instead of building another wiki, the operators built a premium intelligence surface where memory could be structured, paid for, and carried forward.
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "support") {
    return (
      <Panel title="Support brain" side="Team">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Open tickets", "248"],
            ["Deflected by Embassy", "71%"],
            ["Avg. resolution", "6m"],
          ].map(([label, value]) => (
            <StatCard key={label} label={label} value={value} note="live support surface" />
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "research") {
    return (
      <Panel title="Research room" side="Core">
        <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-[24px] border border-pink-100 bg-white p-4 text-sm leading-7 text-zinc-700">
            <div className="font-semibold text-zinc-950">Private answer with linked evidence</div>
            <div className="mt-3">Embassy pulls from reports, call notes, and operator memos to answer while preserving the source scope for the chosen room. Evidence cards remain visible to admins without exposing private attachments to ordinary members.</div>
          </div>
          <div className="space-y-3">
            {["Quarterly strategy memo", "Member interviews", "Research PDF pack", "Operator briefing"].map((src) => (
              <div key={src} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-sm font-medium text-zinc-800">{src}</div>
            ))}
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "creator") {
    return (
      <Panel title="Creator fan pass" side="Creator">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Free", "3 questions / public clips"],
            ["VIP", "Unlimited premium room access"],
            ["Backstage", "Operator AMA archive and event rooms"],
          ].map(([tier, perks], i) => (
            <div key={tier} className={cn("rounded-3xl border p-5", i === 1 ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-white") }>
              <div className="text-lg font-semibold">{tier}</div>
              <div className="mt-2 text-sm text-zinc-600">{perks}</div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "language") {
    return (
      <Panel title="Voice and language switcher" side="Core">
        <div className="flex flex-wrap gap-2">
          {["English", "French", "Spanish", "Arabic", "Japanese"].map((lang) => (
            <button key={lang} onClick={() => setLanguage(lang)} className={cn("rounded-full px-4 py-2 text-sm", language === lang ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700")}>{lang}</button>
          ))}
        </div>
        <div className="mt-5 rounded-[24px] border border-pink-100 bg-pink-50/60 p-5 text-sm leading-7 text-zinc-700">
          <span className="font-semibold text-zinc-950">Sample tone in {language}:</span> Embassy keeps the same community memory while adapting tone, language, and vocabulary so international members feel native to the product rather than secondary to it.
        </div>
      </Panel>
    );
  }

  if (demoId === "digest") {
    return (
      <Panel title="Digest generator" side="Community">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Daily digest", "32 highlights"],
            ["Weekly board", "6 strategic arcs"],
            ["Event recap", "19 live moments"],
          ].map(([label, value]) => (
            <StatCard key={label} label={label} value={value} note="generated summary" />
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "moderation") {
    return (
      <Panel title="Moderator console" side="Community">
        <div className="grid gap-4 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="space-y-4">
            <ProgressBar label="Risk scoring coverage" value={89} />
            <ProgressBar label="Private room enforcement" value={94} />
            <ProgressBar label="Sensitive prompt detection" value={83} />
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-white p-5 text-sm text-zinc-700">
            Embassies can flag prompts, isolate rooms, and require operator review for protected content without collapsing the product into a compliance dashboard.
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "sponsor") {
    return (
      <Panel title="Sponsor studio" side="Revenue">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-pink-100 bg-pink-50/60 p-5">
            <div className="text-sm font-semibold">Sponsor-safe room</div>
            <div className="mt-2 text-sm leading-7 text-zinc-600">A controlled room for branded access, curated outputs, and protected community intelligence.</div>
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-white p-5">
            <div className="text-sm font-semibold">Projected sponsor value</div>
            <div className="mt-3 text-3xl font-semibold text-pink-500">$18,400</div>
            <div className="mt-2 text-sm text-zinc-600">Based on monthly room reach, interaction quality, and premium audience density.</div>
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "timeline") {
    return (
      <Panel title="Incident timeline" side="Team">
        <div className="space-y-3">
          {[
            "09:10 — Member confusion spike detected",
            "09:18 — Embassy answered 71 repeated prompts",
            "09:26 — Operator inserted hotfix memo",
            "09:41 — Digest sent to premium room",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-sm text-zinc-800">{item}</div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "splits") {
    return (
      <Panel title="Revenue split engine" side="Monetization">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Creator", "60%"],
            ["Operators", "20%"],
            ["Community treasury", "15%"],
            ["Protocol", "5%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-pink-100 bg-white p-4 text-center">
              <div className="text-sm text-zinc-500">{label}</div>
              <div className="mt-2 text-3xl font-semibold text-zinc-950">{value}</div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "analytics") {
    return (
      <Panel title="Analytics pulse" side="Analytics">
        <div className="space-y-5">
          <ProgressBar label="7-day engagement" value={87} />
          <ProgressBar label="Paid room retention" value={79} />
          <ProgressBar label="New member activation" value={83} />
          <ProgressBar label="Query satisfaction" value={95} />
        </div>
      </Panel>
    );
  }

  if (demoId === "crosschain") {
    return (
      <Panel title="Universal access flow" side="Zeta">
        <div className="grid gap-3 md:grid-cols-4">
          {["Bitcoin user enters", "Embassy access request", "Usage session approved", "Premium room unlocked"].map((step, i) => (
            <div key={step} className="rounded-3xl border border-pink-100 bg-white p-4">
              <div className="text-sm font-semibold text-pink-500">0{i + 1}</div>
              <div className="mt-2 text-sm font-medium text-zinc-900">{step}</div>
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "btc") {
    return (
      <Panel title="BTC payment preview" side="Zeta">
        <div className="grid gap-4 md:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-[24px] border border-pink-100 bg-pink-50/70 p-5 text-sm leading-7 text-zinc-700">
            A BTC holder chooses a premium Embassy room, confirms a clean payment flow, and gets access without wrestling with a separate product identity.
          </div>
          <div className="grid gap-3">
            {[
              ["Payment amount", "$9.00"],
              ["Access duration", "30 days"],
              ["Settlement posture", "Mainnet preview"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-pink-100 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</div>
                <div className="mt-2 text-2xl font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    );
  }

  if (demoId === "audit") {
    return (
      <Panel title="View-key audit room" side="Security">
        <div className="flex items-center gap-3">
          <button onClick={() => setAudit((v) => !v)} className={cn("rounded-full px-4 py-2 text-sm", audit ? "bg-pink-500 text-white" : "border border-pink-200 bg-white text-zinc-700") }>
            {audit ? "Audit key enabled" : "Audit key disabled"}
          </button>
        </div>
        <div className="mt-5 rounded-[24px] border border-pink-100 bg-white p-5 text-sm leading-7 text-zinc-700">
          {audit
            ? "Trusted reviewers can see scoped output lineage, room policy, and access rationale without receiving the underlying sensitive archive."
            : "No disclosure path is currently active. Sensitive room evidence remains operator-only."}
        </div>
      </Panel>
    );
  }

  if (demoId === "health") {
    return (
      <Panel title="Community health meter" side="Analytics">
        <div className="space-y-5">
          <ProgressBar label="Freshness" value={92} />
          <ProgressBar label="Member energy" value={78} />
          <ProgressBar label="Knowledge clarity" value={90} />
          <ProgressBar label="Churn resilience" value={73} />
        </div>
      </Panel>
    );
  }

  if (demoId === "events") {
    return (
      <Panel title="Live event embassy" side="Creator">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Attendee room", "Open"],
            ["Speaker memory", "Loaded"],
            ["Event recap mode", "Scheduled"],
          ].map(([label, value]) => (
            <StatCard key={label} label={label} value={value} note="event-specific intelligence" />
          ))}
        </div>
      </Panel>
    );
  }

  if (demoId === "broadcast") {
    return (
      <Panel title="Broadcast studio" side="Team">
        <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]">
          <textarea defaultValue="Today we launched the premium Embassy room, opened operator review mode, and published the latest digest." className="min-h-[150px] w-full rounded-[24px] border border-pink-100 bg-pink-50/60 p-4 text-sm outline-none" />
          <div className="space-y-3">
            {[
              "Push to public room",
              "Push to premium members",
              "Append to daily digest",
              "Mirror to event page",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-pink-100 bg-white p-4 text-sm font-medium text-zinc-800">{item}</div>
            ))}
          </div>
        </div>
      </Panel>
    );
  }

  return <Panel title="Embassy module" side="Core"><div className="text-sm text-zinc-600">Select a demo tile to preview its live surface.</div></Panel>;
}

function MainAppPage() {
  const [activeDemo, setActiveDemo] = useState("import");
  const [appMode, setAppMode] = useState("Operator");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(DEMOS.map((d) => d[2])))];

  const filtered = useMemo(() => {
    return DEMOS.filter((demo) => {
      const byCategory = category === "All" || demo[2] === category;
      const query = search.toLowerCase();
      const bySearch = !query || demo[1].toLowerCase().includes(query) || demo[4].toLowerCase().includes(query);
      return byCategory && bySearch;
    });
  }, [search, category]);

  return (
    <Section>
      <Card className="overflow-hidden p-2">
        <div className="grid min-h-[820px] gap-0 lg:grid-cols-[280px_1fr]">
          <div className={cn("border-b border-pink-100 bg-[#fff7fc] p-4 lg:border-b-0 lg:border-r", mobileNavOpen ? "block" : "hidden lg:block") }>
            <div className="flex items-center justify-between lg:block">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Embassy OS</div>
                <div className="mt-2 text-2xl font-semibold text-zinc-950">Main App</div>
              </div>
              <button className="lg:hidden" onClick={() => setMobileNavOpen(false)}>
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
              ].map(([Icon, label], i) => (
                <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", i === 1 ? "bg-pink-500 text-white" : "text-zinc-700 hover:bg-white") }>
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-pink-100 bg-white p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Mode</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Operator", "Creator", "Member", "Sponsor", "Mainnet"].map((m) => (
                  <button key={m} onClick={() => setAppMode(m)} className={cn("rounded-full px-3 py-2 text-xs font-medium", appMode === m ? "bg-zinc-950 text-white" : "border border-pink-200 bg-white text-zinc-700") }>{m}</button>
                ))}
              </div>
              <div className="mt-4 text-sm text-zinc-600">Current mode: <span className="font-medium text-zinc-950">{appMode}</span></div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
              <button onClick={() => setMobileNavOpen(true)} className="rounded-full border border-pink-200 bg-white p-2">
                <Menu className="h-5 w-5" />
              </button>
              <div className="text-sm font-medium text-zinc-600">Embassy OS / {appMode}</div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <StatCard label="Embassy score" value="99.1" note="premium surface" />
                  <StatCard label="Live rooms" value="312" note="public and private" />
                  <StatCard label="Paid conversions" value="28.4%" note="strong monetization" />
                  <StatCard label="Mainnet posture" value="Ready" note="go-live path" />
                </div>

                <Card className="p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search demos, flows, and modules"
                        className="w-full rounded-full border border-pink-100 bg-pink-50/60 py-3 pl-11 pr-4 text-sm outline-none"
                      />
                    </div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full border border-pink-100 bg-white px-4 py-3 text-sm outline-none">
                      {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                      ))}
                    </select>
                    <button className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">Go live on mainnet</button>
                  </div>
                </Card>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((demo) => (
                    <DemoCard key={demo[0]} demo={demo} active={activeDemo === demo[0]} onClick={setActiveDemo} />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <DemoRenderer demoId={activeDemo} />
                <Card className="p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Performance board</div>
                  <div className="mt-4 space-y-4">
                    <ProgressBar label="Visual confidence" value={97} />
                    <ProgressBar label="Demo completeness" value={96} />
                    <ProgressBar label="Operator usability" value={89} />
                    <ProgressBar label="Mainnet readiness" value={84} />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export default function MusheeEmbassyPremiumDemo() {
  const [page, setPage] = useState("prelanding");

  return (
    <Shell>
      <TopNav page={page} setPage={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          {page === "prelanding" && <Prelanding setPage={setPage} />}
          {page === "home" && <LandingHome setPage={setPage} />}
          {page === "product" && <ProductPage setPage={setPage} />}
          {page === "communities" && <CommunitiesPage setPage={setPage} />}
          {page === "creators" && <CreatorsPage setPage={setPage} />}
          {page === "teams" && <TeamsPage setPage={setPage} />}
          {page === "security" && <SecurityPage setPage={setPage} />}
          {page === "pricing" && <PricingPage setPage={setPage} />}
          {page === "ecosystem" && <EcosystemPage setPage={setPage} />}
          {page === "cases" && <CasesPage setPage={setPage} />}
          {page === "grants" && <GrantsPage setPage={setPage} />}
          {page === "about" && <AboutPage setPage={setPage} />}
          {page === "app" && <MainAppPage />}
        </motion.div>
      </AnimatePresence>
      <FooterBand />
    </Shell>
  );
}
