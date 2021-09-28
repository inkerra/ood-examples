import { Item } from './Item';

export abstract class Weapon extends Item {
    static MODIFIER_CHANGE_RATE: number = 0.05;
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number,
                value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = 0;
        this.durabilityModifier = 0;
    }

    abstract polish(): void;

    public use(): string {
        if (this.getDurability() < Number.EPSILON) {
            return `You can\'t use the ${this.getName()}, it is broken.`;
        }
        let useMessage = (`You use the ${this.getName()}, dealing ` +
            `${this.getDamage().toFixed(2)} points of damage.`);
        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
        if (this.getDurability() < Number.EPSILON) {
            useMessage += `\nThe ${this.getName()} breaks.`;
        }
        return useMessage;
    }

    public toString(): string {
        let durability = (100 * (this.getDurability() / this.baseDurability))
            .toFixed(2);
        return (super.toString() +
            `, Damage: ${this.getDamage().toFixed(2)}` +
            `, Durability: ${durability}%`);
    }

    public getBaseDamage(): number {
        return this.baseDamage;
    }

    public setBaseDamage(value: number): void {
        this.baseDamage = value;
    }

    public getBaseDurability(): number {
        return this.baseDurability;
    }

    public setBaseDurability(value: number): void {
        this.baseDurability = value;
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }

    public setDamageModifier(value: number): void {
        this.damageModifier = value;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    public setDurabilityModifier(value: number): void {
        this.durabilityModifier = value;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }
}
