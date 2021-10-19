type State = {
    toAddress: String;
    fromAddress: String;
    toZipCode: String;
    fromZipCode: String;
    weight: number;
    marks?: Array<String>;
}

export class Shipment {
    private static id = 0;
    private shipmentId: number;

    constructor(private state: State) {
        this.shipmentId = Shipment.getShipmentId();
    }

    public static getShipmentId(): number {
        return ++Shipment.id;
    }

    public ship(): String {
        const cost = this.state.weight * 0.39;
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

    public get marks(): Array<String> {
        return this.state.marks || [];
    }

    public set marks(marks: Array<String>) {
        this.state.marks = marks || [];
    }
}
