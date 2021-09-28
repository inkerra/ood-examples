import {Item} from './Item';
import {ItemComparator} from './ItemComparator';
import {ItemWeightComparator} from './ItemWeightComparator';

export class Inventory {
    private items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;

    public sort(comparator?: ItemComparator): void {
        if (comparator == undefined) {
            this.items.sort((a, b) => a.compareTo(b));
            return;
        }
        this.items.sort(comparator?.compare);
    }

    public toString(): string {
        return this.items.join(', ');
    }
}
