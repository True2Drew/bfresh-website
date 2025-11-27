# BFresh Corporate Website — Planning Document

**Project**: BFresh Avocado Group – Corporate Website Rebuild  
**Document Version**: v1.0  
**Based on**: [BeFresh-PRD.md](../Bfresh-PRD.md)  
**Audience**: Cursor Dev Team

---

## Executive Summary

This document outlines the phased execution plan for rebuilding the BFresh corporate website. The project is structured into three distinct phases, with clear deliverables, dependencies, and success criteria at each stage.

**Core Objective**: Create a Mission Produce/Calavo/WestPak-level corporate website that establishes BFresh as a credible, professional, multinational-standard avocado supplier.

**Key Constraint**: This is a corporate credibility site, not a SaaS product. No backend complexity beyond a simple contact form API route.

---

## Phase 1: Mockup / Layout Build (v0.1)

### Objective
Create a visual mockup with placeholder content to generate client approval, validate site structure, and lock budget/scope before deep implementation.

### Duration Estimate
**5-7 business days**

### Deliverables

#### D0: v0.1 Placeholder Mock Layout (Mandatory)
- Complete Next.js 14 project scaffold with App Router
- All page routes structure (9 pages total)
- Core reusable components library
- Placeholder content (borrowed images, draft text, temporary colors)
- Basic responsive layout framework
- Light Framer Motion animations
- Static screenshots/PDF export for client review

#### D1: Technical Foundation
- Next.js 14 project initialization
- Tailwind CSS configuration
- Framer Motion integration
- Project directory structure
- Base component architecture

#### D2: Page Structure
- Home page (Corporate Mothership)
- About Us page
- Fresh Avocado Packhouse page
- Guacamole & Avocado Pulp Facility page
- Avocado Oil Production Facility page
- Grower Network / Our Growers page
- Quality & Certifications page
- Market Intelligence / Insights page (Lite v1)
- Contact & Trade Inquiries page

#### D3: Global Components
- Navigation component (English-first, Spanish selector stubbed)
- Footer component (address, contact, social links)
- Hero section component
- Section wrapper components
- Card components (product cards, feature cards)
- Responsive layout system

#### D4: Content Placeholders
- Borrowed images from industry references (Mission/Calavo/WestPak style)
- Placeholder copy (draft text, lorem, or extracted wording)
- Temporary color accents based on BFresh's current palette
- Video embed placeholders (YouTube/Vimeo structure)

**Critical Warning**: All borrowed/placeholder media must be clearly marked in code comments and MUST NOT be deployed publicly. These assets will be replaced in Phase 2.

### Dependencies
- Access to BFresh logo (existing)
- Current color palette reference (from existing site/logo)
- Client availability for mockup review and approval

### Success Criteria
- All 9 pages render with proper routing
- Responsive layout works on desktop, tablet, mobile
- Visual feel matches "Mission-level" quality
- Client can review via static screenshots/PDF
- Structure and content flow validated
- Budget and scope locked based on visuals

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Client delays in mockup review | Medium | Set clear review deadline; proceed with structure assumptions |
| Placeholder images accidentally deployed | High | Clear comments, separate placeholder folder, deployment checklist |
| Scope creep during mockup review | High | Lock PRD; treat additions as v1.5 or v2 |
| Color palette unclear | Low | Extract from existing logo/site; document assumptions |

### Client Asset Requirements (Phase 1)
- [ ] Logo file (SVG/PNG preferred)
- [ ] Color palette confirmation (or extraction from existing assets)
- [ ] Approval to use placeholder images for mockup only

---

## Phase 2: Full Implementation

### Objective
Replace all placeholder content with real client-provided assets, implement full functionality, and achieve production-ready state.

### Duration Estimate
**10-14 business days** (dependent on client content delivery)

### Deliverables

#### D1: Content Replacement
- Replace all placeholder images with client-provided photos/videos
- Replace all placeholder text with final English content
- Integrate real certifications (PDFs + images)
- Add real grower information and product descriptions
- Replace temporary colors with final brand palette

#### D2: Contact Form Implementation
- Build contact form component with all required fields:
  - Company Name
  - Full Name
  - Email
  - Phone (optional)
  - Region (US, Canada, EU, Other)
  - Product Interest (Fresh, Guac/Pulp, Oil, Multiple)
  - Message
- Create Next.js API route (`/api/contact`)
- Implement email sending (via Nodemailer, SendGrid, or similar)
- Add form validation and error handling
- Add success/error user feedback

#### D3: Responsive Design Refinement
- Complete mobile optimization
- Tablet breakpoint refinement
- Desktop layout polish
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

#### D4: Motion & Animation
- Final Framer Motion effects (light, Mission-style)
- Parallax scroll effects
- Smooth transitions
- Performance-optimized animations

