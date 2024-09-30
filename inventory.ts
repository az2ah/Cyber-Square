interface Product{
    id:number;
    name:string;
    price:number;
    qty:number;
}
class Inventory{
    private products:Product[]=[];
    addProduct(product:Product):void{
        this.products.push(product);
    }
    displayProduct():void{
        console.log("Inventory List:");
        this.products.forEach(product=>{
            console.log(`id:${product.id},name:${product.name},price:${product.price},quantity:${product.qty}`);
        });
    }
}
const inventory = new Inventory();
inventory.addProduct({id:1, name:"laptop", price:12000, qty:5});
inventory.displayProduct();