import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$AsideTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AsideTitle;
  const { line1, line2, additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`flex flex-col my-8 ${additionalClasses}`, "class")} data-astro-cid-v4h4h3yp> <span data-astro-cid-v4h4h3yp>${line1}</span> <span data-astro-cid-v4h4h3yp>${line2}</span> </h1> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/AsideTitle.astro", void 0);

export { $$AsideTitle as $ };
