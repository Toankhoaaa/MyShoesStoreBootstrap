let imgTypeShoes = document.querySelectorAll('.js-type-shoes')
console.log(imgTypeShoes)
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