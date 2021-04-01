import SoundPlayer from "./sound-player";

export default class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }
  playSomethingCool() {
    this.soundPlayer.playSoundFile("song.mp3");
  }
}
