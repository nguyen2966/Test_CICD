import request from "supertest";
import app from "../app.js";

describe("Integration Test - Express Application", () => {

  // =========================
  // GET /
  // =========================
  describe("GET /", () => {
    it("should return 200 and correct message", async () => {
      const res = await request(app).get("/");

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        message: "Server is running"
      });
    });
  });

  // =========================
  // POST /sum
  // =========================
  describe("POST /sum", () => {
    it("should return correct sum", async () => {
      const res = await request(app)
        .post("/sum")
        .send({ a: 5, b: 3 });

      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(8);
    });

    it("should return 400 if missing params", async () => {
      const res = await request(app)
        .post("/sum")
        .send({ a: 5 });

      expect(res.statusCode).toBe(400);
    });
  });

});