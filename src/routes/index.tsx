import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg.asset.json";
import banner from "@/assets/banner.jpg.asset.json";
import storefront from "@/assets/storefront.jpg.asset.json";
import drinks from "@/assets/drinks.jpg.asset.json";
import produce from "@/assets/produce.jpg.asset.json";
import household from "@/assets/household.jpg.asset.json";
import tissue from "@/assets/tissue.jpg.asset.json";
import furniture from "@/assets/furniture.jpg.asset.json";
import staff from "@/assets/staff.jpg.asset.json";
import shoppers from "@/assets/shoppers.jpg.asset.json";

const title = "Transmatt Supermarket Kitale | Your One Stop Shopping Mart";
const description =
  "Transmatt Supermarket in Kitale & Eldoret: groceries, fresh produce, drinks, household care, electronics, furniture and more under one roof.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const departments = [
  { name: "Fresh Produce & Bakery", img: produce, note: "Farm-fresh fruit, veg and hot bread daily" },
  { name: "Drinks & Beverages", img: drinks, note: "Sodas, juices, water and wines & spirits" },
  { name: "Home & Household Care", img: household, note: "Cleaning, pest control and kitchen essentials" },
  { name: "Paper & Personal Care", img: tissue, note: "Tissue, diapers, cosmetics and toiletries" },
  { name: "Furniture & Home Decor", img: furniture, note: "Coffee tables, TV stands, mattresses and beds" },
  { name: "Electronics & Lifestyle", img: shoppers, note: "TVs, generators, bikes, toys and clothing" },
];

const stats = [
  { value: "2", label: "Branches — Kitale & Eldoret" },
  { value: "10k+", label: "Products on the shelves" },
  { value: "7", label: "Days a week, open early" },
];

const deals = [
  {
    tag: "Save 20%",
    name: "Sunflower Cooking Oil 5L",
    was: "KSh 1,650",
    now: "KSh 1,320",
    img: household,
    note: "Offer runs Mon – Sun this week",
  },
  {
    tag: "Buy 2 Get 1",
    name: "Assorted Juices 1L",
    was: "KSh 210 each",
    now: "3 for KSh 420",
    img: drinks,
    note: "Mix and match any flavour",
  },
  {
    tag: "Fresh Deal",
    name: "Pineapples & Seasonal Fruit",
    was: "KSh 180",
    now: "KSh 130",
    img: produce,
    note: "Delivered fresh every morning",
  },
  {
    tag: "Bundle",
    name: "Tissue 10-Pack + Detergent",
    was: "KSh 1,100",
    now: "KSh 899",
    img: tissue,
    note: "While stocks last",
  },
];

const testimonials = [
  {
    quote:
      "I do my whole month's shopping here in one trip. Prices are fair and the fresh section is always well stocked.",
    name: "Mercy W.",
    role: "Kitale shopper",
  },
  {
    quote:
      "The staff actually help you find things instead of pointing. That's why my family keeps coming back.",
    name: "Josphat K.",
    role: "Regular customer, Eldoret",
  },
  {
    quote:
      "We furnished our sitting room and bought groceries the same afternoon. You can't beat that convenience.",
    name: "Aisha M.",
    role: "Kitale Town",
  },
];

