// Lightbox: click, tap, or press Enter/Space on any image inside .gallery
// to view it enlarged with a blurred backdrop. Fully keyboard-operable,
// with focus trapping and screen-reader semantics.
(function () {
  const galleryFigures = document.querySelectorAll('.gallery figure');
  if (!galleryFigures.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Wrap each gallery image in a focusable, semantic trigger so keyboard
  // and screen-reader users can reach it exactly like mouse users.
  const items = [];
  galleryFigures.forEach((figure) => {
    const img = figure.querySelector('img');
    if (!img) return;
    if (img.closest('.gallery-trigger')) {
      items.push(img);
      return;
    }
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'gallery-trigger';
    const label = img.getAttribute('alt') || 'Open image';
    trigger.setAttribute('aria-label', label);
    img.parentNode.insertBefore(trigger, img);
    trigger.appendChild(img);
    items.push(img);
  });

  if (!items.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
    <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>
    <img class="lightbox-img" src="" alt="">
    <button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>
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
  const focusableInOverlay = [prevBtn, closeBtn, nextBtn, imgEl];

  let currentIndex = 0;
  let lastFocusedTrigger = null;

  function translate(key) {
    if (!key) return '';
    const lang = (typeof getCurrentLang === 'function') ? getCurrentLang() : 'en';
    return (typeof t === 'function') ? t(key, lang) : key;
  }

  function show(index) {
    currentIndex = (index + items.length) % items.length;
    const img = items[currentIndex];
    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    backdrop.style.backgroundImage = `url("${img.src}")`;

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
    closeBtn.focus();
  }

  function open(index, triggerEl) {
    lastFocusedTrigger = triggerEl || document.activeElement;
    show(index);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
    lastFocusedTrigger = null;
  }

  items.forEach((img, i) => {
    const trigger = img.closest('.gallery-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => open(i, trigger));
  });

  closeBtn.addEventListener('click', close);
  // Clicking the enlarged image itself also closes it (matches the
  // zoom-out cursor affordance), same as clicking the backdrop.
  imgEl.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === backdrop) close();
  });
  prevBtn.addEventListener('click', () => show(currentIndex - 1));
  nextBtn.addEventListener('click', () => show(currentIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'ArrowLeft') { show(currentIndex - 1); return; }
    if (e.key === 'ArrowRight') { show(currentIndex + 1); return; }

    // Trap focus inside the dialog while it is open.
    if (e.key === 'Tab') {
      const focusable = focusableInOverlay.filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Respect reduced-motion: skip the CSS transition on the backdrop/image
  // by toggling a class the stylesheet uses to zero out durations.
  if (prefersReducedMotion) {
    overlay.classList.add('no-motion');
  }
})();
