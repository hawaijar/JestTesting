import kafka from "kafka-node";
jest.mock("kafka-node");

describe("Testing kafka module", () => {
	it('should work', () => {
		const client = new kafka.KafkaClient();
		console.log(client);
		expect(client.foo).toBe('bar');
	})
})
