import { formatDate } from "./dateFormatter";

describe("dateFormatter", () => {
  it("should format date correctly", () => {
    const date = "2024-07-04T21:39:17.048Z";
    expect(formatDate(date)).toEqual("2024-07-04");
  });
});