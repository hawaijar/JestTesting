export const mockPlaySoundFile = jest.fn(() => "Jinga la la...");
const mock = jest.fn().mockImplementation(() => {
	return {playSoundFile: mockPlaySoundFile};
});

export default mock;
