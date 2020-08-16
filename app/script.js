// parallax effect

const parallax = document.querySelector(".instruction-title");
const innerText = document.querySelector('.inner-text');


window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
   
    parallax.style.backgroundPositionY = "-" + offset * 0.7 + "px";
    
})

// Navbar backgroung opacty + search bar opacity

// const topMenu = document.querySelector(".top-header-wrapper");

// window.addEventListener('scroll', function(){
//     let offset = window.pageYOffset;
//     let xOffset = window.innerWidth
//     console.log(xOffset)
//     // topMenu.style.top = 70 - offset + "px";
//     if (offset >= 39 && xOffset >= 700){
//         topMenu.style.position = "absolute";
//         topMenu.style.top = offset + "px";
//         topMenu.style.trasition= "0";

//     }
//     if(offset < 39 && xOffset > 700){
//         topMenu.style.top = 70 - offset + "px";
//         topMenu.style.position = "abosulte";
//         topMenu.style.trasition= "0";
//     }
    
// })

// Show  Cart Btn

const showCartBtn = document.getElementById('show-cart-btn');
const cartCard = document.getElementById('cart-wrapper');
const showAccountBtn = document.getElementById('show-account-btn');
const accountCard = document.getElementById('account-wrapper');
// close buttons______________________________________________________________
const closeCartBtn = document.getElementById('closeCartBtn')
const closeAccountBtn = document.getElementById('closeAccountBtn')


showCartBtn.addEventListener('click',function(){
    cartCard.classList.toggle('hide');
    accountCard.classList.add('hide');
    let cartItems = document.querySelectorAll('.cart-items__item');
    let cartItemsRemove = document.querySelectorAll('.cart-item__remove');

    cartItemsRemove.forEach(function(element, index){
        element.addEventListener('click',function(){
            console.log('you clicked it'+cartItemsRemove[index]+cartItems[index]);
            cartItems[index].remove(index);
        })
})
    
})
closeCartBtn.addEventListener('click', function(){
    cartCard.classList.add('hide');
})


