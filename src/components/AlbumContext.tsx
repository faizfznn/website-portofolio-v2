import React, { createContext, useContext, useState, useRef, useEffect } from "react";

export interface CurrentTrack {
  id: string;
  albumTitle: string;
  artist: string;
  albumCover: string;
  musicFile: string;
}

interface AlbumContextType {
  currentPlayingId: string | null;
  currentTrack: CurrentTrack | null;
  volume: number;
  isSoundEnabled: boolean;
  setCurrentPlayingId: (id: string | null) => void;
  setCurrentTrack: (track: CurrentTrack | null) => void;
  setVolume: (volume: number) => void;
  setIsSoundEnabled: (enabled: boolean) => void;
  playTrack: (track: CurrentTrack) => void;
  pauseTrack: () => void;
  stopTrack: () => void;
  setCurrentSound: (sound: { play: () => void; stop: () => void } | null) => void;
}

const AlbumContext = createContext<AlbumContextType | undefined>(undefined);

export function AlbumProvider({ children }: { children: React.ReactNode }) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null);
  const [volume, setVolume] = useState<number>(0.7);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const currentSoundRef = useRef<{ play: () => void; stop: () => void } | null>(null);

  useEffect(() => {
    if (!isSoundEnabled && currentSoundRef.current) {
      currentSoundRef.current.stop();
      setCurrentPlayingId(null);
      setCurrentTrack(null);
      currentSoundRef.current = null;
    }
  }, [isSoundEnabled]);

  const playTrack = (track: CurrentTrack) => {
    if (currentSoundRef.current) {
      currentSoundRef.current.stop();
    }
    setCurrentTrack(track);
    setCurrentPlayingId(track.id);
  };

  const pauseTrack = () => {
    if (currentSoundRef.current) {
      currentSoundRef.current.stop();
    }
    setCurrentPlayingId(null);
  };

  const stopTrack = () => {
    if (currentSoundRef.current) {
      currentSoundRef.current.stop();
    }
    setCurrentPlayingId(null);
    setCurrentTrack(null);
    currentSoundRef.current = null;
  };

  const setCurrentSound = (sound: { play: () => void; stop: () => void } | null) => {
    currentSoundRef.current = sound;
  };

  return (
    <AlbumContext.Provider
      value={{
        currentPlayingId,
        currentTrack,
        volume,
        isSoundEnabled,
        setCurrentPlayingId,
        setCurrentTrack,
        setVolume,
        setIsSoundEnabled,
        playTrack,
        pauseTrack,
        stopTrack,
        setCurrentSound,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export function useAlbumContext() {
  const context = useContext(AlbumContext);
  if (context === undefined) {
    throw new Error("useAlbumContext must be used within an AlbumProvider");
  }
  return context;
}
