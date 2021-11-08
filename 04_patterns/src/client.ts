import {Gui} from '../src/gui';
import {Shipment} from '../src/shipment';
import {Shipper} from '../src/shipper'
import {AirEastShipper} from '../src/shipper'
import {ChicagoSprintShipper} from '../src/shipper'
import {PacificParcelShipper} from '../src/shipper'


export class Client {
    constructor(private gui: Gui) {
        gui.on('ship', this.onShip);
    }

    private onShip(shipment: Shipment) {
        shipment.setShipper(Client.getShipperByZipCode(shipment.fromZipCode));
        console.log(shipment.ship());
    }

    private static getShipperByZipCode(zipCode: String): Shipper {
        if (zipCode.length > 0) {
            switch (zipCode.charAt(0)) {
                case '1':
                case '2':
                case '3': {
                    return new AirEastShipper();
                }
                case '4':
                case '5':
                case '6': {
                    return new ChicagoSprintShipper();
                }
                case '7':
                case '8':
                case '9': {
                    return new PacificParcelShipper();
                }
            }
        }
        return new AirEastShipper();
    }
}
