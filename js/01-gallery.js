// Задание 1 
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.
// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.


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