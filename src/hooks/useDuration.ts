import { useMediaElementValue } from './useMediaElementValue';

export function useDuration(audioElement: HTMLAudioElement | null): number {
  return useMediaElementValue(audioElement, 'durationchange', 'duration');
}
