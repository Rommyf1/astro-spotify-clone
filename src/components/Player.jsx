import { useRef, useEffect } from "react";
import { usePlayerStore } from "../store/playerStore";

export const PlayButton = ({ buttonColor }) => {
  return (
    <svg
      //className={className}
      role="img"
      height="16"
      width="16"
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
  );
};

export const PauseButton = ({ buttonColor }) => {
  return (
    <svg
      //className={className}
      role="img"
      height="16"
      width="16"
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
  );
};

export function CurrentSong({ image, title, artists }) {
  const songArtists = artists?.join(", ");

  return (
    <article className="flex gap-4">
      <picture className="w-12 h-12">
        <img className="rounded-lg shadow-lg" src={image} alt={title} />
      </picture>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm dark:text-white">{title}</h3>
        <span className="text-xs dark:text-white/80">{songArtists}</span>
      </div>
    </article>
  );
}

export function Player() {
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();

  useEffect(() => {
    if (!currentMusic.song) return;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const newSong = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = newSong;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handlePlay = () => {
    if (!currentMusic.song) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full flex h-full justify-between items-center px-4">
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="flex gap-4 items-center">
        <button
          className="bg-white p-4 rounded-full dark:bg-zinc-500/30 dark:text-zinc-200"
          onClick={handlePlay}
        >
          {isPlaying ? <PauseButton /> : <PlayButton />}
        </button>
        <audio ref={audioRef}></audio>
      </div>
      <div>Controles</div>
    </section>
  );
}
