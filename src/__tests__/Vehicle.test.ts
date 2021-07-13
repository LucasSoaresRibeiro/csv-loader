'use strict';

import request from "supertest";
import { app } from "../app";
import chai, { expect } from 'chai';

const csvPath = `${__dirname}/data/vehicles.csv`;

describe("Vehicles", () => {

  it("Should be able to load a csv with vehicle data", async () => {
    const response = await request(app)
            .post("/csvtodatabase")
            .attach('csv', csvPath)
            // .expect(200)
            // .end(function(err, res) {
            //     if(err) return done(err);
            //     chai.expect(res.body.status).to.be("completed");
            //     done();
            // });

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("completed");
  });

});