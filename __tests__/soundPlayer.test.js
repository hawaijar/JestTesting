jest.mock('../src/sound-player');
import SoundPlayer from '../src/sound-player';

it('should work', () => {
	console.log(new SoundPlayer().playSoundFile());
})
