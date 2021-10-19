import {Shipper} from '../src/shipper'
import {AirEastShipper} from '../src/shipper'

export type Mark = 'Fragile' | 'Do Not Leave' | 'Return Receipt Requested';
type State = {
    toAddress: String;
    fromAddress: String;
    toZipCode: String;
    fromZipCode: String;
    weight: number;
    marks?: Array<Mark>;
}

function with_marks(target: Shipment, propertyKey: string, desc: PropertyDescriptor) {
    const originalMethod = desc.value;
    desc.value = function(...args: any[]) {
        const result = [originalMethod.apply(this, args)];
        for (let mark of (this as Shipment).marks) {
            result.push(`**MARK ${mark.toUpperCase()}**`);
        }
        return result.join('\n');
    }
    return desc;
}

export class Shipment {
    private static id = 0;
    private shipmentId: number;
    private shipper: Shipper;

    constructor(private state: State) {
        this.shipmentId = Shipment.getShipmentId();
        this.shipper = new AirEastShipper();
    }

    public static getShipmentId(): number {
        return ++Shipment.id;
    }

    @with_marks
    public ship(): String {
        const cost = this.state.weight * this.shipper.getCost();
        return [
            `Shipment with the ID ${this.shipmentId} will be picked up ` +
            `from ${this.state.fromAddress} ${this.state.fromZipCode} and ` +
            `shipped to ${this.state.toAddress} ${this.state.toZipCode}`,
            `Cost: \$${cost.toFixed(2)}`
        ].join('\n');
    }

    public get toAddress(): String {
        return this.state.toAddress;
    }

    public set toAddress(address: String) {
        this.state.toAddress = address;
    }

    public get fromAddress(): String {
        return this.state.fromAddress;
    }

    public set fromAddress(address: String) {
        this.state.fromAddress = address;
    }

    public get toZipCode(): String {
        return this.state.toZipCode;
    }

    public set toZipCode(code: String) {
        this.state.toZipCode = code;
    }

    public get fromZipCode(): String {
        return this.state.fromZipCode;
    }

    public set fromZipCode(code: String) {
        this.state.fromZipCode = code;
    }

    public get weight(): number {
        return this.state.weight;
    }

    public set weight(weight: number) {
        this.state.weight = weight;
    }

    public get marks(): Array<Mark> {
        return this.state.marks || [];
    }

    public set marks(marks: Array<Mark>) {
        this.state.marks = marks || [];
    }

    public setShipper(shipper: Shipper) {
        this.shipper = shipper;
    }
}
