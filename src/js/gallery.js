import SimpleLightbox from "simplelightbox";
import imagesArray from "../db/data.js";

const galleryRef = document.querySelector(".gallery");

const imageElements = imagesArray.map((image) => {
  return `
        <a
        href="${image.original}"
        class="gallery__item"
        ><img
          src="${image.preview}"
          class="gallery__image"
          alt="${image.description}"
          title="${image.description}"
      /></a>
    `;
});

galleryRef.insertAdjacentHTML("beforeend", imageElements.join(""));

var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
