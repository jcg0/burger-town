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
        const orderDiv = getElement("#order_details");
        if (this.items.length === 0) {
            orderDiv.innerHTML = "<p><i>Your order is empty</i></p>";
            return;
        }
        orderDiv.innerHTML = this.items.map(item => `<p>${item.toString()}</p>`).join("");
    }
}

class Burger {
    constructor(type, size, toppings) {
        // default values for type and size
        this.type = type || (size ? "regular" : null);
        this.size = size || (type ? "single" : null);
        this.toppings = toppings || [];
    }

    isValid() {
        return this.type !== null && this.size !== null;
    }

    toString() {
        let descending = `${this.size} ${this.type} burger`;
        if (this.toppings.length > 0) {
            descending += ` with ${this.toppings.join(", ")}`;
        }
        return descending;
    }
}

class Drink {
    constructor(type, size) {
        this.type = size || "water";
        this.size = type || "small";
    }

    toString() {
        return `${this.size} ${this.type}`;
    }
}

class Fries {
    constructor(type, size) {
        this.type = size || "regular";
        this.size = type || "small";
    }

    toString() {
        return `${this.size} ${this.type} fries`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const order = new Order();
   

    getElement("#add_order").addEventListener("click", () => {
        // build the burger
        const burgerType = getElement("input[name='burger_type']:checked")?.value || null;
        const burgerSize = getElement("input[name='burger_size']:checked")?.value || null;

        const toppings = document.querySelectorAll("#toppings input:checked");
        const burgerToppings = [];
        for (let i = 0; i< toppings.length; i++) {
            burgerToppings.push(toppings[i].value);
        }

        const burger = new Burger(burgerType, burgerSize, burgerToppings);

        if (burger.isValid()) {
            order.addItem(burger);
        }

        // fill the drink
        const drinkType = getElement("input[name='drink_type']:checked")?.value || null;
        const drinkSize = getElement("input[name='drink_size']:checked")?.value || null;
        const drink = new Drink(drinkType, drinkSize);
        order.addItem(drink);

        // order the fries
        const friesType = getElement("input[name='fry_type']:checked")?.value || null;
        const friesSize = getElement("input[name='fry_size']:checked")?.value || null;
        const fries = new Fries(friesType, friesSize);
        order.addItem(fries);

        // resets the order form
        document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
});
    }); 

    getElement("#clear_order").addEventListener("click", () => {
        order.clearOrder();
    });
    
    order.displayOrder();
}); 