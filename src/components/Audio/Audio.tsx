import {forwardRef} from "react";
interface AudioProps {
    src: string
}

const Audio = forwardRef<HTMLAudioElement, AudioProps>(({src}, ref) => {
    return (
        <audio src={src} ref = {ref}/>
    )
})

export default Audio;