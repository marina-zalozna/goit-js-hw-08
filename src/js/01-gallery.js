// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createImageMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageMarkup(items) {
  return items.map(({preview, original, description}) => {
   return `<div class="gallery__item">
   <a class="gallery__link" href=${original.value}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  })
  .join("");
}
const onContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains(".gallery")) return;
    const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
};

galleryRef.addEventListener("click", onContainerClick);
