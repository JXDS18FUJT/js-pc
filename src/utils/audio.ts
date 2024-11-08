


import { Howl, Howler } from 'howler';
interface globalAudioType {
    id: number,
    audio: Howl | undefined
    playAudio(src: string | string[]): number
    stopAudio(): void


}
const globalAudio: globalAudioType = {
    id: 0,
    audio: undefined,
    playAudio: function (src: string | string[]) {
        this.audio?.stop()
        this.audio = new Howl({
            src: src,
            html5: true
        });
        this.id = this.audio.play()
        // this.audio.once('end',(soundId=>{
        //     this.audio?.unload()

        // }))
        return this.id


    },
    stopAudio: function () {
        this.audio?.stop(this.id)
        return


    }
}
export default globalAudio