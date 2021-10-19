import {Gui} from '../src/gui';
import {Shipment} from '../src/shipment';


export class Client {
    constructor(private gui: Gui) {
        gui.on('ship', this.onShip);
    }

    private onShip(shipment: Shipment) {
        console.log(shipment.ship());
    }
}
