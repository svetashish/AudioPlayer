import {forwardRef, SyntheticEvent} from "react";
interface AudioProps {
    src: string
    // onLoadedMetadata: SyntheticEvent<HTMLAudioElement>
    onLoadedMetadata: React.ReactEventHandler<HTMLAudioElement> | undefined
}

const Audio = forwardRef<HTMLAudioElement, AudioProps>(({src, onLoadedMetadata}, ref) => {
    return (
        <audio
            src={src}
            onLoadedMetadata={onLoadedMetadata}
            ref = {ref}/>
    )
})

export default Audio;