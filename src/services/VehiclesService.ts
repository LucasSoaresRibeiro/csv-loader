import fs from "fs"
import papa from "papaparse"
import { getCustomRepository } from "typeorm";
import { VehiclesRepository } from "../repositories/VehiclesRepository";

class VehiclesService {

    async csvToDatabase(csvPath) {

        console.log("DEBUG: Request received!");

        const vehicleRepository = getCustomRepository(VehiclesRepository);
        console.log(`DEBUG: Opening this csv file: ${csvPath}`);

        const file = fs.createReadStream(csvPath);
        
        return new Promise((resolve, reject) => {
            papa.parse(file, {
                // worker: true,
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
                    await vehicleRepository.save(vehicle);
                    console.log("DEBUG: Line saved!");

                },
                complete: function(results, file) {
                    console.log("DEBUG: Completed!");
                    resolve(results.data)
                },
                error: function(err, file) {
                    reject(err)
                }
            });

        });

    }

}

export { VehiclesService };
