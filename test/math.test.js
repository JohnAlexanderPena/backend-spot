const expect = require("chai").expect;

// const expect = require("mocha");
// const assert = require("assert");

// import math file
const math = require("../PlayingOptions/navigate");
describe("navigate.checkTest() Test", () => {
  it("should return 2", () => {
    const result = math.checkTest(1, 1);
    expect(result).to.equal(2);
  });
  it("should equal 4", () => {
    const result = math.checkTest(2, 2);
    expect(result).to.equal(4);
    //   assert(result, 4);
  });
  //Test Error Handling;
  it("should throw an error", async () => {
    try {
      await math.checkTest(1);
    } catch (error) {
      expect(error).to.equal("inside the throw meth");
    }
  });
});
