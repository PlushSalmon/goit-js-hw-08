// Add imports above this lined 

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const links = {
    galleryUl: document.querySelector(".gallery"),
};

const makeMarkup = galleryItems.map(galleryItem =>
    `<a
    class="gallery__item" 
    href="${galleryItem.original}"
    ><img 
    class="gallery__image" 
    src="${galleryItem.preview}" 
    alt="${galleryItem.description}"
    ></img></a>`).join('');

links.galleryUl.insertAdjacentHTML("afterbegin", makeMarkup);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt"
})
