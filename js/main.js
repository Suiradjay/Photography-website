document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("site-nav");
const exhibition = document.getElementById("exhibition");

// Flat list of all photos in display order, used for lightbox prev/next.
const allPhotos = [];

EXHIBITION.forEach((room) => {
  // Nav link
  const link = document.createElement("a");
  link.href = `#${room.id}`;
  link.textContent = room.title.split("—")[0].trim();
  nav.appendChild(link);

  // Room section
  const section = document.createElement("section");
  section.className = "room";
  section.id = room.id;

  const header = document.createElement("div");
  header.className = "room-header";
  header.innerHTML = `<h2>${room.title}</h2><p>${room.description}</p>`;
  section.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "gallery-grid";

  room.photos.forEach((photo) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = driveImageUrl(photo.id, 600);
    img.alt = photo.caption;
    img.addEventListener("load", () => img.classList.add("loaded"));

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = photo.caption;

    item.appendChild(img);
    item.appendChild(caption);

    const photoIndex = allPhotos.length;
    allPhotos.push(photo);

    item.addEventListener("click", () => openLightbox(photoIndex));

    grid.appendChild(item);
  });

  section.appendChild(grid);
  exhibition.appendChild(section);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  showCurrent();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function showCurrent() {
  const photo = allPhotos[currentIndex];
  lightboxImage.src = driveImageUrl(photo.id, 1600);
  lightboxImage.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
  showCurrent();
}

function showNext() {
  currentIndex = (currentIndex + 1) % allPhotos.length;
  showCurrent();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrev);
lightboxNext.addEventListener("click", showNext);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
