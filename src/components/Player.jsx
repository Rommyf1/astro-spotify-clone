import { useRef, useState, useEffect } from "react";

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

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`;
  }, []);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full flex h-full justify-between items-center px-8">
      <div>Canción Actual</div>
      <div className="flex gap-4 items-center">
        <button
          className="bg-white p-2 rounded-full dark:bg-zinc-500/30 dark:text-zinc-200"
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