#### D5: SEO Implementation
- Per-page metadata (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- `robots.txt` configuration
- `sitemap.xml` generation
- Structured data (JSON-LD) where appropriate
- Clean URL structure validation

#### D6: Multilingual Architecture
- i18n architecture setup (Next-intl or internal solution)
- Language switcher component (stubbed for Spanish)
- Route structure prepared for `/es/*` pages
- Content structure ready for Spanish translation (v1.5)

#### D7: Media Integration
- YouTube/Vimeo video embeds (facility intro, field walkthrough)
- Optimized image loading (Next.js Image component)
- Lazy loading implementation
- Image optimization and compression

#### D8: Market Intelligence (Lite)
- Static placeholder charts or embeds
- US avocado demand visualization
- HAC price trends display
- Future upgrade path documented (Google Looker/PowerBI integration)

### Dependencies
- **Client-provided assets** (critical path):
  - [ ] Final logo and brand assets
  - [ ] High-resolution photos (orchards, packhouse, processing, oil facility, team, growers)
  - [ ] Videos (facility overview, orchard walkthrough)
  - [ ] Certifications (PDFs + images)
  - [ ] Final English copy for all pages
  - [ ] Contact form email destination
- Technical:
  - Email service configuration (SendGrid, Nodemailer, etc.)
  - Hosting environment decision (Vercel, or client's choice)

### Success Criteria
- All placeholder content replaced with real assets
- Contact form sends emails successfully
- All pages pass responsive design checks
- SEO metadata complete and validated
- Performance targets met (Desktop Lighthouse ≥90, Mobile ≥80)
- Multilingual architecture ready for Spanish content
- No placeholder media in production code

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Client delays in content delivery | High | Use placeholders; freeze structure early; set clear deadlines |
| Content quality insufficient | Medium | Provide content guidelines; offer content creation support |
| Email service configuration issues | Medium | Test early; have fallback options; document setup clearly |
| Scope creep after content integration | High | Lock PRD; treat additions as v1.5 or v2; change request process |

---

## Phase 3: QA & Handoff

### Objective
Ensure production-ready quality, optimize performance, and prepare comprehensive handoff documentation.

### Duration Estimate
**3-5 business days**

### Deliverables

#### D1: Responsive QA
- Test all pages on multiple devices:
  - Desktop (1920px, 1440px, 1280px)
  - Tablet (768px, 1024px)
  - Mobile (375px, 414px, 390px)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Touch interaction testing
- Navigation flow validation

#### D2: Accessibility Baseline
- Alt tags on all images
- Semantic HTML validation
- Color contrast checks (WCAG AA compliance)
- Keyboard navigation testing
- Screen reader compatibility (basic)
- ARIA labels where needed

#### D3: Performance Optimization
- Lighthouse audit (target: Desktop ≥90, Mobile ≥80)
- Image optimization and lazy loading
- Code splitting optimization
- Bundle size analysis
- Core Web Vitals optimization
- Caching strategy implementation

#### D4: Final Cleanup
- Code review and refactoring
- Remove unused dependencies
- Clean up console logs and debug code
- Remove all placeholder comments (or convert to documentation)
- Verify no placeholder media in codebase
- Final visual polish and spacing adjustments

#### D5: Deployment Preparation
- Environment configuration files
- Build process validation
- Static export testing (if applicable)
- Environment variable documentation
- Deployment checklist

#### D6: Documentation & Handoff
- **README.md** with:
  - Project overview
  - Setup instructions
  - Development workflow
  - Build and deployment commands
  - Environment variables
  - Dependencies list
- **DEPLOYMENT.md** with:
  - Hosting provider options
  - Step-by-step deployment guide
  - Environment setup
  - Domain configuration
  - SSL certificate setup
  - Email service configuration
- **HANDOFF.md** with:
  - Project structure overview
  - Component documentation
  - Content management guide
  - Future maintenance notes
  - Spanish content integration guide (v1.5)
  - Optional retainer proposal

#### D7: Repo Packaging
- Clean git history
- Final commit with production-ready state
- Tagged release (v1.0)
- Asset organization
- Documentation in place

### Dependencies
- All Phase 2 deliverables complete
- Client hosting decision (if not Vercel)
- Email service account setup

### Success Criteria
- All QA checks passed
- Accessibility baseline met (WCAG AA)
- Performance targets achieved
- Zero placeholder content in production
- Complete documentation delivered
- Client can deploy independently (or with minimal support)

### Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Performance targets not met | Medium | Early optimization; iterative improvements; client consultation on trade-offs |
| Accessibility issues discovered late | Medium | Early accessibility checks; use automated tools |
| Deployment complications | Low | Test deployment early; provide clear documentation; offer deployment support |

---

## Technical Architecture

### Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 (stable) - **Tailwind v4 must NOT be used for this project until evaluated**
- **Animations**: Framer Motion (light animations only)
- **i18n**: Next-intl or internal solution (stubbed for Spanish)
- **Email**: Next.js API route + email service (SendGrid/Nodemailer)
- **Hosting**: Vercel (development) / Client choice (production)

### Project Structure
```
bfresh-website/
  ├── docs/
  │     ├── BeFresh-PRD.md
  │     ├── planning.md
  │     └── tasks.md
  ├── src/
  │     ├── app/
  │     │     ├── layout.tsx
  │     │     ├── page.tsx (Home)
  │     │     ├── about/
  │     │     │     └── page.tsx
  │     │     ├── packhouse/
  │     │     │     └── page.tsx
  │     │     ├── guacamole/
  │     │     │     └── page.tsx
  │     │     ├── oil/
  │     │     │     └── page.tsx
  │     │     ├── certifications/
  │     │     │     └── page.tsx
  │     │     ├── growers/
  │     │     │     └── page.tsx
  │     │     ├── insights/
  │     │     │     └── page.tsx
  │     │     ├── contact/
  │     │     │     └── page.tsx
  │     │     └── api/
  │     │           └── contact/
  │     │                 └── route.ts
  │     ├── components/
  │     │     ├── layout/
  │     │     │     ├── Nav.tsx
  │     │     │     └── Footer.tsx
  │     │     ├── sections/
  │     │     │     ├── Hero.tsx
  │     │     │     ├── SectionWrapper.tsx
  │     │     │     └── ...
  │     │     └── ui/
  │     │           ├── Card.tsx
  │     │           ├── Button.tsx
  │     │           └── ...
  │     ├── styles/
  │     │     └── globals.css
  │     └── lib/
  │           ├── utils.ts
  │           └── constants.ts
  ├── public/
  │     ├── images/
  │     ├── videos/
  │     └── favicon.ico
  ├── package.json
  ├── tailwind.config.js
  ├── next.config.js
  ├── tsconfig.json
  └── README.md
```

### Design Principles
- **Desktop-first design** with mobile optimization
- **Mission Produce/Calavo/WestPak** visual quality benchmark
- **Clean, corporate-grade** styling
- **Subtle animations** (Mission-style parallax)
- **Reusable components** (no copy-paste architecture)
- **Scalable structure** (template for future B2B builds)

---

## Timeline Summary

| Phase | Duration | Start Condition |
|-------|----------|-----------------|
| Phase 1: Mockup / Layout Build | 5-7 days | Project kickoff |
| Phase 2: Full Implementation | 10-14 days | Client approval of v0.1 mockup + content delivery |
| Phase 3: QA & Handoff | 3-5 days | Phase 2 completion |
| **Total** | **18-26 days** | |

**Note**: Timeline assumes client content delivery within Phase 2 window. Delays in content delivery will extend Phase 2 duration.

---

## Client Asset Checklist

### Required for Phase 1 (Mockup)
- [ ] Logo file (SVG/PNG)
- [ ] Color palette reference
- [ ] Approval to use placeholder images

### Required for Phase 2 (Implementation)
- [ ] Final logo and brand assets
- [ ] High-resolution photos:
  - [ ] Orchards
  - [ ] Packhouse
  - [ ] Processing line (pulp/guacamole)
  - [ ] Oil production facility
  - [ ] Team photos
  - [ ] Grower partner photos
- [ ] Videos:
  - [ ] Facility overview
  - [ ] Orchard walkthrough
- [ ] Certifications:
  - [ ] PDF files
  - [ ] Certification images
- [ ] Final English copy for all pages
- [ ] Contact form email destination

### Optional (v1.5+)
- [ ] Spanish content translations
- [ ] Additional video content
- [ ] Case studies or testimonials

---

## Quality Standards

### Code Quality
- Clean, repeatable, scalable engineering practices
- Reusable components (no copy-paste)
- Next.js 14 + Tailwind idioms
- TypeScript for type safety
- Proper error handling
- Clear code comments (especially for placeholders)

### Visual Quality
- "Mission-level" visual standard
- Consistent spacing and typography
- Professional color usage
- High-quality imagery (final assets)
- Smooth animations (light, not distracting)

### Performance Standards
- Desktop Lighthouse score ≥ 90
- Mobile Lighthouse score ≥ 80
- Fast page load times
- Optimized images
- Efficient code splitting

### Accessibility Standards
- WCAG AA compliance
- Semantic HTML
- Alt tags on images
- Keyboard navigation
- Color contrast compliance

---

## Next Steps

1. **Review this planning document** with the team
2. **Begin Phase 1** (see [tasks.md](./tasks.md) for detailed task breakdown)
3. **Set up project scaffold** (Next.js 14 + Tailwind)
4. **Create v0.1 mockup** for client approval
5. **Lock scope** based on mockup feedback
6. **Proceed to Phase 2** after approval

---

## Questions & Clarifications

Before beginning implementation, confirm:
- [ ] Client hosting preference (Vercel vs. other)
- [ ] Email service preference (SendGrid, Nodemailer, other)
- [ ] Color palette extraction method (from existing site/logo)
- [ ] Content delivery timeline expectations
- [ ] Spanish content timeline (v1.5 vs. later)

---

**Document Status**: Ready for Implementation  
**Last Updated**: Planning Phase  
**Next Review**: After Phase 1 completion

