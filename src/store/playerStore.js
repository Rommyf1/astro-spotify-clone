import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  volume: 1,
  currentMusic: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
