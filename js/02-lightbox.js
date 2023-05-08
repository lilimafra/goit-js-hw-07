import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


let lightbox = new Simplelightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
