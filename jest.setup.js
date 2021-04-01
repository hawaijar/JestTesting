import kafka from "kafka-node";
jest.mock("kafka-node", () => {
  return {
    Admin: jest.fn(() => {
      return {
        listGroups: jest.fn((callback) => {
          // to be added
        }),
        listTopics: jest.fn((callback) => {
          // to be added
        }),
      };
    }),
    KafkaClient: class {
      constructor() {
        this.foo = "bar";
      }
    },
    Offset: jest.fn(),
  };
});
