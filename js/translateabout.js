const translateAbout = {
    sk: {
        title: "O nás",
        subtitle: "Najlepšia zubná klinika, ktorej môžete dôverovať",
        description: "Naša zubná klinika ponúka najmodernejšie služby pre zdravý a krásny úsmev.",
        values: {
            service: "Ocenené služby",
            fairPrice: "Férové ceny"
        },
        address: "A2-B, 2 poschodia, Piešťanská 3 business centrum Aquapoli, Trnava, Slovensko",
        email: "Dinadent2022@gmail.com",
        phone: "+421 948 771 757",
        socialLinks: {
            facebook: "https://www.facebook.com/share/15u4XgkwvT/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/dinadent_trnava?igsh=ZGcxMGpta216c3Fn",
            telegram: "https://t.me/+421948771757",
            viber: "viber://chat?number=%2B421948771757",
            whatsapp: "https://wa.me/421948771757"
        }
    },
    ru: {
        title: "О нас",
        subtitle: "Лучшая стоматологическая клиника, которой можно доверять",
        description: "Наша стоматологическая клиника предлагает самые современные услуги для здоровой и красивой улыбки.",
        values: {
            service: "Награжденные услуги",
            fairPrice: "Честные цены"
        },
        address: "A2-B, 2 этаж, Piešťanská 3 бизнес-центр Aquapoli, Трнава, Словакия",
        email: "Dinadent2022@gmail.com",
        phone: "+421 948 771 757",
        socialLinks: {
            facebook: "https://www.facebook.com/share/15u4XgkwvT/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/dinadent_trnava?igsh=ZGcxMGpta216c3Fn",
            telegram: "https://t.me/+421948771757",
            viber: "viber://chat?number=%2B421948771757",
            whatsapp: "https://wa.me/421948771757"
        }
    },
    uk: {
        title: "Про нас",
        subtitle: "Найкраща стоматологічна клініка, якій можна довіряти",
        description: "Наша стоматологічна клініка пропонує найсучасніші послуги для здорової та красивої усмішки.",
        values: {
            service: "Нагороджені послуги",
            fairPrice: "Чесні ціни"
        },
        address: "A2-B, 2 поверх, Piešťanská 3 бізнес-центр Aquapoli, Трнава, Словаччина",
        email: "Dinadent2022@gmail.com",
        phone: "+421 948 771 757",
        socialLinks: {
            facebook: "https://www.facebook.com/share/15u4XgkwvT/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/dinadent_trnava?igsh=ZGcxMGpta216c3Fn",
            telegram: "https://t.me/+421948771757",
            viber: "viber://chat?number=%2B421948771757",
            whatsapp: "https://wa.me/421948771757"
        }
    },
    en: {
        title: "About Us",
        subtitle: "The best dental clinic you can trust",
        description: "Our dental clinic offers the latest services for a healthy and beautiful smile.",
        values: {
            service: "Award-winning services",
            fairPrice: "Fair prices"
        },
        address: "A2-B, 2nd floor, Piešťanská 3 business center Aquapoli, Trnava, Slovakia",
        email: "Dinadent2022@gmail.com",
        phone: "+421 948 771 757",
        socialLinks: {
            facebook: "https://www.facebook.com/share/15u4XgkwvT/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/dinadent_trnava?igsh=ZGcxMGpta216c3Fn",
            telegram: "https://t.me/+421948771757",
            viber: "viber://chat?number=%2B421948771757",
            whatsapp: "https://wa.me/421948771757"
        }
    }
};
function switchLanguage(language) {
    const lang = translateAbout[language];

    document.getElementById("#aboutitle").innerText = lang.title;
    document.querySelector("h1.display-5").innerText = lang.subtitle;
    document.querySelector("h4.fst-italic").innerText = lang.description;
    document.querySelectorAll(".text-primary")[0].innerText = lang.values.service;
    document.querySelectorAll(".text-primary")[1].innerText = lang.values.fairPrice;
}

// Add event listeners to the buttons
document.getElementById("skBtn").addEventListener("click", () => switchLanguage('sk'));
document.getElementById("ruBtn").addEventListener("click", () => switchLanguage('ru'));
document.getElementById("enBtn").addEventListener("click", () => switchLanguage('en'));
document.getElementById("ukBtn").addEventListener("click", () => switchLanguage('uk'));

// Initially set to Slovak
switchLanguage('sk');
