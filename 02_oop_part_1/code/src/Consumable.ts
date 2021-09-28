import { Item } from './Item';

export abstract class Consumable extends Item {
    protected consumed: boolean;
    protected spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
        this.consumed = false;
    }

    abstract eat(): string;

    public use(): string {
        if (this.consumed) {
            return `There is nothing left of the ${this.getName()} to consume.`;
        }
        let message = this.eat();
        if (this.spoiled) {
            message += '\nYou feel sick.';
        }
        return message;
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public setSpoiled(spoiled: boolean): void {
        this.spoiled = spoiled;
    }

    public toString(): string {
        return (`${this.getName()} #${this.getId()}` +
            (this.consumed ? ' consumed' : '') +
            (this.spoiled ? ' spoiled' : ''));
    }
}
