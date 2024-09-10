import { regularExpressionFind } from "./regularExpressionFind";
describe("regularExpressionFind", () => {
  it("should be a function", () => {
    expect(regularExpressionFind).toBeInstanceOf(Function);
  });
});
describe("regularExpressionFind", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      data: "10.02.2022",
      answerResult: "Это дата",
    },
    {
      data: "123@yandex.ru",
      answerResult: "Это электронный адрес",
    },
    {
      data: "777ааа999ффф",
      answerResult: "Это не дата и не адрес",
    },
  ].forEach(({ data, answerResult }) => {
    it(`Для строки '${data}' '${answerResult}'`, () => {
      let answer = regularExpressionFind(data);
      expect(answer).toBe(answerResult);
    });
  });
});
