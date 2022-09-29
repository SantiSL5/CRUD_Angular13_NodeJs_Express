export class Product {
    slug: string;
    name: string;
    price: string;

    constructor( slug: string, name: string, photo: string ) {
        this.slug = slug;
        this.name = name;
        this.price = photo;
    }
}