const orderSteps = [
  { step: "1", title: "Send your list", text: "WhatsApp or call your shopping list to our order desk." },
  { step: "2", title: "We pick it fresh", text: "Our team picks, weighs and packs your basket the same day." },
  { step: "3", title: "Delivery or pickup", text: "Free delivery within Kitale town on orders above KSh 3,000." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Transmatt Supermarket logo" className="h-11 w-11 rounded-full object-contain" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-brand-deep">TRANSMATT</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand-red">
                One stop shopping mart
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-brand" href="#departments">Departments</a>
            <a className="transition-colors hover:text-brand" href="#deals">Weekly deals</a>
            <a className="transition-colors hover:text-brand" href="#order">Order online</a>
            <a className="transition-colors hover:text-brand" href="#why">Why Transmatt</a>
            <a className="transition-colors hover:text-brand" href="#branches">Branches</a>
          </nav>
          <a
            href="#branches"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Visit us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="gradient-brand absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
            <div className="text-primary-foreground">
              <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                Kitale • Eldoret
              </span>
              <h1 className="text-balance-tight mt-6 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                Everything your home needs, under one roof.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Transmatt Supermarket Ltd is Kitale&apos;s one stop shopping mart — groceries, fresh produce,
                cooking oils, hot bakery, cosmetics, crockery, furniture, electronics, clothing and much more,
                at prices that make sense.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#departments"
                  className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-brand-deep shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Browse departments
                </a>
                <a
                  href="https://maps.google.com/?q=Transmatt+Supermarket+Kitale"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Get directions
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-2xl font-extrabold sm:text-3xl">{s.value}</dt>
                    <dd className="mt-1 text-xs leading-snug text-primary-foreground/75">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={storefront.url}
                alt="Transmatt Supermarket Ltd storefront in Kitale town"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
                loading="eager"
              />
              <img
                src={staff.url}
                alt="A Transmatt team member restocking drinks"
                className="absolute -bottom-8 -left-6 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-lift sm:block"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <img
              src={banner.url}
              alt="Welcome to Transmatt Supermarket Eldoret and Kitale — your one stop shopping mart"
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section id="departments" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Departments</p>
            <h2 className="text-balance-tight mt-3 text-3xl font-extrabold sm:text-4xl">
              Aisle after aisle of what you actually came for
            </h2>
            <p className="mt-4 text-muted-foreground">
              Well-stocked shelves, clear pricing and staff who know where everything is.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <article
                key={d.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={d.img.url}
                  alt={d.name}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="deals" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">This week&apos;s deals</p>
                <h2 className="text-balance-tight mt-3 text-3xl font-extrabold sm:text-4xl">
                  Offers that fill the trolley for less
                </h2>
                <p className="mt-4 text-muted-foreground">
                  New promotions every Monday across groceries, drinks, fresh produce and home care.
                </p>
              </div>
              <span className="rounded-full border border-brand-red/30 bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-red">
                Valid this week
              </span>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deals.map((d) => (
                <article
                  key={d.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img src={d.img.url} alt={d.name} className="aspect-4/3 w-full object-cover" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                      {d.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold">{d.name}</h3>
                    <p className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-brand">{d.now}</span>
                      <span className="text-sm text-muted-foreground line-through">{d.was}</span>
                    </p>
                    <p className="mt-auto pt-3 text-xs text-muted-foreground">{d.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Order &amp; delivery</p>
              <h2 className="text-balance-tight mt-3 text-3xl font-extrabold sm:text-4xl">
                Shop from home — we deliver in Kitale
              </h2>
              <p className="mt-4 text-muted-foreground">
                Too busy to come in? Send us your list and we&apos;ll do the shopping for you.
              </p>
              <ol className="mt-8 space-y-6">
                {orderSteps.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-primary-foreground">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+254700000000"
                  className="rounded-full border border-border px-6 py-3 text-sm font-bold transition-colors hover:bg-secondary"
                >
                  Call the order desk
                </a>
              </div>
            </div>
            <div className="gradient-brand rounded-3xl p-8 text-primary-foreground shadow-lift">
              <h3 className="text-xl font-extrabold">Delivery at a glance</h3>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Delivery window", "Same day, 10am – 7pm"],
                  ["Free delivery", "Orders above KSh 3,000 in Kitale town"],
                  ["Standard fee", "KSh 200 within town, KSh 350 outskirts"],
                  ["Payment", "M-Pesa on delivery or pay in store"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-primary-foreground/20 pb-3">
                    <dt className="text-primary-foreground/75">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs text-primary-foreground/70">
                Click &amp; collect also available — order ahead and pick up at the customer service desk.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Customer stories</p>
              <h2 className="text-balance-tight mt-3 text-3xl font-extrabold sm:text-4xl">
                What shoppers say about us
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-border bg-background p-6">
                  <div className="text-brand-red" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-bold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-secondary/60 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <img
              src={shoppers.url}
              alt="Happy customers shopping at Transmatt Supermarket"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Quality • Variety • Value</p>
              <h2 className="text-balance-tight mt-3 text-3xl font-extrabold sm:text-4xl">
                Why families in Kitale shop with us
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  ["One stop, every time", "From breakfast to bedroom furniture — finish the whole list in a single trip."],
                  ["Everyday honest prices", "Bulk buying and regular offers keep the basket affordable."],
                  ["Fresh, daily", "Produce, bakery and dairy restocked every morning."],
                  ["Friendly, helpful staff", "A team that greets you and helps you carry it out."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                    <div>
                      <h3 className="font-bold">{t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="branches" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="gradient-brand rounded-3xl p-8 text-primary-foreground shadow-lift">
              <h2 className="text-2xl font-extrabold">Kitale Branch</h2>
              <p className="mt-3 text-primary-foreground/85">
                Transmatt Supermarket Ltd, Kitale Town — the big blue building on the main street.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/70">
                Open daily
              </p>
              <p className="text-lg font-bold">Mon – Sun · 7:30am – 9:00pm</p>
              <a
                href="https://maps.google.com/?q=Transmatt+Supermarket+Kitale"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-brand-deep"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h2 className="text-2xl font-extrabold">Eldoret Branch</h2>
              <p className="mt-3 text-muted-foreground">
                The same range, the same value — serving shoppers in Eldoret town.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p><span className="font-semibold">Phone:</span> +254 700 000 000</p>
                <p><span className="font-semibold">Email:</span> info@transmatt.co.ke</p>
              </div>
              <img
                src={tissue.url}
                alt="Well stocked shelves inside Transmatt Supermarket"
                className="mt-6 aspect-16/9 w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
          <img src={logo.url} alt="" className="h-12 w-12 object-contain" />
          <p className="text-sm font-bold text-brand-deep">TRANSMATT SUPERMARKET LTD</p>
          <p className="text-xs text-muted-foreground">
            Your one stop shopping mart · Kitale &amp; Eldoret, Kenya
          </p>
        </div>
      </footer>
    </div>
  );
}
