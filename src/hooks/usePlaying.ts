import { useEffect, useState } from 'react';

export function usePlaying(audioElement: HTMLAudioElement | null): boolean {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioElement) {
      const onPlay = () => setPlaying(true);
      const onPause = () => setPlaying(false);

      audioElement.addEventListener('play', onPlay);
      audioElement.addEventListener('pause', onPause);

      return () => {
        audioElement.removeEventListener('play', onPlay);
        audioElement.removeEventListener('pause', onPause);
      };
    }
  }, [audioElement]);

  return playing;
}
