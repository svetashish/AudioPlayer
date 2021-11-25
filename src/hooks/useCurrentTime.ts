import { useMediaElementValue } from './useMediaElementValue';

export function useCurrentTime(audioElement: HTMLAudioElement | null): number {
  return useMediaElementValue(audioElement, 'timeupdate', 'currentTime');
}
