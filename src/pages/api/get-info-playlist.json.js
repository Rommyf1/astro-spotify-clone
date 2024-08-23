import { allPlaylists, songs } from "../../lib/data";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const playlistID = urlObject.searchParams.get("id");

  const actualPlaylist = allPlaylists.find(
    (playlist) => playlist.id === playlistID
  );
  const playlistSongs = songs.filter(
    (song) => song.albumId === actualPlaylist?.albumId
  );

  return new Response(JSON.stringify({ actualPlaylist, playlistSongs }));
}
