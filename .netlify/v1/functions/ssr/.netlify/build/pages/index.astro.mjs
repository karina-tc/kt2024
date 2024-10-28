/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from '../chunks/astro/server_DSN01Tpq.mjs';
import 'kleur/colors';
import { $ as $$TwoColumnLayout } from '../chunks/TwoColumnLayout_B0hcKSFr.mjs';
import { e as $$EnvelopeClosed, f as $$TwitterLogo, g as $$GitHubLogo, h as $$SpeakerLoud, d as $$Button } from '../chunks/Breadcrumbs_C9h13jiO.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const { className = "", links = [
    {
      href: "https://github.com/karina-tc",
      icon: "GitHubLogo",
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/karina-tovar-castro/",
      icon: "LinkedIn",
      label: "LinkedIn"
    },
    {
      href: "https://x.com/karina_tovarc",
      icon: "TwitterLogo",
      label: "Twitter"
    },
    {
      href: "mailto:hello@karinatovar.com",
      icon: "EnvelopeClosed",
      label: "Email"
    }
  ] } = Astro2.props;
  const getIcon = (iconName) => {
    switch (iconName) {
      case "GitHubLogo":
        return $$GitHubLogo;
      case "TwitterLogo":
        return $$TwitterLogo;
      case "EnvelopeClosed":
        return $$EnvelopeClosed;
      default:
        return null;
    }
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center gap-4 ${className}`, "class")} data-astro-cid-dv46nlzh> ${links.map(({ href, icon, label }) => {
    const IconComponent = getIcon(icon);
    return renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="relative hover:underline group"${addAttribute(label, "aria-label")} data-astro-cid-dv46nlzh> <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 pointer-events-none transition-opacity group-hover:opacity-100" data-astro-cid-dv46nlzh> ${label} </span> ${icon === "LinkedIn" ? renderTemplate`<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-dv46nlzh> <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-astro-cid-dv46nlzh></path> </svg>` : IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "size": "20", "data-astro-cid-dv46nlzh": true })}`} </a>`;
  })} </div> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/SocialIcons.astro", void 0);

const $$Astro$1 = createAstro();
const $$SpotifyHoverCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpotifyHoverCard;
  const { isPlaying, artist, songName, albumArt, songUrl, type = "track" } = Astro2.props;
  const getDisplayText = () => {
    if (isPlaying) return artist;
    return artist;
  };
  return renderTemplate`${maybeRenderHead()}<div class="group relative inline-block" data-astro-cid-rwtsljry> <span class="flex items-center gap-1.5" data-astro-cid-rwtsljry> ${renderComponent($$result, "Icon.SpeakerLoud", $$SpeakerLoud, { "size": "14", "data-astro-cid-rwtsljry": true })} <span data-astro-cid-rwtsljry>Listening to</span> <span class="underline-offset-4 hover:underline transition-colors cursor-pointer" data-astro-cid-rwtsljry> ${getDisplayText} </span> </span> ${songName && renderTemplate`<div class="opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200 transition-all duration-200" data-astro-cid-rwtsljry> <div class="flex items-start gap-4" data-astro-cid-rwtsljry> ${albumArt && renderTemplate`<img${addAttribute(albumArt, "src")}${addAttribute(`${songName} ${type === "episode" ? "cover" : "album art"}`, "alt")} class="w-16 h-16 rounded-md object-cover" data-astro-cid-rwtsljry>`} <div class="flex flex-col" data-astro-cid-rwtsljry> <span class="font-medium text-sm text-gray-900" data-astro-cid-rwtsljry>${songName}</span> <span class="text-sm text-gray-500" data-astro-cid-rwtsljry> ${type === "episode" ? "Podcast Episode" : artist} </span> ${songUrl && renderTemplate`<a${addAttribute(songUrl, "href")} target="_blank" rel="noopener noreferrer" class="mt-2 text-xs text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors" data-astro-cid-rwtsljry> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-rwtsljry> <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" data-astro-cid-rwtsljry></path> </svg> ${type === "episode" ? "Listen on Spotify" : "Play on Spotify"} </a>`} </div> </div> </div>`} </div> `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/components/SpotifyHoverCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const breadcrumbs = [
    { text: "Karina Tovar", href: "/" }
  ];
  let apiWorking = false;
  try {
    const testResponse = await fetch(`${Astro2.url.origin}/api/test`);
    const testData = await testResponse.json();
    apiWorking = testData.message === "API is working";
  } catch (error) {
    console.error("Test API failed:", error);
  }
  let spotifyData = {
    isPlaying: false,
    artist: "Not playing",
    songName: "",
    albumArt: "",
    songUrl: ""
  };
  try {
    const response = await fetch(`${Astro2.url.origin}/api/spotify-now-playing`);
    spotifyData = await response.json();
  } catch (error) {
    console.error("Failed to fetch Spotify data:", error);
  }
  const tabsContent = [
    {
      id: "humanity",
      buttonText: "For Humanity",
      content: {
        before: "My motivation is to craft products that aim to ",
        highlight: "help people have happier days",
        after: " so that they\u2014and their loved ones\u2014can have better lives. If you believe the same, I am your designer."
      },
      isDefault: true
    },
    {
      id: "business",
      buttonText: "For Business",
      content: {
        highlight: "Driving sustainable growth through innovation.",
        after: " Building strategy and value for your company, employees, and customers. Let's partner up."
      }
    },
    {
      id: "teams",
      buttonText: "For Teams",
      content: {
        before: "I thrive on ",
        highlight: "collaborative innovation",
        after: " and empowering teams to achieve their full potential. Together, we'll turn challenges into opportunities and ideas into impact."
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "TwoColumnLayout", $$TwoColumnLayout, { "layout_body_classes": "bg-[url('/hero.png')] bg-cover", "title": "Karina Tovar - Product Designer", "breadcrumbs": breadcrumbs, "asideTitle": {
    line1: "Product Designer",
    line2: "Pixel Philosopher"
  }, "bgImage": "/kt.png", "bgImageClasses": "[&>img]:w-[900px] [&>img]:h-[900px] [&>img]:ml-auto items-end mix-blend-overlay opacity-40", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="manifesto" data-astro-cid-j7pv25f6> <div class="space-x-4 pt-2" data-astro-cid-j7pv25f6> ${tabsContent.map((tab) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { "type": "textual-button", "additionalClasses": `for-${tab.id} ${tab.isDefault ? "activate" : ""}`, "data-section": tab.id, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${tab.buttonText}` })}`)} </div> <div class="min-h-[132px]" data-astro-cid-j7pv25f6> ${tabsContent.map((tab) => renderTemplate`<h2${addAttribute(tab.id, "id")}${addAttribute(`section-content ${!tab.isDefault ? "hidden" : ""}`, "class")} data-astro-cid-j7pv25f6> ${tab.content.before} <span class="highlight" data-astro-cid-j7pv25f6>${tab.content.highlight}</span> ${tab.content.after} </h2>`)} </div> <p data-astro-cid-j7pv25f6>In my 10+ years of experience, I've helped startups evolve from ideas to fully fledged, thoughtfully crafted products. I have worked in Email Marketing, Ad Tech, HR and FinTech. Specializing in technical software, I work tirelessly to make the tedious simple while bringing joy in every pixel and line of code.</p> <nav class="space-x-2 pt-2" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "type": "link", "href": "/work", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`My Work` })} ${renderComponent($$result2, "Button", $$Button, { "type": "link", "href": "/thoughts", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`My Thoughts` })} ${renderComponent($$result2, "Button", $$Button, { "type": "link", "href": "/cv", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`CV` })} </nav> </section> `, "left-column-extra": ($$result2) => renderTemplate`<div data-astro-cid-j7pv25f6> <div class="flex items-center gap-1.5 mt-2" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>USA Based&nbsp;·&nbsp;</span> ${renderComponent($$result2, "SpotifyHoverCard", $$SpotifyHoverCard, { ...spotifyData, "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "SocialIcons", $$SocialIcons, { "className": "mt-5", "data-astro-cid-j7pv25f6": true })} </div>` })}  `;
}, "/Users/karinatovar/Desktop/absent-altitude/src/pages/index.astro", void 0);

const $$file = "/Users/karinatovar/Desktop/absent-altitude/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
