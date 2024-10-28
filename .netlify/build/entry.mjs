import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_cB1iVa5d.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/check-spotify-env.astro.mjs');
const _page4 = () => import('./pages/api/spotify-now-playing.astro.mjs');
const _page5 = () => import('./pages/api/test.astro.mjs');
const _page6 = () => import('./pages/thoughts/_slug_.astro.mjs');
const _page7 = () => import('./pages/thoughts.astro.mjs');
const _page8 = () => import('./pages/work.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/check-spotify-env.ts", _page3],
    ["src/pages/api/spotify-now-playing.ts", _page4],
    ["src/pages/api/test.ts", _page5],
    ["src/pages/thoughts/[slug].astro", _page6],
    ["src/pages/thoughts.astro", _page7],
    ["src/pages/work.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "19e9a8a6-f80f-4542-bcd6-dd09c007f7cf"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
