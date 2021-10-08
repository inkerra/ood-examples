import { PagesIterableItem } from './item';
import { Pages } from './pages';

export class Comics extends PagesIterableItem {

    constructor(protected _title: String, protected _author: String,
                protected _artist: String, protected readonly pages: Pages) {
      super();
      super.setPages(pages);
    }

    public toString(): String {
        return (
            `Comics: ${this.title} by ${this.author}, the artist is ` +
            `${this.artist}, number of pages: ${this.pages.length}` +
            ``);
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

    public get artist(): String {
        return this._artist;
    }

    public set artist(value: String) {
        this._artist = value;
    }
}
