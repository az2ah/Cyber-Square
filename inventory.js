var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.displayProduct = function () {
        console.log("Inventory List:");
        this.products.forEach(function (product) {
            console.log("id:".concat(product.id, ",name:").concat(product.name, ",price:").concat(product.price, ",quantity:").concat(product.qty));
        });
    };
    return Inventory;
}());
var inventory = new Inventory();
inventory.addProduct({ id: 1, name: "laptop", price: 12000, qty: 5 });
inventory.displayProduct();
