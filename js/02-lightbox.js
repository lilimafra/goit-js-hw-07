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
            alt="${item.description}"/>
        </a>
        </li>`
        )
    .join("");
    

galleryContainer.insertAdjacentHTML("afterbegin", builderGallery);
galleryContainer.addEventListener('click', (event) => event.preventDefault())

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
