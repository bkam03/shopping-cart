/*Reproduce the layout.
Generate the items in the cart with the data given to you. Item data should not be hardcoded!
Find images that match the product
When clicking on the product name, it will show and hide (toggle) the description of the product.
For the subtotal, add up the total price of all items. This should not be hardcoded!
note: you can use the cart.svg file as your image, just include it in your HTML markup*/
var cartArray = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", image: "http://res.cloudinary.com/lightspeed-retail/image/upload/c_pad,h_256,q_75,w_256/pnhmexe5vc97zejw3jbk.jpg", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", image: "https://lastfm-img2.akamaized.net/i/u/64s/daa25025f4d44935aa05a4409787f61a.jpg",price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", image : "http://68.media.tumblr.com/avatar_d0099a21bf0e_128.png", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included.", image: "http://img1.yiwugou.com/i004/2015/09/24/41/30521c601d7552b6528654a44a47d2ea.jpg@128w_128h.jpg", price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", image: "http://thumbnail.image.rakuten.co.jp/@0_mall/upsports/cabinet/ocean-pacific11/op524406pk_1.jpg?_ex=128x128", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", image: "http://ic.pics.livejournal.com/fampar/9915960/447567/447567_original.jpg", price: 599.99}];


function displayCart() {
  var shoppingCart = document.getElementById("shoppingList"); //targeting main div


  //loop through products
  for(var i = 0; i < cartArray.length;i++) {

    var itemDiv = document.createElement("div"); //make the div
    itemDiv.className = "cartItem"; //class it

    var pic = document.createElement("img"); //create image
    pic.className = "thumbnail"; //class it
    pic.src = cartArray[i].image;
    pic.alt = "product pic";
    itemDiv.appendChild(pic);

    var wordSection = document.createElement("div");
    wordSection.className = "general";
    itemDiv.appendChild(wordSection);

    var name = document.createElement("p");
    name.className = "product";
    name.innerHTML = cartArray[i].product;
    wordSection.appendChild(name);

    var desc = document.createElement("p");
    desc.className = "description";
    desc.innerHTML = cartArray[i].description;
    desc.style.display = "none";
    wordSection.appendChild(desc);

    var dPrice = document.createElement("div");
    dPrice.className = "dPrice";
    itemDiv.appendChild(dPrice);

   var dollarSign = document.createElement("p");
    dollarSign.className = "dollar";
    dollarSign.innerHTML = "$";
    dPrice.appendChild(dollarSign);

    var price = document.createElement("p");
    price.className = "price";
    price.innerHTML = cartArray[i].price;
    dPrice.appendChild(price);

    
    shoppingCart.appendChild(itemDiv); //append it to shoppingList
  }
    //console.log(shoppingList);
  //make the div everything goes in
  

}

function subtotal() {
  var priceArray = document.getElementsByClassName("price");
  var sum = 0;
  for(var i=0;i<priceArray.length;i++) {
    sum += Number(priceArray[i].innerHTML);
  }
  var sumTarget = document.getElementById("totalCost");
  sumTarget.innerHTML = "$" + sum;
    //console.log(sumTarget);
}


displayCart();  //load everything up at start
subtotal();

//get all the cartItems and stick on eventListeners


var getCartItems = document.getElementsByClassName("cartItem"); //grab the class
for(var i = 0; i < getCartItems.length;i++) {
  getCartItems[i].addEventListener("click", showDesc);

  //console.log(i);
}


function showDesc() {
  var desc = this.querySelectorAll(".description")[0];
  if(desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }

  //console.log(desc);
}