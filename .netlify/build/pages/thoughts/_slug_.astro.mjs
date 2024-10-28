/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro, f as renderSlot, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { a as $$ArrowLeft, b as $$Layers } from '../../chunks/ZoomOut_DVtMBVmh.mjs';
/* empty css                                     */
import { $ as $$Layout } from '../../chunks/Layout_CxGfdv7S.mjs';
import { $ as $$Gem, a as $$CategoryPill, g as getThoughtContent, b as getThoughts } from '../../chunks/notion_BabPfdaK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="link-wrapper group" data-astro-cid-7a7bzblm> <span class="button-circle" data-astro-cid-7a7bzblm> ${renderComponent($$result, "Icon.ArrowLeft", $$ArrowLeft, { "size": "18", "stroke-width": "4", "class": "icon-arrow", "data-astro-cid-7a7bzblm": true })} <span class="icon-circle-fill" data-astro-cid-7a7bzblm>&nbsp;</span> </span> <span class="link-text" data-astro-cid-7a7bzblm>Back to ${text}</span> </a> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/BackButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$ThoughtLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThoughtLayout;
  const { title, date, categories, showcase } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-d7e67ft2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-lg thoughts-container" data-astro-cid-d7e67ft2> ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/thoughts", "text": "Thoughts", "data-astro-cid-d7e67ft2": true })} <header class="thoughts-header" data-astro-cid-d7e67ft2> <h1 data-astro-cid-d7e67ft2>${title}</h1> <div class="date-container" data-astro-cid-d7e67ft2> ${renderComponent($$result2, "Gem", $$Gem, { "data-astro-cid-d7e67ft2": true })} <time data-astro-cid-d7e67ft2>${date}</time> </div> <div class="flex justify-center gap-2" data-astro-cid-d7e67ft2> ${categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": category, "isActive": true, "data-astro-cid-d7e67ft2": true })}`)} </div> </header> ${showcase && renderTemplate`<div class="showcase-image-wrapper relative" data-astro-cid-d7e67ft2> <img${addAttribute(showcase, "src")}${addAttribute(title, "alt")} class="showcase-image z-10" data-astro-cid-d7e67ft2> <div class="absolute m-auto p-4 flex gap-1 items-center justify-center" data-astro-cid-d7e67ft2> ${renderComponent($$result2, "Icon.Layers", $$Layers, { "size": "14", "data-astro-cid-d7e67ft2": true })} <span data-astro-cid-d7e67ft2>Painting...</span> </div> </div>`} <section class="thought-content animate-slide" data-astro-cid-d7e67ft2> ${renderSlot($$result2, $$slots["default"])} </section> </article> ` })} `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/layouts/ThoughtLayout.astro", void 0);

function renderNotionBlock(block) {
  switch (block.type) {
    case "paragraph":
      return `<p>${block.paragraph.rich_text.map((text) => text.plain_text).join("")}</p>`;
    case "heading_1":
      return `<h1>${block.heading_1.rich_text.map((text) => text.plain_text).join("")}</h1>`;
    case "heading_2":
      return `<h2>${block.heading_2.rich_text.map((text) => text.plain_text).join("")}</h2>`;
    case "heading_3":
      return `<h3>${block.heading_3.rich_text.map((text) => text.plain_text).join("")}</h3>`;
    case "bulleted_list_item":
      return `<li>${block.bulleted_list_item.rich_text.map((text) => text.plain_text).join("")}</li>`;
    case "numbered_list_item":
      return `<ol><li>${block.numbered_list_item.rich_text.map((text) => text.plain_text).join("")}</li></ol>`;
    case "quote":
      return `<blockquote>${block.quote.rich_text.map((text) => text.plain_text).join("")}</blockquote>`;
    case "callout":
      return `
        <div class="callout ${block.callout.color}">
          ${block.callout.icon?.emoji ? `<span class="callout-icon">${block.callout.icon.emoji}</span>` : ""}
          <div class="callout-content">
            ${block.callout.rich_text.map((text) => text.plain_text).join("")}
          </div>
        </div>
      `;
    case "image":
      const imageUrl = block.image.type === "external" ? block.image.external.url : block.image.file.url;
      const caption = block.image.caption?.length ? block.image.caption.map((text) => text.plain_text).join("") : "";
      return `
        <figure>
          <img src="${imageUrl}" alt="${caption}" loading="lazy" />
          ${caption ? `<figcaption>${caption}</figcaption>` : ""}
        </figure>
      `;
    case "divider":
      return `<hr class="notion-hr" />`;
    case "video":
      if (block.video.type === "external") {
        const videoUrl = block.video.external.url;
        if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
          const videoId = videoUrl.includes("youtube.com") ? videoUrl.split("v=")[1] : videoUrl.split("youtu.be/")[1];
          return `
            <div class="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/${videoId}"
                title="YouTube video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          `;
        } else if (videoUrl.includes("vimeo.com")) {
          const videoId = videoUrl.split("vimeo.com/")[1];
          return `
            <div class="video-wrapper">
              <iframe
                src="https://player.vimeo.com/video/${videoId}"
                title="Vimeo video"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          `;
        }
        return `<video controls src="${videoUrl}" class="video-player"></video>`;
      } else {
        return `<video controls src="${block.video.file.url}" class="video-player"></video>`;
      }
    default:
      console.log("Unhandled block type:", block.type);
      return "";
  }
}

const $$Astro = createAstro();
async function getStaticPaths() {
  const thoughts = await getThoughts();
  return thoughts.map((thought) => ({
    params: {
      slug: thought.href.split("/").pop()
    }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const thought = await getThoughtContent(slug);
  if (!thought) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "ThoughtLayout", $$ThoughtLayout, { "title": thought.title, "date": thought.date, "categories": thought.categories, "showcase": thought.showcase }, { "default": ($$result2) => renderTemplate`${thought.content.map((block) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(renderNotionBlock(block))}` })}`)}` })}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/thoughts/[slug].astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/thoughts/[slug].astro";
const $$url = "/thoughts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
