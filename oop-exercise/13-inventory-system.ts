class Product {
    static #productCount: number = 0;
    readonly id = Product.#productCount++;
    name;
    price;

    constructor(name: string, price: number) {
        if (price < 0) {
            throw new Error("Price must be positive number");
        }
        if (name.length < 1) {
            throw new Error("Name must be at least 1 char");
        }
        this.name = name;
        this.price = price;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    #products: Product[] = [];

    addProduct(product: Product): void {
        this.#products.push(product);
    }

    listProducts(): string {
        return `${this.#products.forEach((product) =>
            console.log(
                `ID: ${product.id + 1}, Name: Laptop, Price: $${product.price}`
            )
        )}Total products created: ${this.#products.length}`;
    }
}
// Product.productCount = 10;

// const product = new Product("", 800);

// const product2 = new Product("Phone", 0);

// product.id = 5;
