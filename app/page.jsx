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
  ChevronRight,
  CircleDollarSign,
  Coins,
  Command,
  Crown,
  Database,
  Fingerprint,
  Flame,
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
  Newspaper,
  Cpu,
  LineChart,
  Gem,
  ExternalLink,
  BookOpen,
} from "lucide-react";

const NAV_PAGES = [
  ["prelanding", "Prelanding"],
  ["home", "Home"],
  ["builders", "Builders"],
  ["ecosystem", "Ecosystem"],
  ["community", "Community"],
  ["token", "Token"],
  ["future", "Future"],
  ["news", "Latest News"],
  ["product", "Product"],
  ["cases", "Case Studies"],
  ["grants", "Grant Ready"],
  ["about", "About"],
  ["app", "Main App"],
];

const HERO_STATS = [
  ["Average session cost", "~$0.03"],
  ["Community memory queries", "434,785,336"],
  ["Operator nodes", "3,200+"],
  ["Active member identities", "9.14M"],
];

const PARTNERS = [
  "Google Cloud",
  "AWS",
  "Axelar",
  "Ledger",
  "DigitalOcean",
  "Opera",
  "Cointelegraph",
  "Mainnet Access",
  "Private Memory",
  "Universal Apps",
  "Embassy OS",
  "BTC Access",
];

const BUILDER_FEATURES = [
  [Blocks, "Universal entry", "One product surface for members, operators, creators, sponsors, and institutional users."],
  [Shield, "Safest user experience", "Permissioned rooms, selective disclosure, and controlled memory boundaries."],
  [CircleDollarSign, "Native monetization", "Price premium rooms, event access, sponsor surfaces, and operator flows."],
  [Cpu, "Adaptive routing", "Route across models and knowledge layers for speed, depth, and cost control."],
  [Zap, "Fast execution", "Immediate premium access, live room launches, and a high-performance control surface."],
  [Command, "Battle-tested dashboard", "A serious operator layer for communities that move like companies."],
];

const PARTNER_CARDS = [
  "DigitalOcean",
  "Axelar",
  "Ledger",
  "SafePal",
  "CloudHero",
  "Opera",
  "Gate.io",
  "Institutional Access",
];

const ECOSYSTEM_COUNTS = [
  ["Projects", "123"],
  ["Partners", "96"],
  ["Operators", "75"],
  ["Service Providers", "31"],
];

const COMMUNITY_COUNTS = [
  ["Global summit attendees", "2.6k"],
  ["Discord and Telegram reach", "39k"],
  ["Hackathon participants", "1k+"],
  ["Live event surfaces", "114"],
];

const NEWS = [
  ["Ecosystem", "Mar 30, 2026", "Embassy Guild Winners Announced"],
  ["Use Cases", "Mar 26, 2026", "Machine Payments for Community Intelligence"],
  ["Ecosystem", "Mar 14, 2026", "Global Operator Season Begins"],
  ["Ecosystem", "Mar 12, 2026", "Media Partner Joins Embassy Operator Layer"],
  ["Use Cases", "Mar 6, 2026", "Setting Community Agents Free"],
  ["Use Cases", "Feb 26, 2026", "An Open Embassies Agent Is Live"],
];

const VALUE_CARDS = [
  [Brain, "Private intelligence", "Community memory becomes a controlled asset instead of scattered chaos."],
  [Users, "Institutional communities", "Creators, research groups, teams, and ecosystems get one serious front office."],
  [Coins, "Revenue as a primitive", "Embassies monetize rooms, passes, sponsorship, and premium access by default."],
  [Network, "Mainnet product posture", "The whole experience is framed like a launch-ready product, not a loose prototype."],
];

const CASE_STUDIES = [
  ["Crypto Research Collective", "+41% member retention", "Premium thesis vaults, member-only rooms, and operator-authored intelligence flows."],
  ["Creator Media House", "3.4x higher membership conversion", "A paid fan brain with sponsor-safe rooms, launch event surfaces, and structured archives."],
  ["Developer Ecosystem", "62% faster support resolution", "One command layer replaced scattered docs, repeated moderator answers, and onboarding friction."],
];

