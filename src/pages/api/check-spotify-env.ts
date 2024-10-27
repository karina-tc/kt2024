import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const vars = {
    clientId: import.meta.env.SPOTIFY_CLIENT_ID?.slice(0, 5) + '...',
    clientSecret: import.meta.env.SPOTIFY_CLIENT_SECRET?.slice(0, 5) + '...',
    refreshToken: import.meta.env.SPOTIFY_REFRESH_TOKEN?.slice(0, 5) + '...',
  };

  return new Response(JSON.stringify(vars), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

