import { Request, Response } from "express";
import papa from "papaparse"
import fs from "fs"
import { getCustomRepository } from "typeorm";
import { VehiclesRepository } from "../repositories/VehiclesRepository";

class VehiclesController {

    async csvToDatabase(request: Request, response: Response) {

        console.log("DEBUG: Request received!");

        const csvUploadedFileName = request.file.filename
        const csvPath = `${__dirname}/../../uploads/${csvUploadedFileName}`;
        const vehicleRepository = getCustomRepository(VehiclesRepository);

        console.log(`DEBUG: Opening this csv file: ${csvPath}`);

        const file = fs.createReadStream(csvPath);
        papa.parse(file, {
            worker: true,
            header: true,
            delimiter: ";",
            step: async function(results) {

                console.log("DEBUG: Saving this line...");
                console.log(results.data);
                
                // assuming csv will always have a header with the same column database name
                const vehicle = vehicleRepository.create({
                    ...results.data
                });
                
                // store at database
                try {
                    await vehicleRepository.save(vehicle);
                    console.log("DEBUG: Line saved!");
                } catch (error) {
                    console.error("DEBUG: Fail to save!");
                    console.error(error);
                }

            },
            complete: function(results) {
                console.log("DEBUG: Completed!");
                return response.status(200).json({status: "completed"});
            }
        });

    }

}

export { VehiclesController };
