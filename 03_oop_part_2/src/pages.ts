import { Page } from './page';

export class Pages implements IterableIterator<Page> {

    private pointer = 0;

    constructor(private pages: Page[]) {}

    public next(): IteratorResult<Page> {
        if (this.pointer < this.pages.length) {
            return {done: false, value: this.pages[this.pointer++]};
        }
        this.pointer = 0;
        return {done: true, value: null};
    }

    [Symbol.iterator](): IterableIterator<Page> {
        return this;
    }

    public get length(): number {
        return this.pages.length;
    }
}
