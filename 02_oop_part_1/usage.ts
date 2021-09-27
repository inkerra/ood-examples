import {Bow} from './code/src/Bow';
import {Inventory} from './code/src/Inventory';
import {Item} from './code/src/Item';
import {ItemWeightComparator} from './code/src/ItemWeightComparator';
import {Pizza} from './code/src/Pizza';
import {Sword} from './code/src/Sword';

// Reset Item's counter.
Item.reset();
console.log(Item.numberOfItems);

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a: Sword = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
const c: Item = new Sword(40, 1, 100, 3);
const d: Bow = new Bow(4, 0.8, 250, 2.5);
const pizza: Pizza = new Pizza(12, false);
console.log(Item.numberOfItems);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(d);
inventory.addItem(pizza);

// Display the inventory
console.log(inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log(inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log(inventory.toString());

// Polish and use the sword
for (let i = 0; i < 18; i++) {
    a.polish();
    console.log(a.use());
}

// Polish the bow
for (let i = 0; i < 5; i++) {
    d.polish();
    console.log(d.toString());
}

// Use the bow
for (let i = 0; i < 5; i++) {
    console.log(d.use());
}

// Use the pizza
for (let i = 0; i < 11; i++) {
    console.log(pizza.use());
}
pizza.setSpoiled(true);
console.log(pizza.use());
console.log(pizza.use());

// Display the inventory again
console.log(inventory.toString());
