/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$TwoColumnLayout } from '../chunks/TwoColumnLayout_B0hcKSFr.mjs';
import { d as $$Button } from '../chunks/Breadcrumbs_C9h13jiO.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { brow_text, title, image, body, alt_text, additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${additionalClasses}`, "class")} data-astro-cid-dohjnao5> ${brow_text && renderTemplate`<p class="brow-text" data-astro-cid-dohjnao5>${brow_text}</p>`} ${image && renderTemplate`<img${addAttribute(image, "src")}${addAttribute(alt_text, "alt")} data-astro-cid-dohjnao5>`} <h2 class="text-2xl" data-astro-cid-dohjnao5>${title}</h2> <div class="flex flex-col gap-4" data-astro-cid-dohjnao5> <p data-astro-cid-dohjnao5>${body}</p> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/Card.astro", void 0);

const workProjects = [
  {
    year: "2024",
    brow_text: "Tropic",
    title: "Building a product-led insights platform for finance and procurement teams",
    body: "FinTech · 2023 - Current",
    image: "https://placehold.co/400X200",
    alt_text: "Project image",
    href: "#"
  },
  {
    year: "2023",
    brow_text: "Mystery + Glue",
    title: "Pouring data into workplace interactions for HR teams to build a sense of community in their employees",
    body: "Events & HR · 2023 - 2022",
    image: "https://placehold.co/400X200",
    alt_text: "Project image",
    href: "#"
  },
  {
    year: "2022",
    brow_text: "Teikametrics",
    title: "Restructuring PPC advertising through empathy for medium and small size businesses",
    body: "AdTech · 2020 - 2022",
    image: "https://placehold.co/400X200",
    alt_text: "Project image",
    href: "#"
  },
  {
    year: "2020",
    brow_text: "Rejoiner",
    title: "Making foundational changes to email marketing through rule based, fluid and intuitive workflows",
    body: "MarTech · 2015 - 2020",
    image: "https://placehold.co/400X200",
    alt_text: "Project image",
    href: "#"
  }
];

const $$Work = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { text: "Karina Tovar", href: "/" },
    { text: "Work", href: "/work" }
  ];
  const projectsByYear = workProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${renderComponent($$result, "TwoColumnLayout", $$TwoColumnLayout, { "layout_body_classes": "bg-[url('/hero.png')] bg-cover", "title": "Karina Tovar - My Work", "breadcrumbs": breadcrumbs, "asideTitle": {
    line1: "Happy Pixels",
    line2: "Better Lives"
  }, "subtitle": "Timeline of my work with several product partners", "data-astro-cid-jljc7dey": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="timeline" data-astro-cid-jljc7dey> ${sortedYears.map((year, index) => renderTemplate`<div class="year-section" data-astro-cid-jljc7dey> <div class="year-label" data-astro-cid-jljc7dey> <h3 class="year-note" data-astro-cid-jljc7dey>${year}</h3> <span class="year-connector" data-astro-cid-jljc7dey></span> </div> <div class="projects-row" data-astro-cid-jljc7dey> ${projectsByYear[year].map((project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "brow_text": project.brow_text, "title": project.title, "body": project.body, "image": project.image, "alt_text": project.alt_text, "data-astro-cid-jljc7dey": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "type": "link", "href": "/project-details", "additionalClasses": "w-full", "data-astro-cid-jljc7dey": true }, { "default": ($$result4) => renderTemplate`View Project` })} ` })}`)} </div> </div>`)} </div> ` })} `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/work.astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
