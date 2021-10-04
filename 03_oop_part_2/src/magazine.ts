import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {

    constructor(protected _title: String, protected readonly pages: Pages) {
        super(pages);
    }

    public toString(): String {
        return (`Magazine: ${this.title} with number of pages:` +
            ` ${this.pages.length}${this.pageSuffix}`);
    }

    public get title(): String {
        return this._title;
    }

    public set title(value: String) {
        this._title = value;
    }
}
