import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego obrazu w oknie modalnym. Obejrzyj wersję demonstracyjną wideo o działaniu galerii.

// Wykonuj to zadanie w plikach 01-gallery.html i 01-gallery.js. Rozbij je na kilka podzadań:

// 1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.

// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; */}

// 2. Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.

// 3. Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania (.min) plików biblioteki.

// 4. Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.

// 5. Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.

// odnosze się do galleri w html
const gallery = document.querySelector(".gallery");
// wstawiam kolejne fotki do <div class=gallery> , nadając im tag, class, adres skąd mają przyjść (z tablicy)

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    data-source="${item.original}"
    alt="${item.description}" />
    </a>
    </div>`
  )
  .join("");
// nadpisuję html
gallery.insertAdjacentHTML("beforeend", galleryItem);

// okno modalne
gallery.addEventListener("click", openModal);

function openModal(event) 
// usuwam domyślne działanie przeglądarki
{
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // modal lightBox



  const instance = basicLightbox.create(
    `
    <div class="modal">
     <img src="${event.target.dataset.source}" 
     
        <a>Close</a>
    </div>
`,
    {
      onShow: (instance) => {
        instance.element().querySelector("img").onclick = instance.close;
      },
    }
  );

  instance.show();
}
