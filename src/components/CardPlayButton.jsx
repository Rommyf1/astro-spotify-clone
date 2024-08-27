import { PlayButton, PauseButton } from "./Player";
import { usePlayerStore } from "../store/playerStore";

export default function CardPlayButton({ id }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);

  let isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(!isPlaying);
      return;
    }

    const response = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await response.json();
    const { actualPlaylist, playlistSongs } = data;
    setIsPlaying(true);
    setCurrentMusic({
      playlist: actualPlaylist,
      song: playlistSongs[0],
      songs: playlistSongs,
    });
  };

  return (
    <button className="rounded-full p-4 bg-green-500" onClick={handleClick}>
      {isPlayingPlaylist ? <PauseButton /> : <PlayButton />}
    </button>
  );
}
