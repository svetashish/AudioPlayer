import {inspect} from "util";
import styles from './Slider.module.css'
import {FC} from "react";

const Slider: FC = ({onChange}:  any) => {
    return (
        <div>
            <input
                className={styles.slider}
                type="range"
                step={0.01}
                onChange={onChange}
            />
        </div>

    )
}
export default Slider;