/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderTransition, d as renderComponent, b as createAstro } from '../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$TwoColumnLayout } from '../chunks/TwoColumnLayout_Dp0b-wTj.mjs';
import { c as $$ArrowRight } from '../chunks/ZoomOut_DVtMBVmh.mjs';
import { $ as $$Gem, b as getThoughts, a as $$CategoryPill } from '../chunks/notion_BabPfdaK.mjs';
/* empty css                                    */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Row = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Row;
  const { title, date, categories, href, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="row group" data-row${addAttribute(date, "data-date")}${addAttribute(categories.join(","), "data-categories")}${addAttribute(`row-${title}`, "data-astro-transition-persist")} data-astro-cid-is6objqw${addAttribute(renderTransition($$result, "ncwi7wtw", "", `row-${title}`), "data-astro-transition-scope")}> <div class="marker !flex !items-center" data-astro-cid-is6objqw> ${renderComponent($$result, "Gem", $$Gem, { "variant": categories.includes("Process") ? "process" : "default", "data-astro-cid-is6objqw": true })} </div> <div class="details" data-astro-cid-is6objqw> <h3 data-astro-cid-is6objqw>${title}</h3> <p data-astro-cid-is6objqw>${date} · ${categories.join(", ")}</p> ${content && renderTemplate`<div class="teaser" data-astro-cid-is6objqw> <p data-astro-cid-is6objqw>${`${content.slice(0, 100)}...`}</p> </div>`} </div> <span class="arrow" data-astro-cid-is6objqw> ${renderComponent($$result, "Icon.ArrowRight", $$ArrowRight, { "size": "18", "data-astro-cid-is6objqw": true })} </span> </a> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/Row.astro", "self");

const $$Astro = createAstro();
const $$Thoughts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thoughts;
  const breadcrumbs = [
    { text: "Karina Tovar", href: "/" },
    { text: "Thoughts", href: "/thoughts" }
  ];
  const thoughts = await getThoughts();
  const allCategories = [...new Set(thoughts.flatMap((thought) => thought.categories))];
  const initialCategory = Astro2.url.searchParams.get("category") || "all";
  return renderTemplate`${renderComponent($$result, "TwoColumnLayout", $$TwoColumnLayout, { "layout_body_classes": "bg-[url('/hero.png')] bg-cover", "title": "Karina Tovar - Product Designer", "breadcrumbs": breadcrumbs, "additionalClasses": "[&>.right-column]:h-full", "asideTitle": {
    line1: "Product Designer",
    line2: "Pixel Philosopher"
  }, "subtitle": "USA Based \xB7 Listening to Music", "data-astro-cid-qm3446rb": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="thoughts-container" class="w-full max-h-[80vh] max-w-[640px] overflow-y-auto flex flex-col gap-3 justify-start pr-10 py-5 hide-scrollbar" data-astro-cid-qm3446rb> ${thoughts.map((thought) => renderTemplate`${renderComponent($$result2, "Row", $$Row, { "title": thought.title, "date": thought.date, "categories": thought.categories, "href": thought.href, "content": thought.content, "data-astro-cid-qm3446rb": true })}`)} </section> `, "left-column-extra": ($$result2) => renderTemplate`<div class="categories-list" data-astro-cid-qm3446rb> <ul class="flex flex-wrap gap-2" data-astro-cid-qm3446rb> ${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": "All", "isButton": true, "isActive": initialCategory === "all", "data-astro-cid-qm3446rb": true })} ${allCategories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": category, "isButton": true, "isActive": initialCategory === category, "data-astro-cid-qm3446rb": true })}`)} </ul> </div>` })}  `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/thoughts.astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/thoughts.astro";
const $$url = "/thoughts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thoughts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
