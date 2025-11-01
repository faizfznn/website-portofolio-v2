// src/components/Album.tsx
import React, { useEffect, useRef } from "react";
import { useAlbumContext } from "./AlbumContext";

// Definisikan props
interface AlbumProps {
  albumCover: string;
  albumTitle: string;
  artist: string;
  musicFile: string;
  size?: 'sm' | 'md' | 'lg';
  startTime?: number; // <-- 1. Tambahkan prop startTime
}

export default function Album({
  albumCover,
  albumTitle,
  artist,
  musicFile,
  size = "md",
  startTime = 0, // <-- 2. Terima prop dengan nilai default 0
}: AlbumProps) {
  const {
    currentPlayingId,
    setCurrentPlayingId,
    setCurrentTrack,
    setCurrentSound,
    volume,
    isSoundEnabled,
  } = useAlbumContext();
  

  const albumId = `${albumTitle}-${artist}`.toLowerCase().replace(/\s+/g, "-");
  const isPlaying = currentPlayingId === albumId;
  const audioRef = useRef(new Audio(musicFile));

  // ... (useEffect untuk volume tetap sama) ...
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // ... (useEffect untuk setCurrentSound tetap sama) ...
  useEffect(() => {
    if (isPlaying) {
      setCurrentSound({
        play: () => audioRef.current.play(),
        stop: () => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        },
      });
    }
  }, [isPlaying, setCurrentSound]);

  // ... (useEffect untuk handleEnded tetap sama) ...
  useEffect(() => {
    const handleEnded = () => {
      setCurrentPlayingId(null);
      setCurrentTrack(null);
      setCurrentSound(null);
    };
    const audio = audioRef.current;
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [setCurrentPlayingId, setCurrentTrack, setCurrentSound]);

  // --- 3. Perbarui useEffect ini ---
  // Hapus currentTime = 0 dari 'else' agar tidak ter-reset
  useEffect(() => {
    if (!isSoundEnabled) {
      audioRef.current.pause();
      return;
    }
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      // JANGAN reset currentTime di sini
    }
  }, [isPlaying, isSoundEnabled]);

  // --- 4. Perbarui fungsi togglePlay ---
  const togglePlay = () => {
    if (!isSoundEnabled) return;
    if (isPlaying) {
      // Logika untuk BERHENTI (tetap sama)
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset ke 0 saat dihentikan
      setCurrentPlayingId(null);
      setCurrentTrack(null);
      setCurrentSound(null);
    } else {
      // Logika untuk MULAI
      audioRef.current.currentTime = startTime; // <-- Atur waktu mulai di sini
      
      setCurrentPlayingId(albumId);
      setCurrentTrack({
        id: albumId,
        albumTitle,
        artist,
        albumCover,
        musicFile,
      });
      audioRef.current.play().catch(() => {});
    }
  };

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    // ... (sisa JSX tidak berubah) ...
    <div className={`relative group ${sizeClass} cursor-pointer`} onClick={togglePlay}>
      {/* Piringan vinil */}
      <div
        className={`absolute inset-0 rounded-full bg-linear-to-br from-gray-900 via-gray-800 to-black shadow-2xl transition-transform duration-500 ease-linear ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      >
        <div className="absolute inset-2 rounded-full border border-gray-700/30"></div>
        <div className="absolute inset-4 rounded-full border border-gray-700/20"></div>
        <div className="absolute inset-6 rounded-full border border-gray-700/20"></div>
        <div className="absolute inset-8 rounded-full border border-gray-700/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-2 border-gray-800">
          <img
            src={albumCover}
            alt={`${albumTitle} label`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/50"></div>
        </div>
      </div>

      {/* Cover album yang bergeser */}
      <div
        className={`absolute inset-0 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 ease-in-out ${
          isPlaying ? "translate-x-2/5" : ""
        }`}
      >
        <img
          src={albumCover}
          alt={`${albumTitle} by ${artist}`}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Hover card tampil di bawah */}
      <div className="absolute w-48 left-1/2 top-full mt-2 -translate-x-1/2 bg-white rounded-xl shadow-md p-3 opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100">
        <p className="text-sm font-semibold text-black text-center">{albumTitle}</p>
        <p className="text-xs text-gray-600 text-center">{artist}</p>
      </div>
    </div>
  );
}