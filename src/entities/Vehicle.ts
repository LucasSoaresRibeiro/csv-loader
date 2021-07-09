import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("vehicles")
class Vehicle {

    @PrimaryColumn("uuid")
    readonly uuid: string;

    @Column({ length: 17 })
    vin: string;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    mileage: string;

    @Column()
    year: number;

    @Column("double")
    price: number;

    @Column()
    zip_code: string;

    @CreateDateColumn()
    create_date: Date;

    @CreateDateColumn()
    update_date: Date;

    constructor() {
        if (!this.uuid) {
            this.uuid = uuid();
        }
    }

}

export { Vehicle };