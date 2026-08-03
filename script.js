// =========================
// SHAMPOOHUB JAVASCRIPT
// =========================

// Login
function showHome(){

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// Logout
function logout(){

    document.getElementById("homePage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// =========================
// SEARCH
// =========================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(card){

let name = card.querySelector("h3").textContent.toLowerCase();

if(name.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =========================
// ADD TO CART
// =========================

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("🛒 Product added to cart successfully!");

});

});

// =========================
// SETTINGS
// =========================

const supportCards=document.querySelectorAll(".support-card");

supportCards.forEach(function(card){

card.addEventListener("click",function(){

let title=this.querySelector("h3").innerText;

switch(title){

case "FAQ":

alert(
`FAQ

• How do I order?

Select a shampoo then click Add to Cart.

• How long is delivery?

Usually 3–5 business days.

• What payment methods are available?

Cash on Delivery and Online Payment.`
);

break;

case "User Guide":

alert(
`USER GUIDE

1. Login

2. Browse Products

3. Search Shampoo

4. Add to Cart

5. Contact Support if you need assistance.`
);

break;

case "Report Issue":

alert(
`REPORT ISSUE

Email:
support@shampoohub.com

Phone:
0912-345-6789

Describe your problem and our support team will assist you.`
);

break;

case "Contact Support":

alert(
`CONTACT SUPPORT

📧 support@shampoohub.com

📞 0912-345-6789

Monday - Saturday

8:00 AM - 6:00 PM`
);

break;

case "Feedback":

let feedback=prompt("Please leave your feedback:");

if(feedback){

alert("❤️ Thank you for your feedback!");

}

break;

}

});

});

// =========================
// NAVIGATION
// =========================

const links=document.querySelectorAll("nav a");

links.forEach(function(link){

link.addEventListener("click",function(e){

let href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

// =========================
// PAGE LOADED
// =========================

window.onload=function(){

document.getElementById("homePage").style.display="none";

};