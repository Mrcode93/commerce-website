let hamburger = document.querySelector(".hamburger");
let hambImg = document.querySelector(".hamburger img");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        hambImg.src = "images/icon-close.svg";
    } else {
        hambImg.src = "images/icon-menu.svg";
    }
});
///change the main image
let images = document.querySelectorAll(".thumbnails img");
let mainImg = document.querySelector(".view img");

images.forEach((ele) => {
    ele.addEventListener("click", () => {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("select");
        }
        mainImg.src = ele.getAttribute("src").replace("-thumbnail", "");
        ele.classList.add("select");
    });
});
//plus and minus btns
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let count = document.querySelector(".click p");
let counter = 0;
count.innerHTML = counter;
plus.onclick = () => {
    counter++;
    count.innerHTML = counter;
};
minus.onclick = () => {
    if (counter <= 0) {
        counter = 0;
    } else {
        counter--;
        count.innerHTML = counter;
    }
};
//add the product to the cart
let addBtn = document.querySelector(".btns button");
let cart = document.querySelector(".cartDiv .content");
let mainDiv = document.querySelector(".cartDiv");

let span = document.querySelector(".content span");
addBtn.addEventListener("click", addProduct);

function addProduct(event) {
    event.preventDefault();
    if (counter > 0) {
        span.innerHTML = "";
        cart.style.cssText = "justify-content: flex-start;";
        cart.innerHTML += `
        <div class="product">
        <img src="${mainImg.src}" alt='product'>
        <div class="feild">
        <p>Fall Limited Edition Sneakers</p>
        <p id="price">$125.00 x ${counter}   <span>$${
      125.0 * counter
    }.00</span></p>
        </div>
        <button type='button' id="delete"><img src='images/icon-delete.svg'></button>
        </div>
        `;
        let checkout = document.querySelector(".checkout");
        checkout.style.display = "inline-block";
    } else {
        alert("Please enter a number");
    }
    counter = 0;
    count.innerHTML = counter;
    let del = document.querySelectorAll("#delete");

    let note = document.querySelector(".notification");
    let divs = document.querySelectorAll(".product");
    for (let i = 0; i < divs.length; i++) {
        console.log(divs.length);
        note.style.cssText = "visibility:visible;";
        note.innerHTML = divs.length;
    }

    del.forEach((e) => {
        e.onclick = () => {
            e.parentElement.remove();
            divs = divs.length - 1;
        };
    });
}