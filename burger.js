"use strict";
const getElement = selector => document.querySelector(selector);

class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.displayOrder();
    }

    clearOrder() {
        this.items = [];
        this.displayOrder();
    }

    displayOrder() {
        const orderDiv = getElement("order_details");
        if (this.items.length === 0) {
            orderDiv.textContent = "<p><i>Your order is empty</i></p>";
            return;
        }
        orderDiv.textContent = this.items.map(item => `<p>${item.toString()}</p>`).join("");
    }
}

class Burger {
    constructor(type, size, toppings) {
        // default values for type and size
        this.type = type || (type ? "regular" : null);
        this.size = size || (size ? "single" : null);
        this.toppings = toppings;
    }

    isValid() {
        return this.type !== null && this.size !== null;
    }

    toString() {
        const toppingsString = this.toppings.length ? ` with ${this.toppings.join(", ")}` : "";
        return `${this.size} ${this.type} burger${toppingsString}`;
    }
}

class Drink {
    constructor(type, size) {
        this.type = type || "water";
        this.size = size || "small";
    }

    toString() {
        return `${this.size} ${this.type}`;
    }
}

class Fries {
    constructor(type, size) {
        this.type = type || "regular";
        this.size = size || "small";
    }

    toString() {
        return `${this.size} ${this.type} fries`;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    getElement("#add_order").addEventListener("click", () => {
        
    }); 

    getElement("#clear_order").addEventListener("click", () => {
        
    });
    
}); 