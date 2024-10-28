import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, g as renderHead, f as renderSlot } from './astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/karinatovar/Desktop/absent-altitude/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$CoordinateGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="coordinate-grid" data-astro-transition-persist="grid" data-astro-cid-6f7grujf> <div id="column-coordinates" class="column-coordinates" data-astro-cid-6f7grujf></div> <div id="row-coordinates" class="row-coordinates" data-astro-cid-6f7grujf></div> <div class="grid-overlay" data-astro-cid-6f7grujf></div> </div>  `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/CoordinateGrid.astro", "self");

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, body_classes = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body${addAttribute(`relative min-h-screen ${body_classes}`, "class")}> ${renderComponent($$result, "CoordinateGrid", $$CoordinateGrid, {})} <div class="content relative z-10 w-full h-screen min-h-fit p-12"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
