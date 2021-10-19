import {Mark} from '../src/shipment';
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

    public select(mark: Mark, state: Shipment) {
        let marks = state.marks || [];
        marks.push(mark);
        state.marks = marks;
    }
}
