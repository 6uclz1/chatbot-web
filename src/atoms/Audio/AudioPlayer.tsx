import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  audioBlob?: Blob;
}

const AudioPlayer: any = ({ audioBlob }: AudioPlayerProps) => {
  const audioRef: any = useRef(null);

  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch((error: any) => {
          console.error("Failed to play audio:", error);
        });
      }
    }
    return () => {
      // Clean up the URL object when the component unmounts
      URL.revokeObjectURL(audioRef.current?.src);
    };
  }, [audioBlob]);

  return (
    <div>
      <audio ref={audioRef} controls />
    </div>
  );
}

export default AudioPlayer;