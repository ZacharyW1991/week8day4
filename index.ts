import {v4 as uuidv4} from "uuid";

class Item{

    constructor(
        private _name:string,
        private _price:number,
        private _description:string,
        private _id: string = uuidv4()
    ){}

        public get id(): string {
            return this._id;
        }
        public set id(value: string) {
            this._id = value;
        }

        public get name():string{
            return this._name;
        }

        public set name(value:string){
            this._name=value;
        }

        public get price():number{
            return this._price;
        }

        public set price(value:number){
            this._price=value;
        }

        public get description():string{
            return this._description;
        }

        public set description(value:string){
            this._description=value;
        }
    
}

class User{

    constructor(
        private _name:string,
        private _age:number,
        private _cart:Item[]=[],
        private _id: string = uuidv4()
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get name():string{
        return this._name;
    }

    public set name(value:string){
        this._name=value;
    }

    public get age():number{
        return this._age;
    }

    public set age(value:number){
        this._age=value;
    }

    public get cart():Item[]{
        return this._cart;
    }

    public set cart(value:Item[]){
        this._cart=value;
    }

    addToCart(item:Item){
        this.cart.push(item)
    }

    removeFromCart(item:Item){
        this.cart.sort()
        for (let i of this.cart){
            if (i==item){
                this.cart.splice(this.cart.indexOf(i), 1)
                this.cart.sort()
            }
        }
    }

    removeQuantityFromCart(item:Item, q:number){
        this.cart.sort()
        for (let i of this.cart){
            if (i==item){
                this.cart.splice(this.cart.indexOf(i), q);
                this.cart.sort()
            }
        }
    }

    cartTotal(){
        let total=0;
        for (let i of this.cart){
            total+=i.price;
        }
        console.log(`Total: $${total}`);
    }

    printCart(){
        for (let i of this.cart){
            console.log(`${i.name}: $${i.price}`)
        }
    }

}

class Shop{
    constructor(
        private _items:Item[]
    ){
    }

    public get items():Item[]{
        return this._items;
    }

    public set items(value:Item[]){
        this._items=value
    }
}

function driver(){
    let zach=new User("Zach", 32, []);
    let itemA=new Item('Game', 79.99, 'A Game you splurge on');
    let itemB=new Item('Cable', 15.99, "A USB to USBMicro cable");
    let itemC=new Item('Charger', 7.99, 'A charger for a phone');
    let store=new Shop([itemA, itemB, itemC]);
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

driver()