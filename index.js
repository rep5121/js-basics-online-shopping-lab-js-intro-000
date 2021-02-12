var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random()*100);
 let objItem = Object.assign({"itemName": item, "itemPrice": price});
 console.log(cart.push(objItem));

 return `${item} has been added to your cart.`;
}

function viewCart() {
  let resultStr = "In your cart, you have ";

  if (cart.length === 1){
    let singleItem = `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return resultStr + singleItem;
    }

  if (cart.length > 1){
    let moreItems = "";
    for(let i = 0; i < cart.length - 1; i++){
      moreItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    return resultStr + moreItems + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`;
    }

  else{
    return "Your shopping cart is empty.";
    }
}

function total() {
  var sum = 0;
  for(let s = 0; s < cart.length; s++){
    let curPrice = cart[s].itemPrice;
    sum += curPrice;
    }
  return sum;
}

function removeFromCart(item) {
  for (r  = 0; r < cart.length; r++){
    let curItem = cart[r].itemName;

    if(curItem === item){
      cart.splice(curItem);
      return cart;
      }

    else{
      return "That item is not in your cart."
      }  
    
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
