// ============================================================
// B.K.A — bilingual dictionary (English / Persian)
// Every translatable string lives here, keyed by a stable id.
// ============================================================

const translations = {

  // ---------- shared across all pages ----------
  "nav.home":        { en: "Home",        fa: "خانه" },
  "nav.biography":   { en: "Biography",   fa: "بیوگرافی" },
  "nav.collections": { en: "Collections", fa: "مجموعه‌ها" },
  "nav.contact":     { en: "Contact",     fa: "تماس" },

  "brand.byline": { en: "Bahman Kiani Azad — Painter", fa: "بهمن کیانی آزاد — نقاش" },

  "footer.copyright": { en: "© 2026 Bahman Kiani Azad", fa: "© ۲۰۲۶ بهمن کیانی آزاد" },
  "footer.location":  { en: "Tehran — Ardabil", fa: "تهران — اردبیل" },

  // ---------- index.html (interactive hero) ----------
  "index.role":  { en: "Painter", fa: "نقاش" },
  "index.name":  { en: "Bahman Kiani Azad", fa: "بهمن کیانی آزاد" },
  "index.enter": { en: "ENTER", fa: "ورود" },
  "index.hint":  { en: "move your cursor across the canvas", fa: "نشانگر را روی صفحه حرکت دهید" },

  // ---------- home.html ----------
  "home.hero.title":    { en: "The studio", fa: "کارگاه" },
  "home.hero.location": { en: "Ardabil", fa: "اردبیل" },
  "home.quote": {
    en: "When someone tries to forget something, it means forgetting isn't easy for them; it means <em>they care about what they're trying to forget.</em>",
    fa: "وقتی کسی سعی می‌کند چیزی را فراموش کند، یعنی فراموش کردن برایش آسان نیست؛ یعنی <em>به آنچه می‌خواهد فراموش کند، علاقه دارد.</em>"
  },

  // ---------- biography.html ----------
  "bio.name":  { en: "Bahman<br>Kiani Azad", fa: "بهمن<br>کیانی آزاد" },
  "bio.born":  { en: "Born in Ardabil, Iran — 1988", fa: "متولد اردبیل، ایران — ۱۳۶۷" },
  "bio.edu":   {
    en: "Bachelor of Art, Soore University, Tehran<br>M.A. in Art Research, Islamic Azad University, Tehran",
    fa: "کارشناسی هنر، دانشگاه سوره، تهران<br>کارشناسی ارشد پژوهش هنر، دانشگاه آزاد اسلامی، تهران"
  },
  "bio.section.solo":  { en: "Solo exhibitions", fa: "نمایشگاه‌های انفرادی" },
  "bio.section.group": { en: "Group exhibitions", fa: "نمایشگاه‌های گروهی" },

  "bio.solo.1": { en: "Jhaleh Gallery, Tehran", fa: "گالری ژاله، تهران" },
  "bio.solo.2": { en: "Fadak Gallery, Ardabil", fa: "گالری فدک، اردبیل" },
  "bio.solo.3": { en: "Hoor Gallery, Tehran", fa: "گالری هور، تهران" },
  "bio.solo.4": { en: "Fadak Gallery, Ardabil", fa: "گالری فدک، اردبیل" },

  "bio.group.1": { en: "Night, Mika Gallery, Kish", fa: "شب، گالری میکا، کیش" },
  "bio.group.2": { en: "Modern Artists, Avae Honar Gallery, Tehran", fa: "هنرمندان مدرن، گالری آوای هنر، تهران" },
  "bio.group.3": { en: "Secret Art Show, Milan", fa: "نمایشگاه هنر مخفی، میلان" },
  "bio.group.4": { en: "Art Expo Hormuz, Hormuz Island", fa: "نمایشگاه هنر هرمز، جزیره هرمز" },
  "bio.group.5": { en: "To Save Children, Goharan Gallery, Tehran", fa: "برای نجات کودکان، گالری گوهران، تهران" },
  "bio.group.6": { en: "Fajr Festival (two editions)", fa: "جشنواره فجر (دو دوره)" },
  "bio.group.7": { en: "Booklet Exhibition, Tarahane Azad Gallery", fa: "نمایشگاه بوکلت، گالری طراحان آزاد" },
  "bio.group.8": { en: "Damonfar Festival (two editions)", fa: "جشنواره دامون‌فر (دو دوره)" },
  "bio.group.9": { en: "Young Art Festival, selected design", fa: "جشنواره هنر جوان، طرح منتخب" },
  "bio.group.10": { en: "Dr. Sondozi Design Festival", fa: "جشنواره طراحی دکتر سندوزی" },

  // ---------- collections.html ----------
  "collections.title": { en: "Collections", fa: "مجموعه‌ها" },
  "collections.intro": {
    en: "A chronological archive of works from 2010 to 2022. Each year is a chapter in an ongoing study of coexistence, memory and the body.",
    fa: "بایگانی زمان‌مند آثار از سال ۲۰۱۰ تا ۲۰۲۲. هر سال فصلی است در مطالعه‌ای پیوسته دربارهٔ هم‌زیستی، خاطره و بدن."
  },

  "series.vomit":     { en: "Vomit", fa: "استفراغ" },
  "series.coexist":   { en: "Coexistence", fa: "هم‌زیستی" },
  "series.untitled":  { en: "Untitled series", fa: "مجموعهٔ بی‌عنوان" },
  "series.archive":   { en: "Archive", fa: "بایگانی" },

  "count.13": { en: "13 works", fa: "۱۳ اثر" },
  "count.6":  { en: "6 works", fa: "۶ اثر" },
  "count.5":  { en: "5 works", fa: "۵ اثر" },
  "count.3":  { en: "3 works", fa: "۳ اثر" },
  "count.2":  { en: "2 works", fa: "۲ اثر" },
  "count.none": { en: "—", fa: "—" },

  // ---------- gallery intro blocks (per year) ----------
  "gallery.2022.meta":  { en: "Oil on cardboard, 24 × 34 cm — 2022", fa: "رنگ روغن روی مقوا، ۲۴ × ۳۴ سانتی‌متر — ۲۰۲۲" },
  "gallery.2022.desc":  {
    en: "The body ejecting what it can no longer hold — food, bile, unease. Vomiting can follow spoiled food or a mind under strain: nausea, stress, the body's own warning system before the release.",
    fa: "بدن آنچه را که دیگر نمی‌تواند نگه دارد، بیرون می‌ریزد — غذا، صفرا، ناآرامی. استفراغ می‌تواند پس از غذای فاسد یا ذهنی تحت فشار بیاید: تهوع، استرس، سیستم هشداردهندهٔ بدن پیش از رهایی."
  },

  "gallery.2020.meta": { en: "Acrylic on canvas — 2020", fa: "رنگ اکریلیک روی بوم — ۲۰۲۰" },
  "gallery.2020.desc": {
    en: "Figures and animals sharing the same ground — a study in shared space, weight, and quiet company.",
    fa: "فیگورها و حیوانات در یک زمین مشترک — مطالعه‌ای دربارهٔ فضای مشترک، وزن، و همراهی ساکت."
  },

  "gallery.2019.meta": { en: "Oil on canvas — 2019", fa: "رنگ روغن روی بوم — ۲۰۱۹" },
  "gallery.2019.desc": {
    en: "Figures set against outsized animals — elephants, dogs, a solitary fish — caught in quiet, surreal company.",
    fa: "فیگورهایی در برابر حیوانات غول‌آسا — فیل‌ها، سگ‌ها، یک ماهی تنها — در همراهی‌ای ساکت و سوررئال."
  },

  "gallery.2017.meta": { en: "Watercolor and ink on paper — 2017", fa: "آبرنگ و جوهر روی کاغذ — ۲۰۱۷" },
  "gallery.2017.desc": {
    en: "Silhouetted deer along a cliff's edge, a figure among roots and wire — sparse, earth-toned studies.",
    fa: "سایه‌های گوزن در لبهٔ صخره، فیگوری میان ریشه‌ها و سیم — مطالعاتی ساده و خاکی‌رنگ."
  },

  "gallery.2016.meta": { en: "Watercolor and ink on paper — 2016", fa: "آبرنگ و جوهر روی کاغذ — ۲۰۱۶" },
  "gallery.2016.desc": {
    en: "Masked and painted faces alongside children and a suspended fish — sepia figures caught mid-gesture.",
    fa: "چهره‌های نقاب‌دار و رنگ‌شده در کنار کودکان و ماهی‌ای معلق — فیگورهای سپیا در میانهٔ حرکت."
  },

  "gallery.2010.meta": { en: "Watercolor and ink on paper — 2010", fa: "آبرنگ و جوهر روی کاغذ — ۲۰۱۰" },
  "gallery.2010.desc": {
    en: "Sepia-toned figures adrift among ships, storm clouds and paper boats — early work in watercolor and ink.",
    fa: "فیگورهای سپیا سرگردان میان کشتی‌ها، ابرهای طوفانی و قایق‌های کاغذی — آثار اولیه با آبرنگ و جوهر."
  },

  "gallery.empty": { en: "No images yet.", fa: "هنوز تصویری وجود ندارد." },
  "gallery.soon":  { en: "Works from {year} will be added here soon.", fa: "آثار سال {year} به‌زودی اینجا اضافه می‌شود." },

  "caption.vomit":    { en: "Vomit, 2022", fa: "استفراغ، ۲۰۲۲" },
  "caption.coexist":  { en: "Coexistence, 2020", fa: "هم‌زیستی، ۲۰۲۰" },
  "caption.untitled.2019": { en: "Untitled, 2019", fa: "بی‌عنوان، ۲۰۱۹" },
  "caption.untitled.2017": { en: "Untitled, 2017", fa: "بی‌عنوان، ۲۰۱۷" },
  "caption.untitled.2016": { en: "Untitled, 2016", fa: "بی‌عنوان، ۲۰۱۶" },
  "caption.untitled.2010": { en: "Untitled, 2010", fa: "بی‌عنوان، ۲۰۱۰" },

  "caption.coexist.100": { en: "Coexistence — 100 × 170 cm, 2020", fa: "هم‌زیستی — ۱۰۰ × ۱۷۰ سانتی‌متر، ۲۰۲۰" },
  "caption.coexist.40":  { en: "Coexistence — 40 × 50 cm, 2020", fa: "هم‌زیستی — ۴۰ × ۵۰ سانتی‌متر، ۲۰۲۰" },

  // ---------- contact.html ----------
  "contact.big": { en: "For inquiries,<br>commissions and<br>press — let's talk.", fa: "برای پرسش،<br>سفارش اثر و<br>رسانه — گفتگو کنیم." },
  "contact.email.label": { en: "Email", fa: "ایمیل" },
  "contact.instagram.label": { en: "Instagram", fa: "اینستاگرام" },
  "contact.based.label": { en: "Based", fa: "محل زندگی" },
  "contact.based.value": { en: "Ardabil, Iran", fa: "اردبیل، ایران" },
};

// Convenience: which language is active, and how to change it
const LANG_STORAGE_KEY = "bka-lang";

function getCurrentLang() {
  return localStorage.getItem(LANG_STORAGE_KEY) || "en";
}

function setCurrentLang(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function t(key, lang) {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.en;
}
