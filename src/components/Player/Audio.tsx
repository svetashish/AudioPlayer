import { AudioHTMLAttributes, forwardRef } from 'react';

const audioFileUrl = require('./Tanita_Tikaram_-_Twist_In_My_Sobriety_(musmore.com).mp3').default;

export const Audio = forwardRef<HTMLAudioElement, AudioHTMLAttributes<HTMLAudioElement>>(({ onLoadedMetadata }, ref) => {
  return (
    <audio
      src={audioFileUrl}
      onLoadedMetadata={onLoadedMetadata}
      ref={ref} />
  );
});
