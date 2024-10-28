export { renderers } from '../../renderers.mjs';

const GET = async () => {
  console.log("Test endpoint called");
  return new Response(JSON.stringify({ message: "API is working" }), {
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
