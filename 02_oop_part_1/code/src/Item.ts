import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static get numberOfItems(): number {
        return id;
    }
    private readonly id: number;
    private value: number;
    private name: string;
    private weight: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id++;
    }

    public abstract use(): void;

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        }
        if (this.value < other.value) {
            return -1;
        }
        let nameCmp = this.name.localeCompare(other.name, 'en',
            {ignorePunctuation: true});
        if (nameCmp > 0) {
            return 1;
        }
        if (nameCmp < 0) {
            return 1;
        }
        return 0;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(price: number): void {
        this.value = price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public static reset(): void {
        id = 0;
    }
}
