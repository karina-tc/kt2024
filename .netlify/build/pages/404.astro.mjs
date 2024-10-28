/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_sAWoEO-F.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oops", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrapper" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404: Well Shoot</h1> <p data-astro-cid-zetdm5md>Sorry, I may have missled you.</p> <a href="/" class="underline underline-offset-8 decoration-slate-300" data-astro-cid-zetdm5md>Go back to homepage</a> </section> ` })} `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/404.astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
