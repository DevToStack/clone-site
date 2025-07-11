const sideBar = document.querySelector(".side-bar");
const products= document.querySelector(".products");
const newProducts = document.querySelector(".new-products");
            
function openSideBar(){
    sideBar.style.transform="translateX(0%)";
}
function closeSideBar(){
    sideBar.style.transform="translateX(-100%)";
}
            
function productsC(classC){
    fetch('products.json')
        .then(res => res.json())
        .then(products => {
    
            products.forEach(productData => {
            const product = document.createElement('div');
            product.className = 'product-card';
            product.innerHTML = `
                <div class="top">
                    <div class="heart-icon">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="image-container">
                        <img loading="lazy" src="${productData.image}" alt="${productData.name}">
                    </div>
                    <h5>${productData.name}</h5>
                    <p style="font-size:16px"><span class="price"><strike>₹${productData.dprice}</strike></span>₹${productData.price}</p>
                    <div class="star">
                    </div>
                </div>
                <div class="bottom">
                    <button>Add to Cart</button>
                </div>
                `;
                const starDiv = product.querySelector(".star");
                
                if (productData.rating !== null) {
                    starDiv.innerHTML = `<p>${productData.rating}<i class="fas fa-star"></i></p>`;
                }else {
                    starDiv.style.display = 'none';
                }
            classC.appendChild(product);
            });
            
        setProducts(classC);
        })
    .catch(err => console.error('Failed to load products:', err));
}

function setProducts(classP){           
    const moreProducts= document.createElement('div');
    moreProducts.className = 'more-products-container';
    moreProducts.innerHTML = `
        <div class="more-products shadow">
            <a>More</a>
        </div>
    `;
    classP.appendChild(moreProducts);
}
            
productsC(products);
productsC(newProducts);
