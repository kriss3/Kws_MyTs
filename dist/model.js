var displayName = "Kris's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD12345";
var createDate = new Date();
var originalCost = 425;
originalCost = "A lot of money";
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
    var cost = originalCost;
}
else {
    var x = originalCost;
}
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
;
;
var getInventoryItem = function (trackingNumber) {
    return null;
};
var saveInventoryItem = function (item) {
};
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Microsoft Surface Laptop 6",
    inventoryType: "computer",
    trackingNumber: "",
    createDate: new Date()
});
function clone(source) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
;
var clone2 = function (source) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
};
//in both below examples cloned and cloned2 will have infered type;
var cloned = clone(inventoryItem);
var cloned2 = clone2(inventoryItem);
;
var keyvalue1 = { Key: "myKey", Value: 1234 };
var keyvalue2 = { Key: 123, Value: true };
