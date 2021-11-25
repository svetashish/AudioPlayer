import React, { useState } from 'react';
import styles from './App.module.css';
import { Slider } from './components/Player/Slider';
import { Audio } from './components/Player/Audio';
import ControlButtons from './components/Player/ControlButtons';
import { useDuration } from './hooks/useDuration';
import { useCurrentTime } from './hooks/useCurrentTime';

const App = () => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const duration = useDuration(audioElement);
  const currentTime = useCurrentTime(audioElement);

  return (
    <div className={styles.app_wrapper}>
      <div className={styles.container_player}>
        <div>
          {currentTime} - {duration}
        </div>

        <Audio ref={setAudioElement} />

        <Slider duration={duration} currentTime={currentTime} audioElement={audioElement} />

        <ControlButtons audioElement={audioElement} />
      </div>
    </div>
  );
};

export default App;
