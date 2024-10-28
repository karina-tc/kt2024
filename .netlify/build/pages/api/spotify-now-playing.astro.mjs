import SpotifyWebApi from 'spotify-web-api-node';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const clientId = "59e2f90df400498ca39f6bd566646240";
  const clientSecret = "6f46e11cfd8d4c48b915256830168830";
  const refreshToken = "AQBCScgwS9AeI3Xb2YKwRIgypOvPGo1hJlNMil_tvmney3gW1L0XCkOaPTyeOWxjm__3JzK9qUk0nY2Pyp0tafLhR7xeYhUUco1x4BExtuezxhCIc6X-oizxml8xppH29wk";
  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    refreshToken
  });
  try {
    const tokenData = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(tokenData.body["access_token"]);
    const currentlyPlaying = await spotifyApi.getMyCurrentPlayingTrack();
    if (currentlyPlaying.body && currentlyPlaying.body.item) {
      const item = currentlyPlaying.body.item;
      if ("artists" in item && item.type === "track") {
        return new Response(JSON.stringify({
          isPlaying: true,
          artist: item.artists[0]?.name ?? "Unknown Artist",
          songName: item.name,
          albumArt: item.album?.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          type: "track"
        }), { status: 200 });
      } else if (item.type === "episode") {
        return new Response(JSON.stringify({
          isPlaying: true,
          artist: item.show?.publisher ?? "Unknown Show",
          songName: item.name,
          albumArt: item.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          type: "episode"
        }), { status: 200 });
      }
    }
    const recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 });
    if (recentlyPlayed.body && recentlyPlayed.body.items?.[0]) {
      const track = recentlyPlayed.body.items[0].track;
      return new Response(JSON.stringify({
        isPlaying: false,
        artist: track.artists[0]?.name ?? "Unknown Artist",
        songName: track.name,
        albumArt: track.album?.images?.[0]?.url,
        songUrl: track.external_urls?.spotify,
        type: "track"
      }), { status: 200 });
    }
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: "Spotify",
      songName: "My Playlist",
      type: "track"
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: "Spotify",
      songName: "My Playlist",
      type: "track"
    }), { status: 200 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
