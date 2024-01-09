let displayName: string = "Kris's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost = 425;
originalCost = "A lot of money"

//There are 7 primitive Type available in JavaScript:
/*
String, Boolean, Number, BigInt, Null, Undefined, Symbol
* Symbol started with ES6 and up
Apart from primitive types there is also:
Object type
In JS functions are objects;
*/
/*
type inference => ts can figure out the type
gradual typing => use 'any' type to let the compiler know to but out of type inference.
Think on any as falling back to orginal JS typing.
*/
/*
Interface definision has no impact on the code compilation. 
Interface can have a state but aloso behavior;
Add ? to the end of prop to make it an optional
*/
/*
To Limit the values on the type use enums.
Enum a strongly-typed object that defines a set of values
Remember by default, enum assigns numeric values. Use custom values if numbers are not useful;

Alternative way to Enums are Literal Types, values separated by a pipe symbol
*/
/*
TypeScript accepts Union Types. I can spefify different types variable can take.
When declaring a variable, specify multiple types with a pipe
use type key-word to define an aliase for a set of types.
*be careful with this approach, this is error prone
Check type at the run-time using typeof operator
*/

if (typeof originalCost === "number") {
    let cost: number = originalCost;
} else {
    let x = originalCost;
}


enum InventoryItemType {
    Computer = "computer", 
    Furniture = "furniture"
};

interface InventoryItem {
    displayName: string,
    inventoryType: "computer" | "furniture",
    readonly trackingNumber: string,
    createDate: Date,
    originalCost?: number

    addNote?: (note: string) => string;
};

const getInventoryItem = (trackingNumber: string): InventoryItem => {
    return null;
};

const saveInventoryItem = (item: InventoryItem) => {
};

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "Microsoft Surface Laptop 6",
    inventoryType: "computer",
    trackingNumber: "",
    createDate: new Date()
});