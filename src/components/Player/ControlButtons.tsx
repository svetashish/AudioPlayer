import { useCallback } from 'react';
import { ReactComponent as Next } from './images/next.svg';
import { ReactComponent as Prev } from './images/last.svg';
import styles from './ControlButtons.module.css';
import { ReactComponent as Pause } from './images/pause.svg';
import { ReactComponent as Play } from './images/play.svg';
import { usePlaying } from '../../hooks/usePlaying';

interface ControlProps {
  audioElement: HTMLAudioElement | null;
}

const ControlButtons = ({ audioElement }: ControlProps) => {
  const playing = usePlaying(audioElement);

  const onPrevClick = useCallback(() => {
    if (audioElement) {
      audioElement.currentTime -= 10;
    }
  }, [audioElement]);

  const onNextClick = useCallback(() => {
    if (audioElement) {
      audioElement.currentTime += 10;
    }
  }, [audioElement]);

  const onClick = useCallback(() => {
    if (audioElement) {
      audioElement.paused ? audioElement.play() : audioElement.pause();
    }
  }, [audioElement]);

  return (
    <div className={styles.controls}>
      <button className={styles.button} onClick={onPrevClick}><Prev /></button>

      <button className={styles.button} onClick={onClick}>
        {playing ? <Pause /> : <Play />}
      </button>

      <button className={styles.button} onClick={onNextClick}><Next /></button>
    </div>
  );

};

export default ControlButtons;
