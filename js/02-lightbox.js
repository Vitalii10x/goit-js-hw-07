// Задание 2
// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const createGallaryImages = createGalleryImagesMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('afterbegin', createGallaryImages);

function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"  
    />
  </a>`
).join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });

console.log(galleryItems);