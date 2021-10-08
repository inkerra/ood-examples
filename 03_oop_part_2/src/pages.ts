import { Page } from './page';

export class Pages {

    constructor(public pages: Page[]) {}

    public get length(): number {
        return this.pages.length;
    }

    public getPage(idx: number): Page {
        return this.pages[idx];
    }
}
