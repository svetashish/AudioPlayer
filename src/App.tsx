import React, { useRef, useState, useEffect } from 'react';
import styles from './App.module.css';
import Slider from './components/Slider/Slider';
import Audio from './components/Audio/Audio';
import ControlButtons from './components/ControlButtons/ControlButtons';

const song: string = require('./Tanita_Tikaram_-_Twist_In_My_Sobriety_(musmore.com).mp3');


const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    const previousValue = !isPlaying;
    setIsPlaying(previousValue);
    if (previousValue) {
      audioRef.current?.pause();
    }
    if (!previousValue) {
      audioRef.current?.play();
    }
  };
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      console.log('Duration ' + audioRef.current.duration);
    }
  };

  // useEffect(() => {
  //     if (isPlaying) {
  //         audioRef.current.play();
  //
  //     } else {
  //         audioRef.current.pause();
  //     }
  // }, [isPlaying]);


  return (
    <div className={styles.app_wrapper}>
      <div className={styles.container_player}>
        <Slider />
        <ControlButtons audioPlayer={audioRef} isPlaying={isPlaying} onClick={handlePlayPause} />
        <Audio
          src={song}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata} />
      </div>
    </div>
  );
};

export default App;
