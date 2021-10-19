export interface Shipper {
    getCost(): number;
}

export class AirEastShipper implements Shipper {
    getCost(): number {
        return 0.39;
    }
}

export class ChicagoSprintShipper implements Shipper {
    getCost(): number {
        return 0.42;
    }
}

export class PacificParcelShipper implements Shipper {
    getCost(): number {
        return 0.51;
    }
}
