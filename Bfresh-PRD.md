PRD.md — BFresh Corporate Website (v0.1)

Project: BFresh Avocado Group – Corporate Website Rebuild
Prepared by: Drew (Product Owner), Kai (Co-PO)
Document Version: v0.1
Status: Draft – Ready for Planning Integration
Last Updated: <DATE>

1. Executive Summary

BFresh requires a modern, multinational-grade corporate website that mirrors the quality and structure of industry leaders (Mission Produce, Calavo, WestPak). The site’s purpose is credibility and brand presence within the avocado export/import ecosystem — not direct online sales. Website will showcase BFresh’s capabilities across:

Fresh Avocado Packhouse

Guacamole & Avocado Pulp Processing

Avocado Oil Production

Grower Network & Certifications

Sustainability and Social Practices

Contact / Trade Inquiry Channels

The BFresh website will serve as the digital face of the company, used primarily as a credibility tool during B2B conversations with importers, exporters, distributors, and growers.

2. Primary Goals & Success Criteria
2.1 Primary Goal

Establish BFresh as a credible, professional, multinational-standard avocado supplier through a polished corporate website.

Provide industry-standard structure similar to Mission Produce, Calavo, and WestPak, elevated with BFresh’s unique advantage: Avocado Oil production.

2.2 Success Criteria

The website must look “Mission-level” instantly.

Used as a reference during B2B conversations:

“Please check out our website,” meaning it must visually impress decision-makers.

SEO-ready for discovery by small percentage of inbound interest (importers, foodservice companies, distributors).

Optional goal: attract potential growers via Grower Network content and visible certifications.

2.3 KPIs (Soft Targets)

At least 1–5 inbound trade inquiries/month (purely opportunistic).

Positive qualitative feedback from business partners and growers:

“Your website looks strong / professional / serious.”

All critical certifications clearly communicated.

3. Audience Definition
3.1 Primary Audiences

Importers / Exporters (US, Canada, Europe)

Distributors (Fresh & Value-Added)

Foodservice / Industrial Buyers

Retail Buyers (secondary, opportunistic)

3.2 Secondary Audiences

Growers considering the packhouse services.

Certifying bodies / auditors evaluating compliance.

General stakeholders (banks, logistics partners).

3.3 Languages

English v1 (primary market: US/Canada/EU).

Spanish v1.5 (multilingual support must be wired, but content will be added after launch).

4. Scope of Work
4.1 Deliverables (Core v1)
Website Pages

Home (Corporate Mothership)

About Us

Fresh Avocado Packhouse

Guacamole & Avocado Pulp Facility

Avocado Oil Production Facility

Grower Network / Our Growers

Quality & Certifications

Market Intelligence / Insights (Lite v1)

Contact & Trade Inquiries

Global Components

Navigation (English-first, language selector stubbed for Spanish)

Footer (address, contact, social links)

Responsive layout (desktop-first design with mobile optimization)

Structured metadata, favicons, OG tags

Visual Requirements

Modern, corporate-grade styling (Next.js + Tailwind)

Parallax / subtle scroll motion (Mission-style)

High-quality imagery (placeholder during mock, final assets provided by client)

Video embedding (e.g., facility overview, orchard walk-through)

4.2 Out of Scope (v1)

Full CRM or ERP integration

Multi-language final content (Spanish content provided later)

Blog/news system with publishing backend (v2 possibility)

Investor relations section

Careers section

Client portal

eCommerce or pricing engine

5. Competitive Benchmark (Reference Sites)

We are explicitly modeling the site after:

Mission Produce

Best execution of corporate mothership site

Excellent global positioning, process flow, category intelligence layout

Cleanest modern design language

Calavo

Good blend of brand + product lines

Balanced About/History/Social content

WestPak

Strongest Guac / Bagged Programs layout

Clear program cards and product segmentation

BFresh Advantage

Unique offering: Avocado Oil

We will integrate it where Mission/Calavo/WestPak have “other fruit lines.”

6. Content Requirements
6.1 Client-Provided Content

