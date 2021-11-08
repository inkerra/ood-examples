export interface Shipper {
    getCost(): number;
    getPackageCost(weight: number): number;
    getOversizedCost(weight: number): number;
}

export class AirEastShipper implements Shipper {
    getCost(): number {
        return 0.39;
    }

    getPackageCost(weight: number): number {
        return weight * 0.25;
    }

    getOversizedCost(weight: number): number {
        return this.getPackageCost(weight) + 10;
    }
}

export class ChicagoSprintShipper implements Shipper {
    getCost(): number {
        return 0.42;
    }

    getPackageCost(weight: number): number {
        return weight * 0.2;
    }

    getOversizedCost(weight: number): number {
        return 0;
    }
}

export class PacificParcelShipper implements Shipper {
    getCost(): number {
        return 0.51;
    }

    getPackageCost(weight: number): number {
        return weight * 0.19;
    }

    getOversizedCost(weight: number): number {
        return this.getPackageCost(weight) + weight * 0.02;
    }
}
