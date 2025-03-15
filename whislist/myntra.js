let cartQuantity = 0;
document.querySelector(".summary").innerText =`YOUR BAG HAS ${cartQuantity}  ITEMS`;
// add in your cart
document.querySelector(".add").onclick = function () {
    cartQuantity = cartQuantity + 1;
  
    document.querySelector(".summary").innerText = `YOUR BAG HAS ${cartQuantity} ITEMS`;

    
};
document.querySelector(".move").onclick = function () {
    cartQuantity = cartQuantity - 1;

    // quantity is not negative
    if (cartQuantity < 0) {
        cartQuantity = 0;
    }

    document.querySelector(".summary").innerText = `YOUR BAG HAS ${cartQuantity} ITEMS`;
};
// add double quantity in your cart
document.querySelector(".double").onclick = function() {
cartQuantity =cartQuantity+1+1; 
document.querySelector(".summary").innerText = `YOUR BAG HAS ${cartQuantity} ITEMS`;

};
// reset your cart 
document.querySelector(".reset").onclick =function(){
      cartQuantity =cartQuantity*0;
      document.querySelector(".summary").innerText = `YOUR BAG HAS ${cartQuantity} ITEMS`;
}
//dark mode

let button = document.querySelector(".mode");
mode=addEventListener("click", ()=>{
document.body.classList.toggle("mode")
})