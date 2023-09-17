

let proHTML = "";
products.forEach((product) => {
    proHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="select">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-productId="${product.id}" >
            Add to Cart
          </button>
        </div>`;
})
const main1 = document.querySelector(".arc-grid");
main1.innerHTML = proHTML;
const buttons = document.querySelectorAll(".add-to-cart-button");
buttons.forEach((button, index) => {
    button.addEventListener("click",() => {
        let timer;
        clearTimeout(timer);
        const selects = document.querySelectorAll(".select");
        const selectNum = Number(selects[index].value);
        const productId = button.dataset.productId;
        let matchItem;
        cart.forEach((el) => {
           if(el.productId === productId) {
               matchItem = el;
           }
        })
        if(matchItem) {
            matchItem.quantity += selectNum;
        } else {
            cart.push({productId: productId, quantity: selectNum})
        }
        console.log(cart);
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
        })
        const cartQ = document.querySelector(".cart-quantity");
        cartQ.innerHTML = totalQuantity;
        console.log(totalQuantity)
        const addedMessages = document.querySelectorAll(".added-to-cart");
        addedMessages[index].classList.add("added-js");
        timer = setTimeout(() => {
            addedMessages[index].classList.remove("added-js");
        }, 2000);
    })
})

