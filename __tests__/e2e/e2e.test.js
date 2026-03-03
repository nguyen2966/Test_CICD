import fetch from "node-fetch";

describe("E2E Test (Docker container)", () => {
  test("GET / should return 200", async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toBe("Backend running 🚀");
  });
});