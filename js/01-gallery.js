import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarcup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);
gallaryContainer.addEventListener('click', onClickImages);

function createGalleryImagesMarcup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
}

function onClickImages(e) {
  gallaryContainer.addEventListener('keydown', (e) => {
 if (e.code ==="Escape") {
  image.close();
}
  });
  e.preventDefault(); 
  
 const image = basicLightbox.create(`
  <img src="${e.target.dataset.source}"/>`
);
if (!e.target.classList.contains("gallery__image")) {
  return;
} else {
    image.show();
  }
}

console.log(galleryItems);