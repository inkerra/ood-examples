import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {

    constructor(protected _title: String,
                protected _author: String,
                protected readonly pages: Pages) {
        super(pages);
    }

    public toString(): String {
        return (`Book: ${this.title} by ${this.author} with number of pages:` +
                ` ${this.pages.length}${this.pageSuffix}`);
    }

    public get title(): String {
        return this._title;
    }

    public set title(value: String) {
        this._title = value;
    }

    public get author(): String {
        return this._author;
    }

    public set author(value: String) {
        this._author = value;
    }
}
