
export const cart = [
];

export function addToCart(productId, selectNum) {
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
}