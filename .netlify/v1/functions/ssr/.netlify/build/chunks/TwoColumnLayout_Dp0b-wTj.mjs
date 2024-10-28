import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderTransition, f as renderSlot } from './astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CxGfdv7S.mjs';
import { $ as $$Breadcrumbs, a as $$AsideTitle } from './AsideTitle_b8gzafSV.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$TwoColumnLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TwoColumnLayout;
  const {
    title,
    breadcrumbs,
    asideTitle,
    subtitle,
    additionalClasses = "",
    bgImage,
    bgImageClasses = "",
    layout_body_classes = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "body_classes": layout_body_classes }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute(`two-col-basis ${additionalClasses} relative`, "class")}> ${bgImage && renderTemplate`<div${addAttribute(`absolute inset-0 z-0 flex ${bgImageClasses}`, "class")}> <img${addAttribute(bgImage, "src")} alt="Background" class="w-full h-full object-cover"> </div>`} <aside class="two-col-left-column"${addAttribute(renderTransition($$result2, "mpqwftna", "fade", ""), "data-astro-transition-scope")}> <div class="two-col-left-contents"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": breadcrumbs, "data-astro-transition-persist": "breadcrumbs", "data-astro-transition-scope": renderTransition($$result2, "elyxpg2k", "", "breadcrumbs") })} ${renderComponent($$result2, "AsideTitle", $$AsideTitle, { "line1": asideTitle.line1, "line2": asideTitle.line2 })} ${subtitle && renderTemplate`<p class="two-col-subtitle"> ${subtitle} </p>`} ${renderSlot($$result2, $$slots["left-column-extra"])} </div> </aside> <section class="two-col-right-column"${addAttribute(renderTransition($$result2, "u56vbb72", "slide", ""), "data-astro-transition-scope")}> ${renderSlot($$result2, $$slots["default"])} </section> </main> ` })}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/layouts/TwoColumnLayout.astro", "self");

export { $$TwoColumnLayout as $ };
