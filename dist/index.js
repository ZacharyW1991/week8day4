"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart.sort();
        for (let i of this.cart) {
            if (i == item) {
                this.cart.splice(this.cart.indexOf(i), 1);
                this.cart.sort();
            }
        }
    }
    removeQuantityFromCart(item, q) {
        this.cart.sort();
        for (let i of this.cart) {
            if (i == item) {
                this.cart.splice(this.cart.indexOf(i), q);
                this.cart.sort();
            }
        }
    }
    cartTotal() {
        let total = 0;
        for (let i of this.cart) {
            total += i.price;
        }
        console.log(`Total: $${total}`);
    }
    printCart() {
        for (let i of this.cart) {
            console.log(`${i.name}: $${i.price}`);
        }
    }
}
class Shop {
    constructor(_items) {
        this._items = _items;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
function driver() {
    let zach = new User("Zach", 32, []);
    let itemA = new Item('Game', 79.99, 'A Game you splurge on');
    let itemB = new Item('Cable', 15.99, "A USB to USBMicro cable");
    let itemC = new Item('Charger', 7.99, 'A charger for a phone');
    let store = new Shop([itemA, itemB, itemC]);
    zach.addToCart(store.items[0]);
    zach.addToCart(store.items[0]);
    zach.addToCart(store.items[1]);
    zach.addToCart(store.items[1]);
    zach.addToCart(store.items[2]);
    zach.printCart();
    zach.cartTotal();
    zach.removeFromCart(store.items[0]);
    zach.printCart();
    zach.cartTotal();
    zach.removeQuantityFromCart(store.items[2], 1);
    zach.printCart();
    zach.cartTotal();
}
driver();
