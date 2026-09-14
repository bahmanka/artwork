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

  "footer.copyright": { en: "© 2026 Bahman Kiani Azad", fa: "© ۱۴۰۴ بهمن کیانی آزاد" },
  "footer.location":  { en: "Tehran — Ardabil", fa: "تهران — اردبیل" },

  // ---------- index.html (interactive hero) ----------
  "index.role":  { en: "Painter", fa: "نقاش" },
  "index.name":  { en: "Bahman Kiani Azad", fa: "بهمن کیانی آزاد" },
  "index.enter": { en: "ENTER", fa: "ورود" },
  "index.hint":  { en: "move your cursor across the canvas", fa: "نشانگر را روی صفحه حرکت دهید" },

  // ---------- home.html ----------
  "home.hero.meta": { en: "The studio, Ardabil", fa: "کارگاه، اردبیل" },
  "home.quote": {
    en: "When someone tries to forget something, it means forgetting isn't easy for them; it means <em>they care about what they're trying to forget.</em>",
    fa: "وقتی کسی سعی می‌کند چیزی را فراموش کند، یعنی فراموش کردن برایش آسان نیست؛ یعنی <em>به آنچه می‌خواهد فراموش کند، علاقه دارد.</em>"
  },

  // ---------- biography.html ----------
  "bio.name":  { en: "Bahman<br>Kiani Azad", fa: "بهمن<br>کیانی آزاد" },
  "bio.born":  { en: "Born in Ardabil, Iran — 1988", fa: "متولد اردبیل، ایران — ۱۳۶۶" },
  "bio.edu":   {
    en: "Bachelor of Art, Soore University, Tehran<br>M.A. in Art Research, Islamic Azad University, Tehran",
    fa: "کارشناسی هنر، دانشگاه سوره، تهران<br>کارشناسی ارشد پژوهش هنر، دانشگاه آزاد اسلامی، تهران"
  },
  "bio.section.solo":  { en: "Solo exhibitions", fa: "نمایشگاه‌های انفرادی" },
  "bio.section.group": { en: "Group exhibitions", fa: "نمایشگاه‌های گروهی" },

  "bio.solo.1": { en: "Jhaleh Gallery, Tehran", fa: "گالری ژاله، تهران" },
  "bio.solo.1.year": { en: "2024", fa: "۱۴۰۳" },
  "bio.solo.2": { en: "Fadak Gallery, Ardabil", fa: "گالری فدک، اردبیل" },
  "bio.solo.2.year": { en: "2016", fa: "۱۳۹۵" },
  "bio.solo.3": { en: "Hoor Gallery, Tehran", fa: "گالری هور، تهران" },
  "bio.solo.3.year": { en: "2011", fa: "۱۳۹۰" },
  "bio.solo.4": { en: "Fadak Gallery, Ardabil", fa: "گالری فدک، اردبیل" },
  "bio.solo.4.year": { en: "2006", fa: "۱۳۸۵" },

  "bio.group.1": { en: "Night, Mika Gallery, Kish", fa: "شب، گالری میکا، کیش" },
  "bio.group.1.year": { en: "2021", fa: "۱۴۰۰" },
  "bio.group.2": { en: "Modern Artists, Avae Honar Gallery, Tehran", fa: "هنرمندان مدرن، گالری آوای هنر، تهران" },
  "bio.group.2.year": { en: "2021", fa: "۱۴۰۰" },
  "bio.group.3": { en: "Secret Art Show, Milan", fa: "نمایشگاه هنر مخفی، میلان" },
  "bio.group.3.year": { en: "2019", fa: "۱۳۹۸" },
  "bio.group.4": { en: "Art Expo Hormuz, Hormuz Island", fa: "نمایشگاه هنر هرمز، جزیره هرمز" },
  "bio.group.4.year": { en: "2019", fa: "۱۳۹۸" },
  "bio.group.5": { en: "To Save Children, Goharan Gallery, Tehran", fa: "برای نجات کودکان، گالری گوهران، تهران" },
  "bio.group.5.year": { en: "2017", fa: "۱۳۹۶" },
  "bio.group.6": { en: "Fajr Festival (two editions)", fa: "جشنواره فجر (دو دوره)" },
  "bio.group.6.year": { en: "2010–2011", fa: "۱۳۸۹–۱۳۹۰" },
  "bio.group.7": { en: "Participation in Booklet Exhibition, Tarahane Azad Gallery, 2011", fa: "شرکت در نمایشگاه کتابچه، گالری طراحان آزاد، ۱۳۹۰" },
  "bio.group.7.year": { en: "2011", fa: "۱۳۹۰" },
  "bio.group.8": { en: "Damonfar Festival (two editions)", fa: "جشنواره دامون‌فر (دو دوره)" },
  "bio.group.8.year": { en: "2007–2010", fa: "۱۳۸۶–۱۳۸۹" },
  "bio.group.9": { en: "Young Art Festival, selected design", fa: "جشنواره هنر جوان، طرح منتخب" },
  "bio.group.9.year": { en: "2008", fa: "۱۳۸۷" },
  "bio.group.10": { en: "Dr. Sondozi Design Festival", fa: "جشنواره طراحی دکتر سندوزی" },
  "bio.group.10.year": { en: "2007", fa: "۱۳۸۶" },

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
  "gallery.2022.meta":  { en: "Oil on cardboard — 2022", fa: "رنگ روغن روی مقوا — ۱۴۰۱" },
  "gallery.2022.itemTitle":  { en: "Vomit", fa: "استفراغ" },
  "gallery.2022.itemMedium": { en: "Oil on cardboard, 24 × 34 cm", fa: "رنگ روغن روی مقوا، ۲۴ × ۳۴ سانتی‌متر" },
  "gallery.2022.itemYear":   { en: "2022", fa: "۱۴۰۱" },
  "gallery.2022.desc":  {
    en: "This is certainly not an appealing title for a painting series, but it is what actually happened in practice with these works. A collection of images that, mostly without intention yet strangely in harmony with one another, came to appear on the surface — and stirred in me a feeling I can express in no words other than these: vomit.",
    fa: "این مطمئناً عنوان جذابی برای یک مجموعه نقاشی نیست، ولی اتفاقی است که در عمل برای این آثار افتاده است. مجموعه‌ای از تصاویر که عموماً نه به‌صورت عامدانه ولی به طرز جالبی هماهنگ با هم روی صفحه ظاهر شده‌اند و احساسی را در من به‌وجود آورده‌اند که با هیچ کلمه‌ای نمی‌توانم بیان کنم بجز این... استفراغ."
  },

  "gallery.2020.meta": { en: "Acrylic on canvas — 2020", fa: "رنگ اکریلیک روی بوم — ۱۳۹۹" },
  "gallery.2020.itemTitle":  { en: "Coexistence", fa: "همزیست" },
  "gallery.2020.itemMedium": { en: "Acrylic on canvas", fa: "رنگ اکریلیک روی بوم" },
  "gallery.2020.itemYear":   { en: "2020", fa: "۱۳۹۹" },
  "gallery.2020.title": { en: "Coexistence", fa: "همزیست" },
  "gallery.2020.desc": {
    en: "Coexistence. In Dehkhoda's dictionary, coexistence means living together — the life of two beings or two groups alongside one another, even when they may not be suited to each other. . . . In the forest there are boys, bare among the dense plants, beside the ponds, indifferent and absorbed in their own doing. Animals — large, immense, and yet calm. The boys and the animals sometimes ignore one another, sometimes sit beside each other, and sometimes tangle into one another. It's strange that, unlike me, they carry no unease. Do they not sense the danger? Is their present situation simply beyond their grasp? I have no answer to these questions. Perhaps, come nightfall, something else will happen — something that unsettles the playful, calm boys out of this closeness, that makes them regret this coexistence.",
    fa: "همزیست\nدر لغت‌نامه دهخدا هم‌زیست به معنی با هم زیستن. زندگی دو تن یا دو گروه با یکدیگر درحالی که شاید مناسب یکدیگر نباشند.\n.\n.\n.\nدر جنگل پسرانی هستند برهنه میان انبوه گیاهان، در کنار برکه‌ها، بی‌تفاوت و مشغول کار خود. حیواناتی بزرگ، عظیم‌الجثه و درعین‌حال آرام. پسران و حیوانات گاه بی‌اعتنا به هم، گاه کنار هم و گاه در همدیگر می‌لولند. عجیب است که مانند من دل‌شوره ندارند! خطر را حس نمی‌کنند؟ موقعیت فعلی‌شان برایشان قابل‌فهم نیست؟ من جوابی برای این سؤالات ندارم! شاید شب‌هنگام اتفاق دیگری رخ دهد که پسران بازیگوش و آرام را از این نزدیکی پریشان کند، از این هم‌زیستی پشیمان کند."
  },

  "gallery.2019.meta": { en: "Oil on canvas — 2019", fa: "رنگ روغن روی بوم — ۱۳۹۸" },
  "gallery.2019.itemTitle":  { en: "Untitled", fa: "بی‌عنوان" },
  "gallery.2019.itemMedium": { en: "Oil on canvas", fa: "رنگ روغن روی بوم" },
  "gallery.2019.itemYear":   { en: "2019", fa: "۱۳۹۸" },
  "gallery.2019.desc": {
    en: "Figures set against outsized animals — elephants, dogs, a solitary fish — caught in quiet, surreal company.",
    fa: "فیگورهایی در برابر حیوانات غول‌آسا — فیل‌ها، سگ‌ها، یک ماهی تنها — در همراهی‌ای ساکت و سوررئال."
  },

  "gallery.2017.meta": { en: "Watercolor and ink on paper — 2017", fa: "آبرنگ و جوهر روی کاغذ — ۱۳۹۶" },
  "gallery.2017.itemTitle":  { en: "Untitled", fa: "بی‌عنوان" },
  "gallery.2017.itemMedium": { en: "Watercolor and ink on paper", fa: "آبرنگ و جوهر روی کاغذ" },
  "gallery.2017.itemYear":   { en: "2017", fa: "۱۳۹۶" },
  "gallery.2017.desc": {
    en: "Silhouetted deer along a cliff's edge, a figure among roots and wire — sparse, earth-toned studies.",
    fa: "سایه‌های گوزن در لبهٔ صخره، فیگوری میان ریشه‌ها و سیم — مطالعاتی ساده و خاکی‌رنگ."
  },

  "gallery.2016.meta": { en: "Watercolor and ink on paper — 2016", fa: "آبرنگ و جوهر روی کاغذ — ۱۳۹۵" },
  "gallery.2016.itemTitle":  { en: "Fragments of a Memory", fa: "تکه‌های یک خاطره" },
  "gallery.2016.itemMedium": { en: "Watercolor and ink on paper", fa: "آبرنگ و جوهر روی کاغذ" },
  "gallery.2016.itemYear":   { en: "2016", fa: "۱۳۹۵" },
  "gallery.2016.title": { en: "Fragments of a Memory", fa: "تکه‌های یک خاطره" },
  "gallery.2016.desc": {
    en: "Fragments of a memory. These are not the images of a complete memory; they are pieces of something that may have truly happened, may have been seen in a dream, or may simply have remained in the mind. The people in this series hang suspended between childhood and adulthood, between nature and ruin, between being and not-being. The stains, lines and forms belong to this same hazy space — as if the image is not yet finished, and the memory is still in the process of forming. Perhaps these paintings are not meant to narrate anything in full. Perhaps they only recall a fragment of a feeling, a memory, or a forgotten dream.",
    fa: "تکه‌های یک خاطره\nاین‌ها تصویرهای یک خاطره‌ی کامل نیستند؛ تکه‌هایی از چیزی‌اند که شاید واقعاً اتفاق افتاده، شاید در خواب دیده شده و شاید فقط در ذهن مانده است.\nآدم‌های این مجموعه میان کودکی و بزرگسالی، میان طبیعت و ویرانی، و میان بودن و نبودن معلق‌اند. لکه‌ها، خط‌ها و فرم‌ها بخشی از همین فضای مبهم‌اند؛ انگار تصویر هنوز تمام نشده و خاطره هنوز در حال شکل گرفتن است.\nشاید این نقاشی‌ها قرار نیست چیزی را به‌طور کامل روایت کنند. شاید فقط تکه‌ای از یک حس، یک خاطره یا یک رؤیای فراموش‌شده را به یاد بیاورند."
  },

  "gallery.2010.meta": { en: "Watercolor and ink on paper — 2010", fa: "آبرنگ و جوهر روی کاغذ — ۱۳۸۹" },
  "gallery.2010.itemTitle":  { en: "Untitled", fa: "بی‌عنوان" },
  "gallery.2010.itemMedium": { en: "Watercolor and ink on paper", fa: "آبرنگ و جوهر روی کاغذ" },
  "gallery.2010.itemYear":   { en: "2010", fa: "۱۳۸۹" },
  "gallery.2010.desc": {
    en: "Sepia-toned figures adrift among ships, storm clouds and paper boats — early work in watercolor and ink.",
    fa: "فیگورهای سپیا سرگردان میان کشتی‌ها، ابرهای طوفانی و قایق‌های کاغذی — آثار اولیه با آبرنگ و جوهر."
  },

  "gallery.empty": { en: "No images yet.", fa: "هنوز تصویری وجود ندارد." },
  "gallery.soon":  { en: "Works from {year} will be added here soon.", fa: "آثار سال {year} به‌زودی اینجا اضافه می‌شود." },


  "caption.vomit":    { en: "Vomit, 2022", fa: "استفراغ، ۱۴۰۱" },
  "caption.coexist":  { en: "Coexistence, 2020", fa: "همزیست، ۱۳۹۹" },
  "caption.untitled.2019": { en: "Untitled, 2019", fa: "بی‌عنوان، ۱۳۹۸" },
  "caption.untitled.2017": { en: "Untitled, 2017", fa: "بی‌عنوان، ۱۳۹۶" },
  "caption.untitled.2016": { en: "Untitled, 2016", fa: "بی‌عنوان، ۱۳۹۵" },
  "caption.untitled.2010": { en: "Untitled, 2010", fa: "بی‌عنوان، ۱۳۸۹" },

  "caption.coexist.100": { en: "Coexistence — 100 × 170 cm, 2020", fa: "همزیست — ۱۰۰ × ۱۷۰ سانتی‌متر، ۱۳۹۹" },
  "caption.coexist.40":  { en: "Coexistence — 40 × 50 cm, 2020", fa: "همزیست — ۴۰ × ۵۰ سانتی‌متر، ۱۳۹۹" },

  // ---------- contact.html ----------
  "contact.big": { en: "For questions, commissions or collaborations — get in touch.", fa: "برای گفتگو، سفارش اثر یا همکاری، در تماس باشید." },
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