Logo (existing)

Color palette (implicit from existing branding — confirm)

Photos and videos of:

Orchards

Packhouse

Processing line (pulp/guacamole)

Oil production facility

Team and grower partners

Certifications (PDFs + images)

6.2 Drafted by BFresh Digital Team

Placeholder copy for mock phase

English master copy v1 (will be refined by client)

Stock images for temporary mock (non-final)

6.3 Final Content Responsibilities

After layout approval, client provides:

Final text

Final imagery

Final product descriptions

Final certificates

7. Functional Requirements
7.1 Contact Form

Fields:

Company Name

Full Name

Email

Phone (optional)

Region (US, Canada, EU, Other)

Product Interest (Fresh, Guac/Pulp, Oil, Multiple)

Message

Submission: Email to client inbox (via basic Next.js API route).

No CRM integration for v1.

7.2 Embedded Media

YouTube/Vimeo embeds for:

Facility intro

Field/harvest walkthrough

Parallax image sections for visual impact.

7.3 Market Intelligence (Lite)

Static placeholder charts or embeds:

US avocado demand

HAC price trends

Future upgrade path:

Dashboard embeds from Google Looker/PowerBI.

7.4 Language Switcher

Stubbed button for "Español"

Future Spanish pages to be added later.

i18n architecture prepared (Next-intl or internal solution).

8. Technical Requirements
8.1 Technology Stack

Next.js 14 (App Router)

Tailwind CSS

React Server Components / Static Export (depending on hosting)

Framer Motion (light animations only)

No backend beyond contact-form API route

8.2 Performance Targets

Desktop Lighthouse ≥ 90

Mobile Lighthouse ≥ 80

Image optimization (Next/Image)

Lazy loading where appropriate

8.3 Accessibility

Alt tags

Semantic HTML

Color contrast matching WCAG AA

Keyboard nav basics

8.4 SEO Functionality

Per-page meta

Robots.txt + sitemap.xml

Open Graph tags

Clean URL structure (/packhouse, /guacamole, /oil)

8.5 Deployment & Handoff

Development environment: Vercel or local

Final handoff:

Repo

Deployment instructions

Assets packaged

Client chooses final hosting provider

Optional: Paid maintenance retainer

9. Assumptions

Client does not have a formal brand manual; branding will rely on existing logo + colors from current site.

Client will provide imagery/videos after mockup approval.

English content is acceptable for v1, Spanish comes later.

No auth, no dashboards, no backend integrations in v1.

Contact form email destination will be provided by client.

BFresh wants a “Mission/Calavo-level feel” but does not require exact feature parity.

Timeline and budget approval occurs after mockup phase.

10. Risks & Mitigations
Risk	Impact	Mitigation
Client delays in sending content	Medium	Use placeholders; freeze structure early
Too much scope creep after mock	High	Lock PRD; treat additions as v1.5 or v2
Using competitor images accidentally in public site	High	Placeholders only in mock stage; replace all before launch
No brand manual	Low	Extract palette from existing logo/site
Spanish content not ready	Low	Stubbed i18n; Spanish added post-launch
11. Project Structure for Repo (Initial)
bfresh-website/
  ├── docs/
  │     ├── PRD.md
  │     └── planning.md  (to be created next)
  ├── src/
  │     ├── app/
  │     │     ├── page.tsx        (Home)
  │     │     ├── packhouse/
  │     │     ├── guacamole/
  │     │     ├── oil/
  │     │     ├── certifications/
  │     │     ├── growers/
  │     │     ├── insights/
  │     │     └── contact/
  │     ├── components/
  │     ├── styles/
  │     └── lib/
  ├── public/
  │     └── (images, favicon)
  ├── package.json
  ├── tailwind.config.js
  └── README.md

12. Next Steps (For Planning.md)

Build mockup (Next.js skeleton + placeholder content)

Export static screenshots into PDF for client approval

Freeze final scope

Implement full site

Populate real content

QA, polish, responsive tuning

Handoff and deployment

Optional retainer proposal