// ============================================================
// B.K.A — i18n engine
// Walks the DOM applying data-i18n attributes, and wires up the
// language toggle button. Depends on translations.js being
// loaded first (defines `translations`, `t`, `getCurrentLang`,
// `setCurrentLang`).
// ============================================================

// Only these keys legitimately contain markup (a <br> line break or
// an <em> emphasis span) — every other key is rendered as plain text
// via textContent, so nothing else can ever inject markup even if
// the dictionary source changes later.
const HTML_ALLOWED_KEYS = new Set([
  "home.quote",
  "bio.name",
  "bio.edu",
]);

function applyLanguage(lang) {
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.classList.toggle("lang-fa", lang === "fa");
  document.body.classList.toggle("lang-en", lang !== "fa");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key, lang);
    if (HTML_ALLOWED_KEYS.has(key)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-year]").forEach((el) => {
    const year = el.getAttribute("data-i18n-year");
    const template = t("gallery.soon", lang);
    el.textContent = template.replace("{year}", year);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // format: data-i18n-attr="alt:some.key|title:other.key"
    const spec = el.getAttribute("data-i18n-attr");
    spec.split("|").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) {
        el.setAttribute(attr, t(key.trim(), lang));
      }
    });
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "fa" ? "EN" : "FA";
    toggle.setAttribute("aria-label", lang === "fa" ? "Switch to English" : "تغییر به فارسی");
  }
}

function initLanguage() {
  const lang = getCurrentLang();
  applyLanguage(lang);

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = getCurrentLang() === "fa" ? "en" : "fa";
      setCurrentLang(next);
      applyLanguage(next);
    });
  }
}

document.addEventListener("DOMContentLoaded", initLanguage);
