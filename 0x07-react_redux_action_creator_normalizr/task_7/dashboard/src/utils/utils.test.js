// utils.test.js
const {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
} = require("./utils");
describe("getFullYear", () => {
  it("should return the correct year", () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe("getFooterCopy", () => {
  it('should return "Holberton school" when the argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toBe("Holberton school");
  });
  it("should return Holberton School main dashboard", () => {
    const result = getFooterCopy(false);
    expect(result).toBe("Holberton School main dashboard");
  });
});

describe("getLatestNotification", () => {
  it("should return Urgent requirement - complete by EOD", () => {
    expect("<strong>Urgent requirement</strong> - complete by EOD").toBe(
      getLatestNotification()
    );
  });
});
