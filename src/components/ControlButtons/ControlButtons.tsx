import {RefObject} from "react";
import  { ReactComponent as Next } from '../ControlButtons/images/next.svg';
import  { ReactComponent as Prev } from '../ControlButtons/images/last.svg';
import styles from './ControlButtons.module.css';
import {ReactComponent as Pause} from "./images/pause.svg";
import {ReactComponent as Play} from "./images/play.svg";

interface ControlProps {
    audioPlayer:RefObject<HTMLAudioElement | null>
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
    isPlaying: boolean
}

const ControlButtons = ({audioPlayer, onClick, isPlaying}: ControlProps) => {

    const handleNext10Sec = () =>{
        if(audioPlayer != null && audioPlayer.current) {
            audioPlayer.current.currentTime += 10
            console.log("Работает")
        }
    }
    const handlePrev10Sec = () =>{
        if(audioPlayer != null && audioPlayer.current) {
            audioPlayer.current.currentTime -= 10
            console.log("Работает")
        }
    }

    return (
        <div className={styles.controls}>
            <button className="prev" onClick={handlePrev10Sec}><Prev/></button>
            {isPlaying ? (
                <button onClick={onClick}>
                    <Pause/>
                </button>
            ) : (
                <button onClick={onClick}>
                    <Play/>
                </button>
            )}
            <button className="next" onClick={handleNext10Sec}><Next/></button>
        </div>
    )

}

export default ControlButtons;