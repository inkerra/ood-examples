import {Shipment} from '../src/shipment';

export class Gui {
    private onShip?: (state: Shipment) => void;

    public on(eventType: string, callback: (state: Shipment) => void) {
        if (eventType == 'ship') {
            this.onShip = callback;
        }
    }

    public trigger(eventType: string, state: Shipment) {
        if (eventType == 'ship' && this.onShip) {
            this.onShip(state);
        }
    }
}
