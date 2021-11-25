import styles from './Slider.module.css';
import { FC } from 'react';

interface Props {
  duration: number;
  currentTime: number;
  audioElement: HTMLAudioElement | null;
}

export const Slider: FC<Props> = ({ duration, currentTime, audioElement }) => {
  return (
    <input
      className={styles.slider}
      type='range'
      step={0.01}
      max={duration}
      value={currentTime}
      onChange={event => {
        if (audioElement) {
          audioElement.currentTime = +event.target.value;
        }
      }}
    />
  );
};
