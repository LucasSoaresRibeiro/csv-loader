import { Request, Response } from "express";

class VehiclesController {

    async csvToDatabase(request: Request, response: Response) {

        const csvUploadedFileName = request.file.filename
        console.log(csvUploadedFileName);

        const message = `File uploaded to uploads/${csvUploadedFileName}`
        return response.status(200).json(message);

    }

}

export { VehiclesController };
