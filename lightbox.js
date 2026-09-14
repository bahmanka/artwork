// Lightbox: click any image inside .gallery to view it enlarged with a blurred backdrop.
(function () {
  const galleryImages = document.querySelectorAll('.gallery img');
  if (!galleryImages.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8249;</button>
    <img class="lightbox-img" src="" alt="">
    <button class="lightbox-nav lightbox-next" aria-label="Next">&#8250;</button>
    <p class="lightbox-details">
      <span class="ld-title"></span><span class="ld-sep">,</span><span class="ld-medium"></span><span class="ld-sep">,</span><span class="ld-year"></span>
    </p>
  `;
  document.body.appendChild(overlay);

  const backdrop = overlay.querySelector('.lightbox-backdrop');
  const imgEl = overlay.querySelector('.lightbox-img');
  const titleEl = overlay.querySelector('.ld-title');
  const mediumEl = overlay.querySelector('.ld-medium');
  const yearEl = overlay.querySelector('.ld-year');
  const detailsEl = overlay.querySelector('.lightbox-details');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  const images = Array.from(galleryImages);
  let currentIndex = 0;

  function translate(key) {
    if (!key) return '';
    const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
    return (typeof t === 'function') ? t(key, lang) : key;
  }

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    const img = images[currentIndex];
    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    backdrop.style.backgroundImage = `url("${img.src}")`;

    // Three-part detail line: title (series name), medium+size, year —
    // each sourced from its own data-*-i18n attribute for independent styling.
    const titleText = translate(img.getAttribute('data-title-i18n'));
    const mediumText = translate(img.getAttribute('data-medium-i18n'));
    const yearText = translate(img.getAttribute('data-year-i18n'));

    titleEl.textContent = titleText;
    mediumEl.textContent = mediumText;
    yearEl.textContent = yearText;

    const hasAny = titleText || mediumText || yearText;
    detailsEl.style.display = hasAny ? '' : 'none';

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  images.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => show(i));
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === backdrop) close();
  });
  prevBtn.addEventListener('click', () => show(currentIndex - 1));
  nextBtn.addEventListener('click', () => show(currentIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
})();
