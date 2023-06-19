// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector(`.gallery`);
galleryRef.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,});



function renderGallery(params) {
    return params.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
    }).join("");
}


