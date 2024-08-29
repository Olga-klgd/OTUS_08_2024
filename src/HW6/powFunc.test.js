import { powFunc } from "./powFunc.js";
describe("powFunc", () => {
  it("should be a function", () => {
    expect(powFunc).toBeInstanceOf(Function);
  });
});

describe("powFunc", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 2, x: 5, result: 32 },
    { a: 3, x: 3, result: 27 },
    { a: 5, x: 2, result: 25 },
  ].forEach(({ a, x, result }) => {
    it(`prints '${result}' for ${a} and ${x}`, () => {
      const logSpy = jest.spyOn(console, "log");
      powFunc(a, x);
      expect(logSpy).toHaveBeenCalledWith(result);
    });
  });
});
