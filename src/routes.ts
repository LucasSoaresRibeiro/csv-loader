import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import { VehiclesController } from './controllers/VehiclesController';

const routes = express.Router();
const upload = multer(multerConfig);

const vehiclesController = new VehiclesController();

routes.post(
    '/csvtodatabase',
    upload.single('csv'),
    vehiclesController.csvToDatabase
);

export default routes;