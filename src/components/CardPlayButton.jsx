import { PlayButton, PauseButton } from "./Player";
import { usePlayerStore } from "../store/playerStore";

export default function CardPlayButton({ id }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);

  const handleClick = () => {
    setCurrentMusic({ playlist: { id } });

    setIsPlaying(!isPlaying);
  };

  let isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  return (
    <button className="rounded-full p-4 bg-green-500" onClick={handleClick}>
      {isPlayingPlaylist ? <PauseButton /> : <PlayButton />}
    </button>
  );
}