const DEMOS = [
  ["import", "Source Import Pipeline", "Vault", Database, "Import chats, docs, calls, and PDFs into a controlled memory vault."],
  ["query", "Embassy Query Composer", "Core", MessageSquare, "Ask the brain and switch answer scopes in real time."],
  ["tiers", "Access Tier Matrix", "Monetization", Lock, "Public, premium, private, sponsor, and operator surfaces."],
  ["pricing", "Dynamic Pricing Studio", "Monetization", CircleDollarSign, "Tune premium pricing and forecast revenue."],
  ["zones", "Memory Zone Designer", "Vault", Layers3, "Segment public, curated, premium, and private rooms."],
  ["models", "Model Router", "Core", Bot, "Balance speed, quality, and cost profiles."],
  ["onboarding", "Member Onboarding", "Community", GraduationCap, "Guide new members through the knowledge stack."],
  ["lore", "Lore Explorer", "Community", BookOpen, "Turn years of history into one premium explorer."],
  ["support", "Support Brain", "Team", HeartHandshake, "Deflect repeated support requests instantly."],
  ["research", "Research Room", "Core", Library, "Query private archives with linked evidence."],
  ["creator", "Creator Fan Pass", "Creator", Star, "Launch VIP and backstage intelligence tiers."],
  ["language", "Voice & Language Switcher", "Core", Globe, "Keep the same brain across languages and tones."],
  ["digest", "Digest Generator", "Community", ScrollText, "Generate daily, weekly, and event recaps."],
  ["moderation", "Moderator Console", "Community", Shield, "Protect sensitive rooms and risky prompts."],
  ["sponsor", "Sponsor Studio", "Monetization", Award, "Create sponsor-safe rooms without leaking raw memory."],
  ["timeline", "Incident Timeline", "Team", TimerReset, "Track key events, responses, and memory changes."],
  ["splits", "Revenue Split Engine", "Monetization", Coins, "Creator, operator, treasury, and protocol splits."],
  ["analytics", "Analytics Pulse", "Analytics", BarChart3, "Watch retention, conversions, and quality."],
  ["crosschain", "Universal Access Flow", "Zeta", Network, "Preview entry from different chains in one clean path."],
  ["btc", "BTC Payment Preview", "Zeta", Wallet, "A BTC holder unlocks premium Embassy access."],
  ["audit", "View-Key Audit Room", "Security", Fingerprint, "Selective disclosure without exposing raw archives."],
  ["health", "Community Health Meter", "Analytics", Signal, "Track freshness, energy, and churn resilience."],
  ["events", "Live Event Embassy", "Creator", Radio, "Spin up a temporary intelligence room for launches."],
  ["broadcast", "Broadcast Studio", "Team", BellRing, "Push updates back into public and premium surfaces."],
];

