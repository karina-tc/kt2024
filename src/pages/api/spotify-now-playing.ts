import type { APIRoute } from 'astro'
import SpotifyWebApi from 'spotify-web-api-node'

export const GET: APIRoute = async () => {
  // Check environment variables
  const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET
  const refreshToken = import.meta.env.PUBLIC_SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: 'Config Error',
      debug: `Missing: ${[
        !clientId && 'CLIENT_ID',
        !clientSecret && 'CLIENT_SECRET',
        !refreshToken && 'REFRESH_TOKEN'
      ].filter(Boolean).join(', ')}`
    }), { status: 200 })
  }

  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    refreshToken
  })

  try {
    const tokenData = await spotifyApi.refreshAccessToken()
    spotifyApi.setAccessToken(tokenData.body['access_token'])

    // First try to get currently playing
    const currentlyPlaying = await spotifyApi.getMyCurrentPlayingTrack()
    
    // If something is playing, return that
    if (currentlyPlaying.body && currentlyPlaying.body.item) {
      const item = currentlyPlaying.body.item;
      
      if ('artists' in item && item.type === 'track') {
        return new Response(JSON.stringify({
          isPlaying: true,
          artist: item.artists[0]?.name ?? 'Unknown Artist',
          songName: item.name,
          albumArt: item.album?.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          type: 'track'
        }), { status: 200 });
      } else if (item.type === 'episode') {
        return new Response(JSON.stringify({
          isPlaying: true,
          artist: item.show?.publisher ?? 'Unknown Show',
          songName: item.name,
          albumArt: item.images?.[0]?.url,
          songUrl: item.external_urls?.spotify,
          type: 'episode'
        }), { status: 200 });
      }
    }

    // If nothing is playing, get recently played
    const recentlyPlayed = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 })
    
    if (recentlyPlayed.body && recentlyPlayed.body.items?.[0]) {
      const track = recentlyPlayed.body.items[0].track
      return new Response(JSON.stringify({
        isPlaying: false,
        artist: track.artists[0]?.name ?? 'Unknown Artist',
        songName: track.name,
        albumArt: track.album?.images?.[0]?.url,
        songUrl: track.external_urls?.spotify,
        type: 'track'
      }), { status: 200 });
    }

    // Absolute fallback (should rarely happen)
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: 'Spotify',
      songName: 'My Playlist',
      type: 'track'
    }), { status: 200 });

  } catch (error) {
    // Even on error, return something displayable
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: 'Spotify',
      songName: 'My Playlist',
      type: 'track'
    }), { status: 200 });
  }
}
