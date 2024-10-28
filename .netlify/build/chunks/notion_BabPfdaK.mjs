import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute } from './astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
/* empty css                          */
import { Client } from '@notionhq/client';

const $$Astro$1 = createAstro();
const $$Gem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gem;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="0" height="0" data-astro-cid-twszcsbx> <defs data-astro-cid-twszcsbx> <linearGradient id="desert-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-twszcsbx> <stop offset="0%" style="stop-color:#f69e51" data-astro-cid-twszcsbx></stop> <stop offset="50%" style="stop-color:#efbff9" data-astro-cid-twszcsbx></stop> <stop offset="100%" style="stop-color:#7245cd" data-astro-cid-twszcsbx></stop> </linearGradient> <linearGradient id="desert-gradient-1-dark" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-twszcsbx> <stop offset="0%" style="stop-color:#d88b46" data-astro-cid-twszcsbx></stop> <stop offset="50%" style="stop-color:#d6a9e0" data-astro-cid-twszcsbx></stop> <stop offset="100%" style="stop-color:#5f3aab" data-astro-cid-twszcsbx></stop> </linearGradient> <linearGradient id="desert-gradient-1-light" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-twszcsbx> <stop offset="0%" style="stop-color:#ffb76c" data-astro-cid-twszcsbx></stop> <stop offset="50%" style="stop-color:#ffd4ff" data-astro-cid-twszcsbx></stop> <stop offset="100%" style="stop-color:#8f5ce0" data-astro-cid-twszcsbx></stop> </linearGradient> </defs> </svg> <svg class="gem" viewBox="0 0 20 20" data-astro-cid-twszcsbx> <!-- Main diamond shape --> <polygon class="gem-shape gem-1" points="10,0 20,10 10,20 0,10" data-astro-cid-twszcsbx></polygon> <!-- Left facet --> <polygon class="gem-shape gem-1-dark" points="0,10 10,0 10,20" data-astro-cid-twszcsbx></polygon> <!-- Right facet --> <polygon class="gem-shape gem-1-light" points="20,10 10,0 10,20" data-astro-cid-twszcsbx></polygon> <!-- Center line --> <line x1="10" y1="0" x2="10" y2="20" stroke="#ffffff" stroke-width="0.5" opacity="0.3" data-astro-cid-twszcsbx></line> <!-- Sparkle elements --> <circle class="sparkle" cx="5" cy="5" r="0.5" data-astro-cid-twszcsbx></circle> <circle class="sparkle" cx="15" cy="15" r="0.5" data-astro-cid-twszcsbx></circle> <circle class="sparkle" cx="15" cy="5" r="0.5" data-astro-cid-twszcsbx></circle> <circle class="sparkle" cx="5" cy="15" r="0.5" data-astro-cid-twszcsbx></circle> </svg> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/Gem.astro", void 0);

const $$Astro = createAstro();
const $$CategoryPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryPill;
  const {
    category,
    isButton = false,
    isActive = false
  } = Astro2.props;
  const baseClasses = "flex w-fit justify-center flex-wrap gap-2 uppercase text-xs font-mono tracking-widest rounded-full px-4 py-1.5 transition-all duration-300";
  const buttonClasses = "bg-white text-black cursor-pointer shadow-md shadow-slate-300/50 hover:-translate-y-[1px] hover:shadow-lg hover:bg-black hover:text-white";
  const pillClasses = "bg-black text-white";
  return renderTemplate`${isButton ? renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute([baseClasses, buttonClasses, { "category-active": isActive }], "class:list")}${addAttribute(category, "data-category")} data-astro-cid-wsafccrt>${category}</button>` : renderTemplate`<span${addAttribute([baseClasses, pillClasses], "class:list")} data-astro-cid-wsafccrt>${category}</span>`}`;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/CategoryPill.astro", void 0);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SPOTIFY_CLIENT_ID": "59e2f90df400498ca39f6bd566646240", "PUBLIC_SPOTIFY_CLIENT_SECRET": "6f46e11cfd8d4c48b915256830168830", "PUBLIC_SPOTIFY_REFRESH_TOKEN": "AQBCScgwS9AeI3Xb2YKwRIgypOvPGo1hJlNMil_tvmney3gW1L0XCkOaPTyeOWxjm__3JzK9qUk0nY2Pyp0tafLhR7xeYhUUco1x4BExtuezxhCIc6X-oizxml8xppH29wk", "SITE": undefined, "SSR": true};
const getEnvVar = (key) => {
  if (Object.assign(__vite_import_meta_env__, { NOTION_API_KEY: "ntn_t305348570938V63mHHTC1rUqzNgl2mcJ752eYQk3RTeGw", NOTION_DATABASE_ID: "12b0b6007e8d8065b2f4f16338afe378", _: process.env._ })[key]) {
    return Object.assign(__vite_import_meta_env__, { NOTION_API_KEY: "ntn_t305348570938V63mHHTC1rUqzNgl2mcJ752eYQk3RTeGw", NOTION_DATABASE_ID: "12b0b6007e8d8065b2f4f16338afe378", _: process.env._ })[key];
  }
  if (process.env[key]) {
    return process.env[key];
  }
  throw new Error(`Environment variable ${key} is not set`);
};
const notion = new Client({
  auth: getEnvVar("NOTION_API_KEY")
});
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
async function getThoughts() {
  const response = await notion.databases.query({
    database_id: getEnvVar("NOTION_DATABASE_ID"),
    filter: {
      property: "Status",
      status: {
        equals: "Live"
      }
    },
    sorts: [
      {
        property: "Date",
        direction: "descending"
      }
    ]
  });
  const thoughtsWithContent = await Promise.all(response.results.map(async (page) => {
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
      page_size: 3
      // Fetch first 3 blocks
    });
    const previewText = blocks.results.filter((block) => block.type === "paragraph").map((block) => block.paragraph.rich_text.map((text) => text.plain_text).join("")).join(" ");
    const { properties } = page;
    return {
      title: properties.Title.title[0].plain_text,
      date: formatDate(properties.Date.date.start),
      categories: properties.Categories.multi_select.map((cat) => cat.name),
      href: `/thoughts/${properties.Slug.rich_text[0].plain_text}`,
      content: previewText
    };
  }));
  return thoughtsWithContent;
}
async function getThoughtContent(slug) {
  const response = await notion.databases.query({
    database_id: getEnvVar("NOTION_DATABASE_ID"),
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug
      }
    }
  });
  if (!response.results.length) {
    return null;
  }
  const page = response.results[0];
  const blocks = await notion.blocks.children.list({
    block_id: page.id
  });
  const showcaseProperty = page.properties.showcase;
  let showcaseImage = null;
  if (showcaseProperty?.files?.length > 0) {
    const file = showcaseProperty.files[0];
    showcaseImage = file.type === "external" ? file.external.url : file.file.url;
  }
  return {
    title: page.properties.Title.title[0].plain_text,
    date: formatDate(page.properties.Date.date.start),
    categories: page.properties.Categories.multi_select.map((cat) => cat.name),
    content: blocks.results,
    showcase: showcaseImage
    // Changed from showcase_image to showcase
  };
}

export { $$Gem as $, $$CategoryPill as a, getThoughts as b, getThoughtContent as g };
