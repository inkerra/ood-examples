import { Weapon } from './Weapon';

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number,
        weight: number) {
            super('sword', baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
      this.setDamageModifier(Math.min(
          this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE,
          0.25 * this.getBaseDamage()));
  }
}