showAccountBtn.addEventListener('click',function(){
    accountCard.classList.toggle('hide');
    cartCard.classList.add('hide');
    
})
closeAccountBtn.addEventListener('click', function(){
    accountCard.classList.add('hide');
})





    const cartWrapper = document.querySelector('.cart-items-wrapper');
    const shopItemsbtn = document.querySelectorAll('.add-to-cart-btn');
    const shopItems = document.querySelectorAll('.item-wrapper');
    shopItemsbtn .forEach(function(element, index){
        element.addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            
            // adding sheild on the item selected Start

            // const sheild = e.target.parentElement.parentElement.parentElement.nextElementSibling;
            const sheild = document.querySelectorAll('.alreadyadded__wrapper')
            sheild[index].style.display="flex"
            sheild[index].style.height="100%"

            // adding sheild on the item selected Finish

            console.log(shopItems[index].firstChild.nextSibling.firstChild.nextSibling.innerHTML);
            const cartImg = shopItems[index].firstChild.nextSibling.firstChild.nextSibling.innerHTML;
            const productTitle = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.innerText;
            console.log(productTitle);
            const productDesc = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.innerText;
            console.log(productDesc);
            const productpriceDolar = shopItems[index].firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.innerText;
            console.log(productpriceDolar);
            const productpriceCent = shopItems[index].firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
            
            let addToCartEllement = `<div class="cart-items__item">

                                <div class="cart-item__img">
                                    ${cartImg}
                                </div>

                                <div class="cart-item__desc">
                                    <span>${productTitle}</span>
                                    <p>${productDesc}</p>
                                    <div class="cart-item__qty">
                                        <div class="quantity">
                                            <button class="btn minus1">-</button>
                                            <input class="quantity qty-js" id="id_form-0-quantity" min="1" name="form-0-quantity" value="1" type="number">
                                            <button class="btn add1">+</button>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="cart-item__price">
                                    <span class="price-by-item"> ${productpriceDolar}.${productpriceCent }</span>
                                    <div class="cartPrice-wrapper">
                                        <span> $</span> 
                                        <span> ${productpriceDolar}.${productpriceCent }</span> 
                                    </div>
                                    <p>In-Stock!</p>
                                    
                                </div>
                                <div class="cart-item__remove">
                                    <span>&times</span>
                                </div>

                            </div>
                            `
            cartWrapper.insertAdjacentHTML("beforeend", addToCartEllement);


            

            
            const itemBubble = document.querySelector('.cart-trigger__icon-bubble');// cart count icon <-- Start
            itemBubble.classList.remove('hide');
            let cartlenghtWrapper = document.querySelector('.cart-items-wrapper');
            console.log(cartlenghtWrapper.childElementCount);
            itemBubble.innerText = cartlenghtWrapper.childElementCount;//<--cart count icon  Finish
            
            
            let cartSubtotal = document.getElementById('cartSubtotal').innerText;
            let newCartTotal = parseFloat(cartSubtotal) + parseFloat(productpriceDolar + '.' + productpriceCent);
            document.getElementById('cartSubtotal').innerHTML = newCartTotal;
            const productWeight = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.innerText;
            
            let cartWeight = document.getElementById('cartShippingWeight').innerText;
            let newCartWeight = parseInt(cartWeight) + parseInt(productWeight);
            
            document.getElementById('cartShippingWeight').innerHTML = newCartWeight;
            const inputAdd1 = document.querySelectorAll('.add1');
            inputAdd1.forEach(function(element){
                element.addEventListener('click', function(e){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    var qtyInputValue = e.target.parentElement.firstChild.nextElementSibling.nextElementSibling;
                    
                    if(qtyInputValue.value < 100 ){
                        qtyInputValue.value  = qtyInputValue.valueAsNumber + 1;
                        
                        const GhostCartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText;
                        console.log(GhostCartItemPrice);
                        const CartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                        console.log(CartItemPrice); 
                        let CartItemUpdatedPrice = (parseFloat(CartItemPrice.innerText)*100) + (parseFloat(GhostCartItemPrice)*100); 
                        console.log(CartItemUpdatedPrice);
                        CartItemPrice.innerHTML = (CartItemUpdatedPrice / 100).toFixed(2);   
                        
                    }
                
                
                })
        
            })
            const inputMinus1 = document.querySelectorAll('.minus1');
            inputMinus1.forEach(function(element){
    
                element.addEventListener('click', function(e){
                    console.log("you clicked the -");
                    e.preventDefault();
                    e.stopImmediatePropagation();
                   
                    let qtyInputValue = e.target.nextSibling.nextElementSibling
                   
                    
                    
                     if(qtyInputValue.value > 1 ){
                        qtyInputValue.value = qtyInputValue.valueAsNumber - 1;
                        
                        const GhostCartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText;
                        console.log(GhostCartItemPrice);
                        const CartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                        
                        console.log(CartItemPrice); 
                        let CartItemUpdatedPrice = parseFloat(CartItemPrice.innerText)*100 - parseFloat(GhostCartItemPrice)*100; 
                        console.log(CartItemUpdatedPrice);
                        CartItemPrice.innerHTML = (CartItemUpdatedPrice / 100).toFixed(2);    
                        
                        
                        
                     }
                
                
                })
    
    
    
            }) 
            
            
            // checking if the Value of the Input is great than 0 and less than 100
            var InputTag = document.querySelectorAll('.qty-js[type="number"]');
            InputTag.forEach(function(element, index){
                
                element.addEventListener('change', function(e){

                    if(InputTag[index].value > 0 && InputTag[index].value <= 100 ){
                        const GhostCartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
                        const CartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                        console.log(CartItemPrice); 
                        let CartItemUpdatedPrice = (parseFloat(GhostCartItemPrice.innerText)*100) * parseFloat(InputTag[index].value); 
                        console.log(CartItemUpdatedPrice);
                        CartItemPrice.innerHTML = (CartItemUpdatedPrice / 100).toFixed(2); 

                    } 
                    if(InputTag[index].value <= 0 ){
                        
                        InputTag[index].value = 1;
                        const GhostCartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
                        const CartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                        console.log(CartItemPrice); 
                        let CartItemUpdatedPrice = (parseFloat(GhostCartItemPrice.innerText)*100) * 1; 
                        console.log(CartItemUpdatedPrice);
                        CartItemPrice.innerHTML = (CartItemUpdatedPrice / 100).toFixed(2); 
                        
                    }
                    if(InputTag[index].value > 100 ){
                        InputTag[index].value = 100;
                        const GhostCartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
                        const CartItemPrice = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
                        console.log(CartItemPrice); 
                        let CartItemUpdatedPrice = (parseFloat(GhostCartItemPrice.innerText)*100) * 100; 
                        console.log(CartItemUpdatedPrice);
                        CartItemPrice.innerHTML = (CartItemUpdatedPrice / 100).toFixed(2); 
                    }
                    
                                         
                    
                    
                        
                    
                })
            })
            // Removing Items From Cart
            let cartItems = document.querySelectorAll('.cart-items__item');
            let cartItemsRemove = document.querySelectorAll('.cart-item__remove');
            cartItemsRemove.forEach(function(element, index){
                element.addEventListener('click',function(){
                    e.stopPropagation();
                    console.log('you clicked it'+cartItemsRemove[index]+cartItems[index]);
                    cartItems[index].remove(index);
                    // cart count icon <-- Start
                    
                    let cartlenghtWrapper = document.querySelector('.cart-items-wrapper');
                    
                    itemBubble.innerText = cartlenghtWrapper.childElementCount;
                    if(cartlenghtWrapper.childElementCount == 0){
                        const itemBubble = document.querySelector('.cart-trigger__icon-bubble');
                        itemBubble.classList.add('hide');
                    }
                    
                    //<--cart count icon  Finish
                })
            })
            
        });
        
    });






