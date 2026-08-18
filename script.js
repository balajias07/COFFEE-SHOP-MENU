let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    displayCart();
}

function displayCart() {

    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    cartElement.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button class="remove-btn"
                    onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartElement.appendChild(div);
    });

    totalElement.textContent = total;
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    alert(
        "🎉 Order placed successfully!\n\n" +
        "Total Amount: ₹" + total +
        "\n\nThank you for ordering from Bean & Brew ☕"
    );

    cart = [];

    displayCart();
}

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been sent successfully. ☕"
    );

    event.target.reset();
}