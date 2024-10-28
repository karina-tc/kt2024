export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const vars = {
    clientId: undefined                                 ?.slice(0, 5) + "...",
    clientSecret: undefined                                     ?.slice(0, 5) + "...",
    refreshToken: undefined                                     ?.slice(0, 5) + "..."
  };
  return new Response(JSON.stringify(vars), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
