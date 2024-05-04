window.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelectorAll(".product"),
        buttons = document.querySelectorAll("button"),
        openBtn = document.querySelector(".open");

    function createCart() {
        let cart = document.createElement("div"),
            field = document.createElement("div"),
            heading = document.createElement("h2"),
            closeBtn = document.createElement("button");

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent = "В нашей корзине"
        closeBtn.textContent = "Закрыть"

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    }

    createCart()

    let cart = document.querySelector(".cart"),
        closeBtn = document.querySelector(".close")
    field = this.document.querySelector(".cart-field")

    openBtn.addEventListener('click', function () {
        cart.style.display = "block"
    })
    closeBtn.addEventListener('click', function () {
        cart.style.display = "none"
    })

    buttons.forEach((item, index) => {
        item.addEventListener('click', function () {
            let cloneItem = products[index].cloneNode(true),
                btn = cloneItem.querySelector('button');

            btn.remove()
            field.appendChild(cloneItem)
            products[index].remove()
        })
    });


})