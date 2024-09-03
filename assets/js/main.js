let imgTypeShoes = document.querySelectorAll('.js-type-shoes')
for (let img = 0; img < imgTypeShoes.length; img++){
    imgTypeShoes[img].addEventListener('mouseover', ()=>{
        parentNode = imgTypeShoes[img].parentNode;
        parentNode.firstElementChild.classList.remove('opacity')
    })
    imgTypeShoes[img].addEventListener('mouseout', ()=>{
        parentNode = imgTypeShoes[img].parentNode;
        parentNode.firstElementChild.classList.add('opacity')
    })
}

const products = document.querySelectorAll('.product')
function updateCarousel() {
    const width = window.innerWidth;
    const carouselInner = document.querySelector('.product-slider .carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items

    let itemsPerSlide;
    if (width >= 992) {
        itemsPerSlide = 4;
    } else if (width >= 768) {
        itemsPerSlide = 3;
    } else if (width >= 576){
        itemsPerSlide = 2;
    }
    else {
        itemsPerSlide = 1;
    }

    const totalItems = Math.ceil(products.length / itemsPerSlide);
    for (let i = 0; i < totalItems; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (i === 0) {
            carouselItem.classList.add('active');
        }

        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = i * itemsPerSlide; j < (i + 1) * itemsPerSlide && j < products.length; j++) {
            const col = document.createElement('div');
            if (width >= 992) {
                col.classList.add('col-lg-3');
            } else if (width >= 768) {
                col.classList.add('col-md-4');
            } else if(width >= 576){
                col.classList.add('col-sm-6');
            } else{
                col.classList.add('col-12');
            }

            col.appendChild(products[j].cloneNode(true));
            row.appendChild(col);
        }

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }
}

// Call the function on page load and window resize
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);