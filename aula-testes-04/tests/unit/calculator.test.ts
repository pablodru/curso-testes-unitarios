import calculator from "calculator";

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
  it("should sum", async () => {
    const sum = calculator.sum(10,20)
    expect(sum).toBe(30);
  });
  it("should multiply", async () => {
    const mult = calculator.mul(10,20)
    expect(mult).toBe(200);
  });
  it("should difference", async () => {
    const diff = calculator.sub(10,20)
    expect(diff).toBe(-10);
  });
  it("should divide", async () => {
    const div = calculator.div(10,20)
    expect(div).toBe(0.5);
  });
})