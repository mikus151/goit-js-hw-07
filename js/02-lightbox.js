import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// odnosze się do galleri w html
const gallery = document.querySelector(".gallery");


// Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu.

//<a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a> */



const galleryItem = galleryItems
  .map(
    (item) =>
      `
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    
    alt="${item.description}" 
    </a>
    `
  )
  .join("");
// nadpisuję html
gallery.insertAdjacentHTML("beforeend", galleryItem);


var lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
});







// 1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego.

// 2. Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.

// 3. Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do div.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - najpierw sekcje «Usage» i «Markup».

// 4. W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.

