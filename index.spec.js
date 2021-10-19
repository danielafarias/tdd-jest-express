const soma = require("./soma");
const request = require("supertest");
const app = require("./app");

describe("Sample Test", () => {
  it("should test if true === true", () => {
    expect(true).toBe(true);
  });

  it("5+5 equal 10", () => {
    expect(soma(5, 5)).toBe(10);
  });

  it("Main route has property", async () => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty("message");
  });

  it("Main route return statusCode 200", async () => {
    const res = await request(app).post("/new");
    expect(res.status).toBe(200);
  });

  it("Main route return statusCode 401", async () => {
    const res = await request(app).post("/new");
    expect(res.status).toBe(401);
  });

});
