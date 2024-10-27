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

    const response = await spotifyApi.getMyCurrentPlayingTrack()
    
    // Early return if no track is playing
    if (response.statusCode === 204 || !response.body || !response.body.item) {
      return new Response(JSON.stringify({
        isPlaying: false,
        artist: 'Nothing Playing',
        debug: `Status: ${response.statusCode}`
      }), { status: 200 })
    }

    const song = response.body
    const item = song.item

    // Add null check for item
    if (!item) {
      return new Response(JSON.stringify({
        isPlaying: false,
        artist: 'No Track Data',
        debug: 'Item is null'
      }), { status: 200 })
    }

    // Check if the item is a track (not a podcast episode)
    if ('artists' in item && item.type === 'track') {
      return new Response(JSON.stringify({
        isPlaying: song.is_playing ?? false,
        artist: item.artists[0]?.name ?? 'Unknown Artist',
        songName: item.name ?? 'Unknown Track',
        albumArt: item.album?.images?.[0]?.url ?? '',
        songUrl: item.external_urls?.spotify ?? '',
        debug: 'Success - Track'
      }), { status: 200 })
    } else {
      // Handle podcast episodes
      return new Response(JSON.stringify({
        isPlaying: song.is_playing ?? false,
        artist: item.show?.publisher ?? 'Unknown Show',
        songName: item.name ?? 'Unknown Episode',
        albumArt: item.images?.[0]?.url ?? '',
        songUrl: item.external_urls?.spotify ?? '',
        debug: 'Success - Podcast'
      }), { status: 200 })
    }

  } catch (error) {
    return new Response(JSON.stringify({
      isPlaying: false,
      artist: 'API Error',
      debug: error instanceof Error ? error.message : 'Unknown error'
    }), { status: 200 })
  }
}
