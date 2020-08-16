
// const cartCard = document.getElementById('cart-wrapper');





// (function(){
//     const showCartBtn = document.getElementById('show-cart-btn');
//     const cartCard = document.getElementById('cart-wrapper');
//     showCartBtn.addEventListener('click',function(){
//         cartCard.classList.toggle('hide');
//         accountCard.classList.add('hide');
//         let cartItems = document.querySelectorAll('.cart-items__item');
//         let cartItemsRemove = document.querySelectorAll('.cart-item__remove');
//         cartItemsRemove.forEach(function(element, index){
//             element.addEventListener('click',function(){
//                 console.log('you clicked it'+cartItemsRemove[index]+cartItems[index]);
//                 cartItems[index].remove(index);
//             })
//     })
        
//     })
// })();





// (function(){

//     const cartWrapper = document.querySelector('.cart-items-wrapper');
//     const shopItemsbtn = document.querySelectorAll('.add-to-cart-btn');
//     const shopItems = document.querySelectorAll('.item-wrapper');
//     shopItemsbtn .forEach(function(element, index){
//         element.addEventListener('click',function(e){
//             if(e.target.classList.contains('add-to-cart-btn')){
                
//                 e.stopPropagation
//                 e.preventDefault();
//                 console.log(shopItems[index].firstChild.nextSibling.firstChild.nextSibling.innerHTML);
//                 const cartImg = shopItems[index].firstChild.nextSibling.firstChild.nextSibling.innerHTML;
//                 const productTitle = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.innerText;
//                 console.log(productTitle);
//                 const productDesc = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.innerText;
//                 console.log(productDesc);
//                 const productpriceDolar = shopItems[index].firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.innerText;
//                 console.log(productpriceDolar);
//                 const productpriceCent = shopItems[index].firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
                
//                 let addToCartEllement = `<div class="cart-items__item">

//                                     <div class="cart-item__img">
//                                         ${cartImg}
//                                     </div>

//                                     <div class="cart-item__desc">
//                                         <span>${productTitle}</span>
//                                         <p>${productDesc}</p>
//                                         <div class="cart-item__qty">
//                                             <div class="quantity">
//                                                 <button class="btn minus1">-</button>
//                                                 <input class="quantity qty-js" id="id_form-0-quantity" min="0" name="form-0-quantity" value="1" type="number">
//                                                 <button class="btn add1">+</button>
//                                             </div>
                                            
//                                         </div>
//                                     </div>

//                                     <div class="cart-item__price">
//                                         <span>$ ${productpriceDolar}.${productpriceCent }</span>
                                        
//                                         <p>In-Stock!</p>
//                                     </div>
//                                     <div class="cart-item__remove">
//                                         <span>&times</span>
//                                     </div>

//                                 </div>
//                                 `
//                 cartWrapper.insertAdjacentHTML("beforeend", addToCartEllement);
//                 let cartSubtotal = document.getElementById('cartSubtotal').innerText;
//                 let newCartTotal = parseFloat(cartSubtotal) + parseFloat(productpriceDolar + '.' + productpriceCent);
//                 document.getElementById('cartSubtotal').innerHTML = newCartTotal;
//                 const productWeight = shopItems[index].firstChild.nextSibling.nextSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.innerText;
                
//                 let cartWeight = document.getElementById('cartShippingWeight').innerText;
//                 let newCartWeight = parseInt(cartWeight) + parseInt(productWeight);
                
//                 document.getElementById('cartShippingWeight').innerHTML = newCartWeight;

                
//                 // qty inputs
                
                
//                     (function() {


//                         var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                         InputTag.forEach(function(element, index){
//                             element.addEventListener('change', function(){
//                                 if(InputTag[index].value < 0 ){
//                                     InputTag[index].value = 0;
                                    
//                                 }
//                                 if(InputTag[index].value > 100 ){
//                                     InputTag[index].value = 100;
                                    
//                                 }
//                             })
//                         })


//                         const inputMinus1 = document.querySelectorAll('.minus1');
//                         inputMinus1.forEach(function (element, index){
                        
//                             element.addEventListener('click', function(e){
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                                 if(InputTag[index].value > 0 ){
//                                     InputTag[index].value = parseInt(InputTag[index].value) - 1; 
//                                 }
                                
                                
//                             })
//                         })



//                         const inputadd1 = document.querySelectorAll('.add1');
//                         inputadd1.forEach(function (element, index){
                        
//                             element.addEventListener('click', function(e){
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                                 if(InputTag[index].value < 100 ){
//                                     InputTag[index].value = parseInt(InputTag[index].value) + 1;

//                                 }
                                
                                
//                             })
//                         })



                        
//                     })();
                    
                    
                

                    
            
                
//                     let cartItems = document.querySelectorAll('.cart-items__item');
//                     let cartItemsRemove = document.querySelectorAll('.cart-item__remove');
//                     cartItemsRemove.forEach(function(element, index){
//                         element.addEventListener('click',function(){
//                             console.log('you clicked it'+cartItemsRemove[index]+cartItems[index]);
//                             cartItems[index].remove(index);

//                             // updating the cart indexes



//                             var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                             InputTag.forEach(function(element, index){
//                                 element.addEventListener('change', function(){
//                                     if(InputTag[index].value < 0 ){
//                                         InputTag[index].value = 0;
                                        
//                                     }
//                                     if(InputTag[index].value > 100 ){
//                                         InputTag[index].value = 100;
                                        
//                                     }
//                                 })
//                             })
    
    
//                             const inputMinus1 = document.querySelectorAll('.minus1');
//                             inputMinus1.forEach(function (element, index){
                            
//                                 element.addEventListener('click', function(e){
//                                     e.preventDefault();
//                                     e.stopPropagation();
//                                     var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                                     if(InputTag[index].value > 0 ){
//                                         InputTag[index].value = parseInt(InputTag[index].value) - 1; 
//                                     }
                                    
                                    
//                                 })
//                             })
    
    
    
//                             const inputadd1 = document.querySelectorAll('.add1');
//                             inputadd1.forEach(function (element, index){
                            
//                                 element.addEventListener('click', function(e){
//                                     e.preventDefault();
//                                     e.stopPropagation();
//                                     var InputTag = document.querySelectorAll('.qty-js[type="number"]');
//                                     if(InputTag[index].value < 100 ){
//                                         InputTag[index].value = parseInt(InputTag[index].value) + 1;
    
//                                     }
                                    
                                    
//                                 })
//                             })





//                         })
//                     })
                
                            
//             }                
                            
//         });

        
        
        
//     });
// })();

// const closeCartBtn = document.getElementById('closeCartBtn')
//     closeCartBtn.addEventListener('click', function(){
//     cartCard.classList.add('hide');
// });

// let inputTag = document.querySelectorAll('.qty-js[type="number"]');
// inputTag.forEach(function(element,index){
//     element.addEventListener('change', function(event){
       
//         console.log('Value at index:' + index + 'changed');
//     })
// })