const APP_METRICS = [
  ["Embassy score", "99.1", "mainnet-grade surface"],
  ["Live rooms", "312", "public and private"],
  ["Paid conversions", "28.4%", "healthy monetization"],
  ["Mainnet posture", "Ready", "launch path active"],
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,244,167,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(51,211,255,0.10),transparent_32%),radial-gradient(circle_at_bottom,rgba(55,255,188,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute left-0 top-0 h-[22rem] w-[22rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Card({ className = "", children }) {
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

function TitleBlock({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={cn("space-y-4", center && "text-center") }>
      <div className={center ? "mx-auto" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className={cn("text-sm leading-7 text-zinc-400 md:text-base", center ? "mx-auto max-w-3xl" : "max-w-3xl")}>{subtitle}</p>
    </div>
  );
}

function StatCard({ label, value, note }) {
  return (
    <Card className="p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm text-emerald-300">{note}</div>
    </Card>
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

function NavButton({ current, item, onClick }) {
  const active = current === item[0];
  return (
    <button
      onClick={() => onClick(item[0])}
      className={cn(
        "rounded-full px-4 py-2 text-sm transition-all",
        active ? "bg-white text-black" : "text-zinc-400 hover:bg-white/5 hover:text-white"
      )}
    >
      {item[1]}
    </button>
  );
}

function Hero({ setPage }) {
  return (
    <Section className="pt-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
        <div className="space-y-6">
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5" /> The sovereign operating system for community intelligence
          </Eyebrow>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl xl:text-[5.35rem]">
            Build the internet-scale front office for your community.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Mushee Embassy turns years of community memory, docs, events, and operator logic into one dark, premium, institutional product surface with monetization, dashboards, and live app access built in.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setPage("app")} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
              Open Main App <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => setPage("builders")} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white">
              Start Building <Play className="h-4 w-4" />
            </button>
            <button onClick={() => setPage("grants")} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-300">
              Submitted <CheckCircle2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Card className="overflow-hidden p-5 md:p-6">
          <div className="rounded-[24px] border border-white/10 bg-[#0b1018] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.26em] text-zinc-500">Network command</div>
                <div className="mt-2 text-2xl font-semibold text-white">Embassy network overview</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 text-black">
                <Orbit className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["Mainnet rooms", "268"],
                ["Operator seats", "84"],
                ["Vault zones", "12"],
                ["Premium cohorts", "41"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-4">
              <ProgressBar label="Knowledge freshness" value={92} />
              <ProgressBar label="Operator readiness" value={89} />
              <ProgressBar label="Mainnet access flow" value={84} />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function StatRail() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {HERO_STATS.map(([label, value]) => (
          <Card key={label} className="p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-white">{value}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function PartnerRail() {
  return (
    <Section>
      <div className="space-y-5">
        <div className="text-center text-sm text-zinc-500">Integrations and tools from leading companies and premium product surfaces around the globe</div>
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] py-4">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-[200%] gap-4 whitespace-nowrap"
          >
            {[...PARTNERS, ...PARTNERS].map((item, i) => (
              <div key={`${item}-${i}`} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-zinc-300">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function BuildersPage({ setPage }) {
  return (
    <>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <TitleBlock
            eyebrow="Builders"
            title="Let's make this decision easy for you."
            subtitle="Mushee Embassy provides the infrastructure you need to launch serious community products: live rooms, premium access, private memory, command dashboards, operator controls, and a main app that looks ready for market."
          />
          <Card className="p-6">
            <div className="text-sm text-zinc-500">Main value stack</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {VALUE_CARDS.map(([Icon, title, text]) => (
                <div key={title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><Icon className="h-5 w-5" /></div>
                  <div className="mt-4 text-xl font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-7 text-zinc-400">{text}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {BUILDER_FEATURES.map(([Icon, title, text]) => (
            <Card key={title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-2xl font-semibold text-white">{title}</div>
              <div className="mt-3 text-sm leading-7 text-zinc-400">{text}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <Card className="p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Fast", "263,000 conceptual interactions per second max surface"],
              ["Decentralized", "3,200+ validator-like operator nodes"],
              ["Battle-tested", "A serious command layer for live products"],
              ["Mainnet", "A direct path into the premium app shell"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-2 text-sm leading-7 text-zinc-400">{text}</div>
              </div>
            ))}
          </div>
          <button onClick={() => setPage("app")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
            Open live dashboard <ArrowRight className="h-4 w-4" />
          </button>
        </Card>
      </Section>
    </>
  );
}

function EcosystemPage() {
  return (
    <>
      <Section>
        <TitleBlock
          eyebrow="Ecosystem"
          title="Featured partners"
          subtitle="Position Mushee Embassy like a real network company: deep partners, featured integrations, enterprise posture, and a product surface that fits an ecosystem front page instead of just a builder demo."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PARTNER_CARDS.map((partner) => (
            <Card key={partner} className="min-h-[180px] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300">
                <Gem className="h-5 w-5" />
              </div>
              <div className="mt-8 text-xl font-semibold text-white">{partner}</div>
              <div className="mt-2 text-sm leading-7 text-zinc-400">Premium integration-ready surface for the Embassy ecosystem.</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <Card className="p-6 md:p-8">
          <TitleBlock
            eyebrow="Discover our ecosystem"
            title="Explore projects and operators from all around the world."
            subtitle="The Embassy network is framed as a serious ecosystem with product depth, operator presence, and premium service layers."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ECOSYSTEM_COUNTS.map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-4xl font-semibold tracking-tight text-white">{value}</div>
                <div className="mt-2 text-sm text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </>
  );
}

function CommunityPage() {
  return (
    <>
      <Section>
        <TitleBlock
          eyebrow="Community"
          title="Alone, we can do so little. Together, we can move mountains."
          subtitle="Big event images, audience counters, and social proof are part of the MultiversX structure. Embassy mirrors that rhythm with community growth, operator participation, and global launch surfaces."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {COMMUNITY_COUNTS.map(([label, value], index) => (
            <Card key={label} className="overflow-hidden">
              <div className="h-40 bg-[radial-gradient(circle_at_top_left,rgba(55,255,188,0.28),transparent_25%),linear-gradient(135deg,#0c1118,#121927,#07090f)]" />
              <div className="p-5">
                <div className="text-4xl font-semibold tracking-tight text-white">{value}</div>
                <div className="mt-2 text-sm text-zinc-400">{label}</div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function TokenPage() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <TitleBlock
          eyebrow="The Embassy Token Layer"
          title="Secured by access, usage, and operator alignment."
          subtitle="This section mirrors the token/economic narrative block on MultiversX: one native layer that supports access, growth, monetization, and alignment across all stakeholders in the product network."
        />
        <Card className="p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Usage", "Premium room access and live query sessions"],
              ["Security", "Permissioned memory and operator control surfaces"],
              ["Growth", "Sponsor models, upgrades, and network expansion"],
              ["Alignment", "Treasury, operator, creator, and protocol splits"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="text-lg font-semibold text-white">{title}</div>
                <div className="mt-2 text-sm leading-7 text-zinc-400">{text}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function FuturePage() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Card className="min-h-[420px] overflow-hidden">
          <div className="h-full bg-[radial-gradient(circle_at_top_left,rgba(37,244,167,0.25),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(63,223,255,0.22),transparent_28%),linear-gradient(135deg,#0a1118,#111b29,#06080d)] p-8">
            <div className="max-w-lg">
              <Eyebrow>Future-proof in every way</Eyebrow>
              <div className="mt-4 text-4xl font-semibold tracking-tight text-white">Built for long-term operator-grade community infrastructure.</div>
              <div className="mt-4 text-sm leading-8 text-zinc-300">A product that looks like a company, operates like a command layer, and scales like a network surface. That is the core visual and structural lesson taken from MultiversX.</div>
            </div>
          </div>
        </Card>
        <div className="space-y-5">
          <ProgressBar label="Product resilience" value={96} />
          <ProgressBar label="Operator readiness" value={91} />
          <ProgressBar label="Market fit clarity" value={88} />
          <ProgressBar label="Visual confidence" value={98} />
        </div>
      </div>
    </Section>
  );
}

function NewsPage() {
  return (
    <>
      <Section>
        <div className="flex items-end justify-between gap-4">
          <TitleBlock
            eyebrow="Latest News"
            title="A live narrative surface for the company."
            subtitle="MultiversX closes with a latest-news block and newsletter CTA. Embassy mirrors that with ecosystem updates, launch signals, and product momentum."
          />
          <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white md:inline-flex">
            View All <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </Section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {NEWS.map(([type, date, title]) => (
            <Card key={title} className="p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-emerald-300">
                <Newspaper className="h-4 w-4" /> {type}
              </div>
              <div className="mt-3 text-sm text-zinc-500">{date}</div>
              <div className="mt-4 text-2xl font-semibold text-white">{title}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <TitleBlock
                eyebrow="Stay in-the-know"
                title="Never miss an update."
                subtitle="A serious footer CTA with a clean company newsletter block, exactly the kind of finishing section that makes the whole site feel complete."
              />
            </div>
            <div className="space-y-3">
              <input placeholder="Enter your email" className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-zinc-500" />
              <button className="w-full rounded-full bg-white px-5 py-4 text-sm font-medium text-black">Subscribe</button>
              <div className="text-xs leading-6 text-zinc-500">We respect your privacy. This product demo uses a company-style subscription block for realism and completeness.</div>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

function ProductPage() {
  return (
    <>
      <Section>
        <TitleBlock
          eyebrow="Product"
          title="A command layer for community memory, premium access, and live operations."
          subtitle="Embassy turns MultiversX-style big-company structure into a usable product: vault ingestion, room design, pricing, selective disclosure, analytics, and a main app with more than 20 interactive demo modules."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [Database, "Vault ingestion", "Chats, PDFs, docs, links, events, and operator notes."],
            [Layers3, "Room segmentation", "Public, premium, sponsor, private, and operator-only zones."],
            [CircleDollarSign, "Monetization logic", "Pricing, splits, access passes, and paid rooms."],
            [Fingerprint, "Trust and disclosure", "Review paths and selective visibility for high-trust operations."],
          ].map(([Icon, title, text]) => (
            <Card key={title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><Icon className="h-5 w-5" /></div>
              <div className="mt-5 text-2xl font-semibold text-white">{title}</div>
              <div className="mt-3 text-sm leading-7 text-zinc-400">{text}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

function CasesPage() {
  return (
    <Section>
      <TitleBlock
        eyebrow="Case Studies"
        title="Proof over promise."
        subtitle="A premium company site needs product proof. Embassy includes structured use cases that match creators, research communities, and developer ecosystems."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {CASE_STUDIES.map(([title, stat, text]) => (
          <Card key={title} className="p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-zinc-500">{title}</div>
            <div className="mt-4 text-4xl font-semibold text-emerald-300">{stat}</div>
            <div className="mt-4 text-sm leading-7 text-zinc-400">{text}</div>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
              Open related flow <ChevronRight className="h-4 w-4" />
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function GrantsPage() {
  return (
    <Section>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-zinc-500">Submission board</div>
              <div className="mt-1 text-3xl font-semibold text-white">Readiness tracker</div>
            </div>
            <div className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-semibold text-black">Submitted</div>
          </div>
          <div className="mt-6 space-y-5">
            <ProgressBar label="Visual polish" value={99} />
            <ProgressBar label="Product depth" value={95} />
            <ProgressBar label="Main app readiness" value={89} />
            <ProgressBar label="Narrative clarity" value={93} />
            <ProgressBar label="Demo breadth" value={97} />
          </div>
        </Card>
        <Card className="p-6">
          <div className="text-sm text-zinc-500">What reviewers see</div>
          <div className="mt-5 grid gap-3">
            {[
              "A MultiversX-style dark company shell",
              "13 premium navigation surfaces",
              "24 interactive demo modules",
              "A real main app with operator controls",
              "Network metrics, partner rails, news, and footer CTA",
              "A submitted-ready enterprise product posture",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-300">{item}</div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function AboutPage() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          [Building2, "Europe Global Incorporated", "Structured to feel like a serious company with an institutional public surface."],
          [Flame, "MultiversX-inspired visual system", "Dark, sharp, metric-driven, minimal, and high-confidence instead of soft or playful."],
          [Rocket, "Launchable shell", "A prelanding page, many company sections, and a deep app environment in one product."],
        ].map(([Icon, title, text]) => (
          <Card key={title} className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 text-black">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-2xl font-semibold text-white">{title}</div>
            <div className="mt-3 text-sm leading-7 text-zinc-400">{text}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function DemoCard({ demo, active, onClick }) {
  const Icon = demo[3];
  return (
    <button
      onClick={() => onClick(demo[0])}
      className={cn(
        "rounded-[24px] border p-4 text-left transition-all",
        active ? "border-emerald-300/60 bg-emerald-300/10 shadow-[0_18px_70px_rgba(52,211,153,0.12)]" : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", active ? "bg-white text-black" : "bg-white/10 text-zinc-300") }>
          <Icon className="h-5 w-5" />
        </div>
        <span className={cn("text-[11px] uppercase tracking-[0.24em]", active ? "text-emerald-300" : "text-zinc-500")}>{demo[2]}</span>
      </div>
      <div className="mt-4 text-base font-semibold text-white">{demo[1]}</div>
      <div className="mt-2 text-sm leading-6 text-zinc-400">{demo[4]}</div>
    </button>
  );
}

function ModuleShell({ title, side = "Interactive module", children }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{side}</div>
          <div className="mt-1 text-xl font-semibold text-white">{title}</div>
        </div>
        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-300">Live</div>
      </div>
      <div className="mt-5">{children}</div>
    </Card>
  );
}

function DemoRenderer({ demoId }) {
  const [price, setPrice] = useState(19);
  const [zone, setZone] = useState("Premium");
  const [model, setModel] = useState("Operator Balanced");
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("What makes our community different from similar groups?");
  const [auditEnabled, setAuditEnabled] = useState(true);
  const [sources, setSources] = useState({ discord: true, telegram: true, docs: true, calls: false, pdfs: true });

  const ToggleRow = ({ label, enabled, onClick }) => (
    <button onClick={onClick} className={cn("flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm", enabled ? "border-emerald-300/30 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-400") }>
      <span className="capitalize">{label}</span>
      <span className={cn("rounded-full px-2 py-1 text-xs", enabled ? "bg-white text-black" : "bg-white/10 text-zinc-400")}>{enabled ? "Enabled" : "Off"}</span>
    </button>
  );

  if (demoId === "import") {
    return (
      <ModuleShell title="Source import pipeline" side="Vault">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            {Object.entries(sources).map(([key, value]) => (
              <ToggleRow key={key} label={key} enabled={value} onClick={() => setSources((prev) => ({ ...prev, [key]: !prev[key] }))} />
            ))}
          </div>
          <div className="space-y-5">
            <ProgressBar label="Parsing" value={84} />
            <ProgressBar label="Deduplication" value={71} />
            <ProgressBar label="Entity linking" value={91} />
            <ProgressBar label="Vault indexing" value={88} />
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "query") {
    return (
      <ModuleShell title="Embassy query composer" side="Core">
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="min-h-[130px] w-full rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm text-white outline-none placeholder:text-zinc-500" />
        <div className="mt-4 flex flex-wrap gap-2">
          {["Public", "Premium", "Private", "Sponsor", "Operator"].map((item) => (
            <button key={item} onClick={() => setZone(item)} className={cn("rounded-full px-4 py-2 text-sm", zone === item ? "bg-white text-black" : "border border-white/10 bg-white/[0.03] text-zinc-400")}>{item}</button>
          ))}
        </div>
        <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
          <span className="font-semibold text-white">Embassy answer:</span> Your community differentiates itself through long-term memory continuity, a premium intelligence layer, sponsor-safe access, operator-curated doctrine, and structured rooms that turn knowledge into a usable product.
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "tiers") {
    return (
      <ModuleShell title="Access tier matrix" side="Monetization">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {["Public", "Premium", "Private", "Sponsor", "Operator"].map((tier, index) => (
            <div key={tier} className={cn("rounded-[22px] border p-4", index === 1 ? "border-emerald-300/40 bg-emerald-300/10" : "border-white/10 bg-white/[0.03]") }>
              <div className="text-sm font-semibold text-white">{tier}</div>
              <div className="mt-3 space-y-2 text-xs text-zinc-400">
                <div>Answer depth {index + 1}/5</div>
                <div>Memory scope {Math.min(index + 2, 5)}/5</div>
                <div>Analytics {index >= 2 ? "Yes" : "Limited"}</div>
              </div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "pricing") {
    const gross = (price * 142).toLocaleString();
    return (
      <ModuleShell title="Dynamic pricing studio" side="Revenue">
        <div className="grid gap-4 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <label className="text-sm text-zinc-400">Monthly premium price — ${price}</label>
            <input type="range" min="5" max="99" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-3 w-full accent-emerald-300" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <StatCard label="Projected premium members" value="142" note="forecasted" />
              <StatCard label="Monthly gross" value={`$${gross}`} note="before splits" />
              <StatCard label="Upgrade rate" value="28%" note="healthy funnel" />
            </div>
          </div>
          <Card className="p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Rule set</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-400">
              <div>Free trial queries: 3</div>
              <div>Sponsor subsidy: On</div>
              <div>Event surge pricing: Enabled</div>
              <div>Creator/operator split: 80/20</div>
            </div>
          </Card>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "zones") {
    return (
      <ModuleShell title="Memory zone designer" side="Vault">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Public", "FAQs, intros, lore, public guides"],
            ["Premium", "Deep archives, reports, strategy, premium answers"],
            ["Private", "Operator notes, sensitive documents, private playbooks"],
            ["Sponsor", "Curated sponsor-safe room with clean outputs only"],
          ].map(([name, text]) => (
            <div key={name} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-white">{name}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{text}</div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "models") {
    return (
      <ModuleShell title="Model router" side="Core">
        <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-3">
            {["Operator Balanced", "Fast Reply", "Deep Research", "Premium Voice"].map((item) => (
              <button key={item} onClick={() => setModel(item)} className={cn("w-full rounded-2xl border px-4 py-3 text-left text-sm", model === item ? "border-emerald-300/30 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-400")}>{item}</button>
            ))}
          </div>
          <div className="space-y-5">
            <ProgressBar label="Quality score" value={model === "Deep Research" ? 96 : model === "Premium Voice" ? 91 : 84} />
            <ProgressBar label="Latency score" value={model === "Fast Reply" ? 97 : model === "Operator Balanced" ? 88 : 71} />
            <ProgressBar label="Cost efficiency" value={model === "Operator Balanced" ? 91 : model === "Fast Reply" ? 94 : 74} />
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "onboarding") {
    return (
      <ModuleShell title="Member onboarding journey" side="Community">
        <div className="grid gap-4 md:grid-cols-4">
          {["Join", "Understand the culture", "Unlock premium rooms", "Become an operator"].map((step, index) => (
            <div key={step} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-emerald-300">0{index + 1}</div>
              <div className="mt-2 text-lg font-semibold text-white">{step}</div>
              <div className="mt-2 text-sm text-zinc-400">Self-guided education through contextual Q&A and curated memory zones.</div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "lore") {
    return (
      <ModuleShell title="Lore explorer" side="Community">
        <div className="grid gap-4 lg:grid-cols-[0.36fr_0.64fr]">
          <div className="space-y-3">
            {["Origin story", "Core doctrine", "Key moments", "Milestones", "Inside jokes"].map((topic, i) => (
              <div key={topic} className={cn("rounded-2xl border p-4 text-sm", i === 0 ? "border-emerald-300/30 bg-emerald-300/10 text-white" : "border-white/10 bg-white/[0.03] text-zinc-400")}>{topic}</div>
            ))}
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
            <span className="font-semibold text-white">Origin story:</span> The Embassy began when a fast-growing community outgrew chats, docs, and repeated explanations. Instead of building another wiki, the operators built a premium intelligence surface where memory could be structured, paid for, and carried forward.
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "support") {
    return (
      <ModuleShell title="Support brain" side="Team">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Open tickets" value="248" note="live support surface" />
          <StatCard label="Deflected by Embassy" value="71%" note="reduced repetition" />
          <StatCard label="Avg. resolution" value="6m" note="faster operator action" />
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "research") {
    return (
      <ModuleShell title="Research room" side="Core">
        <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-zinc-300">
            <div className="font-semibold text-white">Private answer with linked evidence</div>
            <div className="mt-3">Embassy pulls from reports, call notes, and operator memos to answer while preserving source scope for the chosen room. Evidence cards stay visible to admins without exposing private attachments to ordinary members.</div>
          </div>
          <div className="space-y-3">
            {["Quarterly strategy memo", "Member interviews", "Research PDF pack", "Operator briefing"].map((src) => (
              <div key={src} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{src}</div>
            ))}
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "creator") {
    return (
      <ModuleShell title="Creator fan pass" side="Creator">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Free", "3 questions / public clips"],
            ["VIP", "Unlimited premium room access"],
            ["Backstage", "Operator AMA archive and event rooms"],
          ].map(([tier, perks], i) => (
            <div key={tier} className={cn("rounded-[22px] border p-5", i === 1 ? "border-emerald-300/30 bg-emerald-300/10" : "border-white/10 bg-white/[0.03]") }>
              <div className="text-lg font-semibold text-white">{tier}</div>
              <div className="mt-2 text-sm text-zinc-400">{perks}</div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "language") {
    return (
      <ModuleShell title="Voice and language switcher" side="Core">
        <div className="flex flex-wrap gap-2">
          {["English", "French", "Spanish", "Arabic", "Japanese"].map((item) => (
            <button key={item} onClick={() => setLanguage(item)} className={cn("rounded-full px-4 py-2 text-sm", language === item ? "bg-white text-black" : "border border-white/10 bg-white/[0.03] text-zinc-400")}>{item}</button>
          ))}
        </div>
        <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
          <span className="font-semibold text-white">Sample tone in {language}:</span> Embassy keeps the same community memory while adapting tone, language, and vocabulary so international members feel native to the product instead of secondary to it.
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "digest") {
    return (
      <ModuleShell title="Digest generator" side="Community">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Daily digest" value="32 highlights" note="generated summary" />
          <StatCard label="Weekly board" value="6 strategic arcs" note="generated summary" />
          <StatCard label="Event recap" value="19 live moments" note="generated summary" />
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "moderation") {
    return (
      <ModuleShell title="Moderator console" side="Community">
        <div className="grid gap-4 lg:grid-cols-[0.55fr_0.45fr]">
          <div className="space-y-4">
            <ProgressBar label="Risk scoring coverage" value={89} />
            <ProgressBar label="Private room enforcement" value={94} />
            <ProgressBar label="Sensitive prompt detection" value={83} />
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
            Embassies can flag prompts, isolate rooms, and require operator review for protected content without turning the product into a lifeless admin console.
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "sponsor") {
    return (
      <ModuleShell title="Sponsor studio" side="Revenue">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-semibold text-white">Sponsor-safe room</div>
            <div className="mt-2 text-sm leading-7 text-zinc-400">A controlled room for branded access, curated outputs, and protected community intelligence.</div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-sm font-semibold text-white">Projected sponsor value</div>
            <div className="mt-3 text-3xl font-semibold text-emerald-300">$18,400</div>
            <div className="mt-2 text-sm text-zinc-400">Based on monthly room reach, interaction quality, and premium audience density.</div>
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "timeline") {
    return (
      <ModuleShell title="Incident timeline" side="Team">
        <div className="space-y-3">
          {[
            "09:10 — Member confusion spike detected",
            "09:18 — Embassy answered 71 repeated prompts",
            "09:26 — Operator inserted hotfix memo",
            "09:41 — Digest sent to premium room",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "splits") {
    return (
      <ModuleShell title="Revenue split engine" side="Monetization">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Creator", "60%"],
            ["Operators", "20%"],
            ["Community treasury", "15%"],
            ["Protocol", "5%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-center">
              <div className="text-sm text-zinc-500">{label}</div>
              <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "analytics") {
    return (
      <ModuleShell title="Analytics pulse" side="Analytics">
        <div className="space-y-5">
          <ProgressBar label="7-day engagement" value={87} />
          <ProgressBar label="Paid room retention" value={79} />
          <ProgressBar label="New member activation" value={83} />
          <ProgressBar label="Query satisfaction" value={95} />
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "crosschain") {
    return (
      <ModuleShell title="Universal access flow" side="Zeta">
        <div className="grid gap-3 md:grid-cols-4">
          {["Bitcoin user enters", "Embassy access request", "Usage session approved", "Premium room unlocked"].map((step, i) => (
            <div key={step} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-emerald-300">0{i + 1}</div>
              <div className="mt-2 text-sm font-medium text-white">{step}</div>
            </div>
          ))}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "btc") {
    return (
      <ModuleShell title="BTC payment preview" side="Zeta">
        <div className="grid gap-4 md:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
            A BTC holder chooses a premium Embassy room, confirms a clean payment flow, and gets access without wrestling with a separate product identity.
          </div>
          <div className="grid gap-3">
            {[
              ["Payment amount", "$9.00"],
              ["Access duration", "30 days"],
              ["Settlement posture", "Mainnet preview"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "audit") {
    return (
      <ModuleShell title="View-key audit room" side="Security">
        <button onClick={() => setAuditEnabled((v) => !v)} className={cn("rounded-full px-4 py-2 text-sm", auditEnabled ? "bg-white text-black" : "border border-white/10 bg-white/[0.03] text-zinc-400") }>
          {auditEnabled ? "Audit key enabled" : "Audit key disabled"}
        </button>
        <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-zinc-300">
          {auditEnabled
            ? "Trusted reviewers can see scoped output lineage, room policy, and access rationale without receiving the underlying sensitive archive."
            : "No disclosure path is currently active. Sensitive room evidence remains operator-only."}
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "health") {
    return (
      <ModuleShell title="Community health meter" side="Analytics">
        <div className="space-y-5">
          <ProgressBar label="Freshness" value={92} />
          <ProgressBar label="Member energy" value={78} />
          <ProgressBar label="Knowledge clarity" value={90} />
          <ProgressBar label="Churn resilience" value={73} />
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "events") {
    return (
      <ModuleShell title="Live event embassy" side="Creator">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Attendee room" value="Open" note="event-specific intelligence" />
          <StatCard label="Speaker memory" value="Loaded" note="event-specific intelligence" />
          <StatCard label="Recap mode" value="Scheduled" note="event-specific intelligence" />
        </div>
      </ModuleShell>
    );
  }

  if (demoId === "broadcast") {
    return (
      <ModuleShell title="Broadcast studio" side="Team">
        <div className="grid gap-4 lg:grid-cols-[0.6fr_0.4fr]">
          <textarea defaultValue="Today we launched the premium Embassy room, opened operator review mode, and published the latest digest." className="min-h-[150px] w-full rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm text-white outline-none" />
          <div className="space-y-3">
            {["Push to public room", "Push to premium members", "Append to daily digest", "Mirror to event page"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">{item}</div>
            ))}
          </div>
        </div>
      </ModuleShell>
    );
  }

  return <ModuleShell title="Embassy module"><div className="text-sm text-zinc-400">Select a module to preview its live surface.</div></ModuleShell>;
}

function MainAppPage() {
  const [activeDemo, setActiveDemo] = useState("import");
  const [appMode, setAppMode] = useState("Operator");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(DEMOS.map((d) => d[2])))];
  const filtered = useMemo(() => {
    return DEMOS.filter((demo) => {
      const matchCategory = category === "All" || demo[2] === category;
      const q = search.toLowerCase();
      const matchSearch = !q || demo[1].toLowerCase().includes(q) || demo[4].toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <Section>
      <Card className="overflow-hidden p-2">
        <div className="grid min-h-[860px] gap-0 lg:grid-cols-[280px_1fr]">
          <div className={cn("border-b border-white/10 bg-black/25 p-4 lg:border-b-0 lg:border-r", mobileOpen ? "block" : "hidden lg:block") }>
            <div className="flex items-center justify-between lg:block">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">Embassy OS</div>
                <div className="mt-2 text-2xl font-semibold text-white">Main App</div>
              </div>
              <button className="lg:hidden" onClick={() => setMobileOpen(false)}><X className="h-5 w-5" /></button>
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
                <div key={label} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", i === 1 ? "bg-white text-black" : "text-zinc-400 hover:bg-white/5 hover:text-white") }>
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Mode</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Operator", "Creator", "Member", "Sponsor", "Mainnet"].map((item) => (
                  <button key={item} onClick={() => setAppMode(item)} className={cn("rounded-full px-3 py-2 text-xs font-medium", appMode === item ? "bg-white text-black" : "border border-white/10 bg-white/[0.03] text-zinc-400")}>{item}</button>
                ))}
              </div>
              <div className="mt-4 text-sm text-zinc-400">Current mode: <span className="font-medium text-white">{appMode}</span></div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
              <button onClick={() => setMobileOpen(true)} className="rounded-full border border-white/10 bg-white/[0.03] p-2"><Menu className="h-5 w-5" /></button>
              <div className="text-sm font-medium text-zinc-400">Embassy OS / {appMode}</div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  {APP_METRICS.map(([label, value, note]) => <StatCard key={label} label={label} value={value} note={note} />)}
                </div>

                <Card className="p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search demos, flows, and modules" className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-500" />
                    </div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none">
                      {categories.map((cat) => <option key={cat} className="bg-[#0b1018]">{cat}</option>)}
                    </select>
                    <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Go live on mainnet</button>
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
                  <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Performance board</div>
                  <div className="mt-4 space-y-4">
                    <ProgressBar label="Visual confidence" value={99} />
                    <ProgressBar label="Demo completeness" value={97} />
                    <ProgressBar label="Operator usability" value={91} />
                    <ProgressBar label="Mainnet readiness" value={86} />
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

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <StatRail />
      <PartnerRail />
      <BuildersPage setPage={setPage} />
      <EcosystemPage />
      <TokenPage />
      <CommunityPage />
      <FuturePage />
      <NewsPage />
    </>
  );
}

function PrelandingPage({ setPage }) {
  return (
    <Section>
      <Card className="overflow-hidden">
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>
              <Building2 className="h-3.5 w-3.5" /> Dark corporate shell rebuilt around MultiversX cues
            </Eyebrow>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Mushee Embassy now follows the actual MultiversX direction.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              No white. No pink. This rebuild is dark, metric-heavy, enterprise, high-contrast, and much closer to the current MultiversX homepage structure: giant hero, hard stats, partner rail, builders, ecosystem, token, community, news, and a complete footer rhythm.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setPage("home")} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Open company homepage <ArrowRight className="h-4 w-4" /></button>
              <button onClick={() => setPage("app")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white">Open main app <Play className="h-4 w-4" /></button>
            </div>
          </div>
          <Card className="p-5">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Delivery board</div>
                  <div className="mt-2 text-2xl font-semibold text-white">Updated package</div>
                </div>
                <div className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-semibold text-black">Ready</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["Landing pages", "13"],
                  ["Interactive demos", "24"],
                  ["Dashboard modes", "5"],
                  ["Theme", "Dark"],
                  ["Structure", "MultiversX-style"],
                  ["Status", "Rebuilt"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </Section>
  );
}

function Footer({ setPage }) {
  return (
    <Section>
      <Card className="p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black"><Orbit className="h-5 w-5" /></div>
              <div>
                <div className="text-lg font-semibold text-white">Mushee Embassy</div>
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Europe Global Incorporated</div>
              </div>
            </div>
            <div className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              A MultiversX-inspired company shell rebuilt around dark visual language, hard metrics, ecosystem structure, and a main app with 24 working product demos.
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Company", ["Home", "About", "Latest News"]],
              ["Builders", ["Product", "Builders", "Main App"]],
              ["Ecosystem", ["Ecosystem", "Community", "Token"]],
              ["Action", ["Grant Ready", "Open App", "Prelanding"]],
            ].map(([group, items]) => (
              <div key={group}>
                <div className="text-sm font-semibold text-white">{group}</div>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  {items.map((item) => (
                    <button key={item} onClick={() => {
                      const match = NAV_PAGES.find((p) => p[1] === item || p[0] === item.toLowerCase().replace(/\s+/g, ""));
                      if (match) setPage(match[0]);
                    }} className="block text-left hover:text-white">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}

export default function Page() {
  const [page, setPage] = useState("prelanding");

  return (
    <Shell>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <button onClick={() => setPage("prelanding")} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
              <Orbit className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">Mushee Embassy</div>
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">Europe Global Incorporated</div>
            </div>
          </button>
          <div className="hidden flex-wrap items-center gap-2 xl:flex">
            {NAV_PAGES.map((item) => (
              <NavButton key={item[0]} item={item} current={page} onClick={setPage} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300 md:inline-flex">Submitted</div>
            <button onClick={() => setPage("app")} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Open Main App</button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={page} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: "easeOut" }}>
          {page === "prelanding" && <PrelandingPage setPage={setPage} />}
          {page === "home" && <HomePage setPage={setPage} />}
          {page === "builders" && <BuildersPage setPage={setPage} />}
          {page === "ecosystem" && <EcosystemPage />}
          {page === "community" && <CommunityPage />}
          {page === "token" && <TokenPage />}
          {page === "future" && <FuturePage />}
          {page === "news" && <NewsPage />}
          {page === "product" && <ProductPage />}
          {page === "cases" && <CasesPage />}
          {page === "grants" && <GrantsPage />}
          {page === "about" && <AboutPage />}
          {page === "app" && <MainAppPage />}
        </motion.div>
      </AnimatePresence>

      <Footer setPage={setPage} />
    </Shell>
  );
}
