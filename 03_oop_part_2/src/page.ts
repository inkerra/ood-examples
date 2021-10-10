type PageMaterial = 'paper' | 'simple paper' | 'glossy paper';
type PageType = 'with text' | 'with article' | 'with images' | 'with some content';

export class Page {
    constructor(private pageNumber: number, private pageType: PageType,
        private pageMaterial: PageMaterial) {}

    public toString(): string {
        return (`here is page ${this.pageType} #${this.pageNumber} and it's ` +
            `material is ${this.pageMaterial}`);
    }
}
