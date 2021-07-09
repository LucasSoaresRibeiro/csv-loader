import { EntityRepository, Repository } from "typeorm";
import { Vehicle } from "../entities/Vehicle";

@EntityRepository(Vehicle)
class VehiclesRepository extends Repository<Vehicle> { }

export { VehiclesRepository };