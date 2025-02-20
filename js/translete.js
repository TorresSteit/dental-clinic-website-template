const translations = {
    sk: {
        home: "Domov",
        about: "O nás",
        services: "Služby",
        pages: "Stránky",
        pricing: "Cenník",
        team: "Náš tím",
        reviews: "Recenzie",
        contact: "Kontakt",
        call_us: "Zavolajte nám",
        welcome: "Udržujte svoje zuby zdravé",
        header: "Získajte najkvalitnejšiu zubnú starostlivosť",
        opening_hours: "Otváracie hodiny",
        monday: "Pondelok",
        tuesday: "Utorok",
        wednesday: "Streda",
        thursday: "Štvrtok",
        friday: "Piatok",
        saturday: "Sobota",
        sunday: "Nidela",
        our_services: "Naše služby",
        best_dental_care: "Ponúkame najkvalitnejšie zubné služby",
        cosmetic_dentistry: "Kozmetická stomatológia",
        teeth_whitening: "Bielenie zubov",
        fair_prices: "Ponúkame férové ceny za zubnú starostlivosť"
    },
    ru: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        pages: "Страницы",
        pricing: "Цены",
        team: "Наша команда",
        reviews: "Отзывы",
        contact: "Контакты",
        call_us: "Позвоните нам",
        welcome: "Берегите свои зубы",
        header: "Получите лучший стоматологический уход",
        opening_hours: "Часы работы",
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Субота",
        sunday: "Воскресения",
        our_services: "Наши услуги",
        best_dental_care: "Мы предлагаем лучшие стоматологические услуги",
        cosmetic_dentistry: "Косметическая стоматология",
        teeth_whitening: "Отбеливание зубов",
        fair_prices: "Мы предлагаем честные цены на стоматологические услуги"
    },
    uk: {
        home: "Головна",
        about: "Про нас",
        services: "Послуги",
        pages: "Сторінки",
        pricing: "Ціни",
        team: "Наша команда",
        reviews: "Відгуки",
        contact: "Контакти",
        call_us: "Зателефонуйте нам",
        welcome: "Бережіть свої зуби",
        header: "Отримайте найкращий стоматологічний догляд",
        opening_hours: "Години роботи",
        monday: "Понеділок",
        tuesday: "Вівторок",
        wednesday: "Середа",
        thursday: "Четвер",
        friday: "П’ятниця",
        saturday: "Субота",
        sunday: "Неділя",
        our_services: "Наші послуги",
        best_dental_care: "Ми пропонуємо найкращі стоматологічні послуги",
        cosmetic_dentistry: "Косметична стоматологія",
        teeth_whitening: "Відбілювання зубів",
        fair_prices: "Ми пропонуємо чесні ціни на стоматологічні послуги"
    },
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        pages: "Pages",
        pricing: "Pricing",
        team: "Our Team",
        reviews: "Reviews",
        contact: "Contact",
        call_us: "Call Us",
        welcome: "Keep Your Teeth Healthy",
        header: "Get the Best Dental Care",
        opening_hours: "Opening Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        our_services: "Our Services",
        best_dental_care: "We Offer the Best Dental Services",
        cosmetic_dentistry: "Cosmetic Dentistry",
        teeth_whitening: "Teeth Whitening",
        fair_prices: "We Offer Fair Prices for Dental Care"
    }
};

document.getElementById("skBtn").addEventListener("click", () => switchLanguage("sk"));
document.getElementById("ruBtn").addEventListener("click", () => switchLanguage("ru"));
document.getElementById("ukBtn").addEventListener("click", () => switchLanguage("uk"));
document.getElementById("enBtn").addEventListener("click", () => switchLanguage("en"));

function switchLanguage(lang) {
    document.querySelector(".nav-item.nav-link.active").textContent = translations[lang].home;
    document.querySelector(".nav-item.nav-link[href='about.html']").textContent = translations[lang].about;
    document.querySelector(".nav-item.nav-link[href='service.html']").textContent = translations[lang].services;
    document.querySelector(".nav-link.dropdown-toggle").textContent = translations[lang].pages;
    document.querySelector(".dropdown-item[href='price.html']").textContent = translations[lang].pricing;
    document.querySelector(".dropdown-item[href='team.html']").textContent = translations[lang].team;
    document.querySelector(".dropdown-item[href='testimonial.html']").textContent = translations[lang].reviews;
    document.querySelector(".nav-item.nav-link[href='contact.html']").textContent = translations[lang].contact;
    document.querySelector(".btn[href^='tel']").textContent = translations[lang].call_us;
    document.querySelector(".carousel-caption h5").textContent = translations[lang].welcome;
    document.querySelector(".carousel-caption h1").textContent = translations[lang].header;
    document.querySelector(".carousel-caption h5").textContent = translations[lang].reviews;

    document.querySelectorAll(".carousel-caption h5").forEach(el => el.textContent = translations[lang].welcome);
    document.querySelectorAll(".carousel-caption h1").forEach(el => el.textContent = translations[lang].header);
    document.querySelectorAll(".btn[href^='tel']").forEach(el => el.textContent = translations[lang].call_us);
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    document.querySelectorAll(".d-flex h6").forEach((el, index) => {
        el.textContent = translations[lang][days[index]];
    });
    document.querySelector("h3.text-white.mb-3").textContent = translations[lang].opening_hours;


}