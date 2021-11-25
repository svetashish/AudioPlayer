import styles from './Slider.module.css';
import { FC } from 'react';

const Slider: FC = ({ onChange }: any) => {
  return (
    <div>
      <input
        className={styles.slider}
        type='range'
        step={0.01}
        onChange={(event => console.log(event.target.value))}
      />
    </div>

  );
};
export default Slider;
