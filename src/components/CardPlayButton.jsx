import { PlayButton, PauseButton } from "./Player";

export default function CardPlayButton({ isPlaying, id }) {
  return (
    <button className="rounded-full p-4 bg-green-500">
      {isPlaying ? <PauseButton /> : <PlayButton />}
    </button>
  );
}
