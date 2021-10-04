import { Page } from './page';
import { Pages } from './pages';


const PagesIterable = () => class implements IterableIterator<Item> {
    constructor(protected pages: Pages, protected openPage?: Page) {}

    public next(): IteratorResult<Item> {
        let nxt = this.pages.next();
        if (!nxt.done) {
            this.openPage = nxt.value;
            return {done: false, value: this};
        }
        this.openPage = undefined;
        return {done: true, value: null};
    }

    [Symbol.iterator](): IterableIterator<Item> {
        return this;
    }

    protected get pageSuffix(): String {
        if (typeof(this.openPage) === 'object') {
            return  `, ${this.openPage}`;
        }
        return '';
    }
}

export abstract class Item extends PagesIterable() {

    public abstract toString(): String;
}
