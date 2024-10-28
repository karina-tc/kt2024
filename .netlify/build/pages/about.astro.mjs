/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderTransition, f as renderSlot } from '../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_sAWoEO-F.mjs';
import { $ as $$ActivityLog, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_C9h13jiO.mjs';
import { $ as $$AsideTitle } from '../chunks/AsideTitle_CMk3WAaT.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$BackgroundImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BackgroundImage;
  const { src, classes = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`layout-background ${classes}`, "class")}> <img${addAttribute(src, "src")} alt="Background" class="w-full h-full object-cover"> </div>`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/BackgroundImage.astro", void 0);

const $$Astro$2 = createAstro();
const $$ShowcaseImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShowcaseImage;
  const {
    src,
    alt,
    additionalClasses = "",
    shineColor = "rgba(255, 255, 255, 0.4)",
    animationDuration = 2.5
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`shine-container ${additionalClasses}`, "class")}${addAttribute(`--shine-color: ${shineColor}; --animation-duration: ${animationDuration}s;`, "style")} data-astro-cid-j6fsigiy> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="shine-image" data-astro-cid-j6fsigiy> <div class="shine-overlay" data-astro-cid-j6fsigiy></div> </div> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/ShowcaseImage.astro", void 0);

const $$Astro$1 = createAstro();
const $$DetailsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DetailsLayout;
  const {
    title,
    breadcrumbs,
    asideTitle,
    subtitle,
    additionalClasses = "",
    showcaseImage = "",
    showcaseImageAlt = "",
    showcaseImageClasses = "",
    bgImage,
    bgImageClasses = "",
    layout_body_classes = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "body_classes": layout_body_classes }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="layout-main"> ${bgImage && renderTemplate`${renderComponent($$result2, "BackgroundImage", $$BackgroundImage, { "src": bgImage, "classes": bgImageClasses })}`} ${showcaseImage && renderTemplate`<section${addAttribute(`layout-showcase group/showcase ${showcaseImageClasses}`, "class")}> ${showcaseImageAlt && renderTemplate`<div class="layout-showcase-tag"> <div class="mb-1 flex gap-2 items-center"> ${renderComponent($$result2, "Icon.ActivityLog", $$ActivityLog, { "size": "14" })} <span class="font-bold pt-[2px]">The Prompt:</span> </div> <span>${showcaseImageAlt}</span> </div>`} ${renderComponent($$result2, "ShowcaseImage", $$ShowcaseImage, { "src": showcaseImage, "alt": showcaseImageAlt, "shineColor": "rgba(255, 255, 255, 0.25)" })} </section>`} <section${addAttribute(`layout-basis relative ${additionalClasses}`, "class")}> <aside class="layout-left-column"${addAttribute(renderTransition($$result2, "twusddbe", "fade", ""), "data-astro-transition-scope")}> <div class="layout-left-contents"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": breadcrumbs, "data-astro-transition-persist": "breadcrumbs", "data-astro-transition-scope": renderTransition($$result2, "fdqveylb", "", "breadcrumbs") })} ${renderComponent($$result2, "AsideTitle", $$AsideTitle, { ...asideTitle })} ${subtitle && renderTemplate`<p class="mt-2">${subtitle}</p>`} ${renderSlot($$result2, $$slots["left-column-extra"])} </div> </aside> <div class="layout-right-column"${addAttribute(renderTransition($$result2, "72o4352h", "slide", ""), "data-astro-transition-scope")}> <div class="details-content pt-10"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </section> </main> ` })}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/layouts/DetailsLayout.astro", "self");

const $$Astro = createAstro();
const $$SectionBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionBlock;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="block" data-astro-cid-zvdzuqhx> <h2 data-astro-cid-zvdzuqhx>${title}</h2> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/SectionBlock.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { text: "Karina Tovar", href: "/" },
    { text: "About", href: "/about" }
  ];
  return renderTemplate`${renderComponent($$result, "DetailsLayout", $$DetailsLayout, { "layout_body_classes": "bg-[url('/hero.png')] bg-cover", "title": "About Me", "showcaseImage": "/phone.png", "showcaseImageClasses": "max-h-[480px]", "showcaseImageAlt": "Old rotary phone seen from above, far away, in a blue calm serene background with desert tones like Dan Flavin. Styled after Tim Walker and James Bidgood.", "breadcrumbs": breadcrumbs, "additionalClasses": "", "asideTitle": {
    line1: "Hello",
    line2: "Stranger"
  }, "subtitle": "Published from Notion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionBlock", $$SectionBlock, { "title": "It All Started with a Phone" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>I was in grad school in 2013 working on a project and became obsessed with rotary phones. The anatomy of these old phones is a work of art. People used to be wired to these machines. They would tilt their heads while holding the phone between their ear and their neck. It forced you to feel its weight. It forced you to feel the weight of having a conversation.</p> <p>There was something about that which obsessed me. The idea. No. The problem that we were losing our humanity to technology by always having to be live. Not knowing how to live.</p> <p>So I spent months testing people's interactions with public phones. Building prototypes for the inner workings between a Raspberry Pi and the Twillio API. All so I could make a phone bench that would ring my phone when people sat. All so I could talk to strangers. All so I could help make their day better.</p> ` })} ${renderComponent($$result2, "SectionBlock", $$SectionBlock, { "title": "My Design Tenets" }, { "default": ($$result3) => renderTemplate` <p>At the end of the day helping products grow and become profitable is key to helping users be happy on their day to day and while interacting with your features. If your product sucks. No one will buy it.</p> ` })} ${renderComponent($$result2, "SectionBlock", $$SectionBlock, { "title": "It All Started with a Phone" }, { "default": ($$result3) => renderTemplate` <p>I was in grad school in 2013 working on a project and became obsessed with rotary phones. The anatomy of these old phones is a work of art. People used to be wired to these machines. They would tilt their heads while holding the phone between their ear and their neck. It forced you to feel its weight. It forced you to feel the weight of having a conversation.</p> <p>There was something about that which obsessed me. The idea. No. The problem that we were losing our humanity to technology by always having to be live. Not knowing how to live.</p> <p>So I spent months testing people's interactions with public phones. Building prototypes for the inner workings between a Raspberry Pi and the Twillio API. All so I could make a phone bench that would ring my phone when people sat. All so I could talk to strangers. All so I could help make their day better.</p> ` })} ${renderComponent($$result2, "SectionBlock", $$SectionBlock, { "title": "My Design Tenets" }, { "default": ($$result3) => renderTemplate` <p>At the end of the day helping products grow and become profitable is key to helping users be happy on their day to day and while interacting with your features. If your product sucks. No one will buy it.</p> ` })} ` })}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/about.astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
