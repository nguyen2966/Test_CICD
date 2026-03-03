import request from "supertest";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  res.status(200).json({ result: a + b });
});

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