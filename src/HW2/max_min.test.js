import { max_min1 } from "./max_min.js";

describe("max_min1", () => {
  it("should be a function", () => {
    expect(max_min1).toBeInstanceOf(Function);
  });
});

describe("max_min1", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a1: 1, b1: 2, result: 2 },
    { a1: 5, b1: 2, result: 5 },
    { a1: 1, b1: 6, result: 6 },
  ].forEach(({ a1, b1, result }) => {
    it(`prints '${result}' for '${a1}' and '${b1}'`, () => {
      const logSpy2 = jest.spyOn(console, "log");
      max_min1(a1, b1);
      expect(logSpy2).toHaveBeenCalledWith(result);
    });
  });
});
