import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");


const builderGallery = galleryItems
        .map((item) =>
        `<li class= "gallery__item">
        <a class= "gallery__link" href="${item.original}">
            <img class= "gallery__image"
            src="${item.preview}" 
            data-source="${item.original}" 
            alt="${item.description}"/>
        </a>
        </li>`)
    .join("");
    

galleryContainer.insertAdjacentHTML("afterbegin", builderGallery);
galleryContainer.addEventListener('click', (event) => event.preventDefault())

galleryContainer.addEventListener('click', clickOnImage);

function clickOnImage(ImageAction) {

if (ImageAction.target.nodeName !== "IMG") {
    return;
}

const instance = basicLightbox.create(
    `<img src="${ImageAction.target.dataset.source}" width="400" height="200">`
);
    instance.show();
    
    galleryContainer.addEventListener("keydown", (ImageAction) => {
        if (ImageAction.code === "Escape") {
            instance.close()
        }
    })    
}
    
    
    
    
// import basicLightbox from 'basiclightbox';
// const instance = basicLightbox.create(
//   document.querySelector('#template')
// )


