import request from "supertest";
import { app } from "../app";

const csvPath = `${__dirname}/data/vehicles.csv`;

describe("Vehicles", () => {

  it("Should be able to load a csv with vehicle data", async () => {
    const response = await request(app)
                                .post("/csvtodatabase")
                                .attach('csv', csvPath);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("completed");
  });

});