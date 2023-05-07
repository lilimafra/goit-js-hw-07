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
galleryContainer.addEventListener('click', clickOnimage);

function action(imageAction) {
    imageAction.preventDefault();
}

Array.from(galleryContainer).forEach(img => {
    img.addEventListener('click', event => {
        const image_selection = +event.target.dataset.imgMostrar
    })
})


//const btnAbrirModal = document.querySelector("#ServicioCliente");
//const btnCerrarModal = document.querySelector("#cerrarmodal");
//const modal = document.querySelector("#modal");

//btnAbrirModal.addEventListener("click", () => {
//modal.showModal();
//});

//btnCerrarModal.addEventListener("click", () => {
//modal.close();
//});