import { PagesIterableItem } from './item';
import { Pages } from './pages';

export class Magazine extends PagesIterableItem {

    constructor(protected _title: String, protected readonly pages: Pages) {
        super();
    }

    public toString(): String {
        return (`Magazine: ${this.title} with number of pages:` +
            ` ${this.pages.length}`);
    }

    public get title(): String {
        return this._title;
    }

    public set title(value: String) {
        this._title = value;
    }
}
