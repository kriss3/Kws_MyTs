let displayName = "Kris's standing desk";
let inventoryType = "furniture";
let trackingNumber = "FD12345";
let createDate = new Date();
let originalCost = 425;

const getInventoryItem = (trackingNumber) => {};

const saveInventoryItem = () => {};

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);