import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent } from './astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { h as $$ChevronDown } from './ZoomOut_DVtMBVmh.mjs';

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    onClick,
    type = "button",
    additionalClasses = "",
    children,
    "data-section": dataSection
  } = Astro2.props;
  return renderTemplate`${type === "link" ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`group button-wrapper ${additionalClasses}`, "class")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}<div class="button-effect" data-astro-cid-vnzlvqnm><div class="button-glow" data-astro-cid-vnzlvqnm></div></div></a>` : type === "textual" ? renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`text-based ${additionalClasses}`, "class")}${addAttribute(dataSection, "data-section")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</a>` : type === "textual-button" ? renderTemplate`<button${addAttribute(`text-based ${additionalClasses}`, "class")}${addAttribute(dataSection, "data-section")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</button>` : renderTemplate`<button type="button"${addAttribute(`group button-wrapper ${additionalClasses}`, "class")}${addAttribute(onClick, "onclick")} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}<div class="button-effect" data-astro-cid-vnzlvqnm><div class="button-glow" data-astro-cid-vnzlvqnm></div></div></button>`}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { crumbs } = Astro2.props;
  const pageTitles = {
    "work": "Work",
    "thoughts": "Thoughts",
    "about": "About"
  };
  const lastCrumb = crumbs[crumbs.length - 1];
  const currentPageTitle = pageTitles[lastCrumb.href.replace("/", "")] || lastCrumb.text;
  const updatedCrumbs = crumbs.map(
    (crumb, index) => index === crumbs.length - 1 ? { ...crumb, text: currentPageTitle } : crumb
  );
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" data-astro-cid-ilhxcym7> <ol class="breadcrumbs" data-astro-cid-ilhxcym7> ${updatedCrumbs.map((crumb, index) => renderTemplate`<li class="flex items-center" data-astro-cid-ilhxcym7> ${index > 0 && renderTemplate`<span data-astro-cid-ilhxcym7>&nbsp;/&nbsp;</span>`} ${index === updatedCrumbs.length - 1 ? renderTemplate`<div class="relative" data-astro-cid-ilhxcym7> ${Object.keys(pageTitles).includes(lastCrumb.href.replace("/", "")) ? renderTemplate`<button id="lastCrumbDropdown" class="dropdown-menu-trigger"${addAttribute(crumb.text, "data-page-title")} data-astro-cid-ilhxcym7> ${crumb.text} <span class="w-4 h-4 ml-1 transition-transform duration-300" id="chevronIcon" data-astro-cid-ilhxcym7> ${renderComponent($$result, "Icon.ChevronDown", $$ChevronDown, { "size": "14", "data-astro-cid-ilhxcym7": true })} </span> </button>` : renderTemplate`<span class="text-gray-900 font-medium" data-astro-cid-ilhxcym7>${crumb.text}</span>`} <div id="dropdownMenu" class="dropdown-menu hidden" data-astro-cid-ilhxcym7> <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" data-astro-cid-ilhxcym7> ${Object.entries(pageTitles).map(([key, value]) => {
    const shouldRender = key.toLowerCase() !== lastCrumb.text.toLowerCase();
    return shouldRender && renderTemplate`<a${addAttribute(`/${key}`, "href")} class="dropdown-menu-item" role="menuitem" data-astro-cid-ilhxcym7> ${value} </a>`;
  })} </div> </div> </div>` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "textual", "additionalClasses": "text-gray-900 text-base", "href": crumb.href, "data-astro-cid-ilhxcym7": true }, { "default": ($$result2) => renderTemplate`${crumb.text}` })}`} </li>`)} </ol> </nav>  `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/Breadcrumbs.astro", void 0);

const $$Astro = createAstro();
const $$AsideTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AsideTitle;
  const { line1, line2, additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`flex flex-col my-8 ${additionalClasses}`, "class")} data-astro-cid-v4h4h3yp> <span data-astro-cid-v4h4h3yp>${line1}</span> <span data-astro-cid-v4h4h3yp>${line2}</span> </h1> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/AsideTitle.astro", void 0);

export { $$Breadcrumbs as $, $$AsideTitle as a, $$Button as b };
