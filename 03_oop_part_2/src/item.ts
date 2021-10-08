import { Page } from './page';
import { Pages } from './pages';


export abstract class Item {

    public abstract toString(): String;
}

type Constructor = new (...args: any[]) => {};

export function PagesIterable<ItemType extends Constructor>(TheItem: ItemType) {

    abstract class Mixed extends TheItem {

        protected pages: Pages = new Pages([]);

        public setPages(pages: Pages) {
            this.pages = pages;
        }

        [Symbol.iterator](): Iterator<String> {

            class PagesIterator implements Iterator<String> {

                private step = 0;

                constructor(public name: String, public pages: Pages) {}

                public next(): IteratorResult<String> {
                    if (this.step < this.pages.length) {
                        return {
                            done: false,
                            value: `${this.name}, ${this.pages.getPage(this.step++)}`};
                    }
                    return {done: true, value: null};
                }
            }

            return new PagesIterator(this.toString(), this.pages);
        }
    }

    return Mixed;
}

export const PagesIterableItem = PagesIterable(Item as Constructor);
