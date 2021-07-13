import { Request, Response } from "express";
import { VehiclesService } from "../services/VehiclesService";

class VehiclesController {

    async csvToDatabase(request: Request, response: Response) {

        console.log("DEBUG: Request received!");

        try {

            const csvUploadedFileName = request.file.filename
            const csvPath = `${__dirname}/../../uploads/${csvUploadedFileName}`;

            const vehiclesService = new VehiclesService();
            await vehiclesService.csvToDatabase(csvPath);
            console.log("DEBUG: Completed!");
            return response.status(200).json({status: "completed"});

        } catch (error) {
            console.error("DEBUG: Fail to save!");
            console.error(error);
            return response.status(500).json({status: "failed"});
        }

    }

}

export { VehiclesController };
