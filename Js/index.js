// simple internationalization logic
const translations = {
    en: {
        title_head: 'Front-End Developer',
        title_h: 'Vitaly STOIKOV',
        description: `I am a front-end developer passionate about creating modern and user-friendly web interfaces.
                    I am proficient in HTML5, CSS3, JavaScript, React, and have basic experience with Git and TypeScript.
                    In my projects, I focus on adaptability and performance, adhering to the principles of clean code.
                    I am constantly improving my skills and am open to new knowledge and professional exchange of experience.
                    My goal is to develop in a team of like-minded people and create products that users will be satisfied with.`,
        project_experience: 'PROJECT EXPERIENCE',
        pro1: 'Web Studio [HTML5, CSS3, JavaScript(ES6+)]. Website with adaptive layout. Role: Developer. Building the project on GitHub, checking build errors and page performance in real time.',
        pro2: 'Thewatchspot [HTML5, CSS3, JavaScript(ES6+)]. Wristwatch Landing Page is a responsive one-page website for presenting and selling wristwatches. The project focuses on modern UI/UX, smooth user interaction, and clean front-end architecture. During development, I implemented a structured layout, interactive interface elements, and responsive design for correct display on different devices. Particular attention was paid to visual appeal, ease of navigation, and page performance.',
        pro3: 'Avtosklo Service Website [HTML5, CSS3, JavaScript (ES6+)]. A modern, responsive landing page for an automotive glass service company, aimed at effectively presenting services and improving user engagement. I was responsible for developing the full front-end architecture, including semantic HTML structure, adaptive layout, and interactive UI components. The project emphasizes performance optimization, accessibility, and smooth user experience across all devices. Key focus areas included clean code structure, responsive behavior, and intuitive navigation.',
        pro4: 'Interactive Image Slider [HTML5, CSS3, JavaScript (ES6+)]. A dynamic and responsive image slider component built to enhance user interaction and visual presentation on web pages. I was responsible for developing the full functionality of the slider, including DOM manipulation, event handling, and state management for slide transitions. Implemented both manual navigation (prev/next controls) and automatic slideshow behavior. Focused on performance, smooth animations, and clean, maintainable code structure. The project demonstrates strong understanding of JavaScript fundamentals and UI logic.',
        pro5: 'Vanilla JavaScript Application [HTML5, CSS3, JavaScript (ES6+)]. A fully functional front-end application developed from scratch without external libraries or frameworks, showcasing strong fundamentals in JavaScript and application architecture. I was responsible for designing and implementing the application structure, including modular code organization, DOM manipulation, and event-driven logic. Built reusable components and managed application state using native JavaScript. Focused on performance optimization, scalability, and clean code practices. The project highlights deep understanding of core web technologies and problem-solving skills.',
        pro6: 'Interactive Card Gallery [HTML5, CSS3, JavaScript (ES6+)]. A responsive and interactive card-based gallery designed to improve user engagement through dynamic UI elements and smooth visual transitions. I was responsible for building the layout and implementing interactive behavior using JavaScript, including event handling and DOM manipulation. Developed reusable UI components and added animated transitions to enhance user experience. Focused on performance, responsiveness, and maintainable code architecture. The project demonstrates strong skills in UI development and front-end fundamentals.',
        pro7: 'Car Service Website [HTML5, CSS3, JavaScript (ES6+)]. A modern, responsive website developed for an automotive service business, aimed at effectively presenting services and improving customer engagement. I was responsible for building the full front-end solution, including semantic HTML structure, adaptive layout, and interactive UI components. Implemented responsive design principles to ensure cross-device compatibility. Focused on performance, accessibility, and clean code architecture. The project highlights strong UI/UX understanding and practical front-end development skills.',
        pro8: 'Interactive Plates UI [HTML5, CSS3, JavaScript (ES6+)]. A dynamic and responsive web interface built to demonstrate interactive data handling and UI behavior using Vanilla JavaScript. I was responsible for implementing the application logic, including DOM manipulation, event handling, and dynamic rendering of elements. Built a structured and scalable front-end architecture with a focus on performance and maintainability. The project emphasizes clean UI design, responsive layout, and smooth user interaction.',
        projects_title: 'Projects',
        education_title: 'Education',
        contacts_title: 'Contacts Me',
        tech_skills_title: 'Tech Skills',
        soft_skills_title: 'Soft Skills',
        languages_title: 'Languages',
        tech1: 'HTML5 / CSS3',
        tech2: 'React',
        tech3: 'JavaScript (ES6+)',
        tech4: 'TypeScript (base level)',
        tech5: 'Git / GitHub',
        tech6: 'Responsive Design / Adaptive Layout',
        tech7: 'API Integration',
        tech8: 'Figma (basic use for layout)',
        soft1: 'Attention to detail',
        soft2: 'Team Work',
        soft3: 'Creativity',
        soft4: 'Problem Solving',
        soft5: 'Strong Adaptation Skills',
        soft6: 'Calm',
        lang1: 'Ukrainian - native',
        lang2: 'English - basic',
        lang3: 'Russian - native',
        education_title: 'Education',
        edu1: 'IT School GoIT',
        edu1_desc: 'Fullstack Developer',
        edu1_time: 'January 2023 - January 2024',
        edu2: 'Mykolaiv National Agrarian University',
        edu2_desc: 'Master\'s degree in Obligations and Auditing',
        edu2_time: 'September 2010 - August 2017',
        linkedin: 'LinkedIn'
    },
    uk: {
        title_head: 'Front‑End розробник',
        title_h: 'Віталій СТОЙКОВ',
        description: `Я&nbsp;front‑end розробник, захоплений створенням сучасних та зручних веб‑інтерфейсів.
                    Володію HTML5, CSS3, JavaScript, React та маю базовий досвід з Git і TypeScript.
                    У своїх проєктах орієнтуюсь на адаптивність та продуктивність, дотримуюсь принципів чистого коду.
                    Постійно підвищую кваліфікацію та відкритий до нового знання і професійного обміну досвідом.
                    Моя мета — розвиватися в команді однодумців та створювати продукти, які задовольняють користувачів.`,
        project_experience: 'ДОСВІД ПРОЄКТІВ',
        pro1: 'Web Studio [HTML5, CSS3, JavaScript(ES6+)]. Вебсайт з адаптивним макетом. Роль: розробник. Зборка проєкту на GitHub, перевірка помилок збірки та продуктивності сторінки в реальному часі.',
        pro2: 'Thewatchspot [HTML5, CSS3, JavaScript(ES6+)]. Лендінг годинників - це адаптивний односторінковий вебсайт для презентації та продажу наручних годинників. Проєкт зосереджується на сучасному UI/UX, плавній взаємодії користувача та чистій архітектурі фронтенду. Під час розробки я реалізував структурований макет, інтерактивні елементи інтерфейсу та адаптивний дизайн для правильного відображення на різних пристроях. Особливу увагу приділено візуальній привабливості, легкості навігації та продуктивності сторінки.',
        pro3: 'Вебсайт служби автомобільного скла Avtosklo [HTML5, CSS3, JavaScript (ES6+)]. Сучасна, адаптивна лендінг-сторінка для компанії з послуг автомобільного скла, спрямована на ефективну презентацію послуг та покращення залучення користувачів. Я відповідав за розробку повної архітектури фронтенду, включаючи семантичну структуру HTML, адаптивний макет та інтерактивні компоненти UI. Проєкт підкреслює оптимізацію продуктивності, доступність та плавний користувацький досвід на всіх пристроях. Ключові сфери фокусу включали чисту структуру коду, адаптивну поведінку та інтуїтивну навігацію.',
        pro4: 'Інтерактивний слайдер зображень [HTML5, CSS3, JavaScript (ES6+)]. Динамічний та адаптивний компонент слайдера зображень, створений для покращення взаємодії користувача та візуальної презентації на веб-сторінках. Я відповідав за розробку повної функціональності слайдера, включаючи маніпуляцію DOM, обробку подій та управління станом для переходів слайдів. Реалізовано як ручну навігацію (контроли попередній/наступний), так і автоматичну поведінку слайд-шоу. Зосереджено на продуктивності, плавних анімаціях та чистій, підтримуваній структурі коду. Проєкт демонструє глибоке розуміння основ JavaScript та логіки UI.',
        pro5: 'Додаток на Vanilla JavaScript [HTML5, CSS3, JavaScript (ES6+)]. Повнофункціональний фронтенд-додаток, розроблений з нуля без зовнішніх бібліотек чи фреймворків, демонструючи сильні основи JavaScript та архітектури додатків. Я відповідав за проектування та реалізацію структури додатку, включаючи модульну організацію коду, маніпуляцію DOM та логіку, керовану подіями. Побудовано багаторазові компоненти та керовано станом додатку за допомогою нативного JavaScript. Зосереджено на оптимізації продуктивності, масштабованності та практиках чистого коду. Проєкт підкреслює глибоке розуміння основних веб-технологій та навичок вирішення проблем.',
        pro6: 'Інтерактивна галерея карток [HTML5, CSS3, JavaScript (ES6+)]. Адаптивна та інтерактивна галерея на основі карток, розроблена для покращення залучення користувачів через динамічні елементи UI та плавні візуальні переходи. Я відповідав за побудову макету та реалізацію інтерактивної поведінки за допомогою JavaScript, включаючи обробку подій та маніпуляцію DOM. Розроблено багаторазові компоненти UI та додано анімовані переходи для покращення користувацького досвіду. Зосереджено на продуктивності, адаптивності та підтримуваній архітектурі коду. Проєкт демонструє сильні навички в розробці UI та основах фронтенду.',
        pro7: 'Вебсайт автомобільної служби [HTML5, CSS3, JavaScript (ES6+)]. Сучасний, адаптивний вебсайт, розроблений для бізнесу автомобільних послуг, спрямований на ефективну презентацію послуг та покращення залучення клієнтів. Я відповідав за побудову повного фронтенд-рішення, включаючи семантичну структуру HTML, адаптивний макет та інтерактивні компоненти UI. Реалізовано принципи адаптивного дизайну для забезпечення сумісності між пристроями. Зосереджено на продуктивності, доступності та чистій архітектурі коду. Проєкт підкреслює сильне розуміння UI/UX та практичні навички фронтенд-розробки.',
        pro8: 'Інтерактивний UI Plates [HTML5, CSS3, JavaScript (ES6+)]. Динамічний та адаптивний веб-інтерфейс, побудований для демонстрації інтерактивної обробки даних та поведінки UI за допомогою Vanilla JavaScript. Я відповідав за реалізацію логіки додатку, включаючи маніпуляцію DOM, обробку подій та динамічне рендеринг елементів. Побудовано структуровану та масштабовану архітектуру фронтенду з акцентом на продуктивність та підтримуваність. Проєкт підкреслює чистий дизайн UI, адаптивний макет та плавну взаємодію користувача.',
        projects_title: 'Проєкти',
        education_title: 'Освіта',
        contacts_title: 'Контакти',
        tech_skills_title: 'Технічні навички',
        soft_skills_title: 'М’які навички',
        languages_title: 'Мови',
        tech1: 'HTML5 / CSS3',
        tech2: 'React',
        tech3: 'JavaScript (ES6+)',
        tech4: 'TypeScript (базовий рівень)',
        tech5: 'Git / GitHub',
        tech6: 'Адаптивний дизайн / Адаптивний макет',
        tech7: 'Інтеграція API',
        tech8: 'Figma (базове використання для макету)',
        soft1: 'Увага до деталей',
        soft2: 'Командна робота',
        soft3: 'Креативність',
        soft4: 'Вирішення проблем',
        soft5: 'Сильні навички адаптації',
        soft6: 'Спокійний',
        lang1: 'Українська - рідна',
        lang2: 'Англійська - базовий',
        lang3: 'Російська - рідна',
        education_title: 'Освіта',
        edu1: 'IT Школа GoIT',
        edu1_desc: 'Fullstack розробник',
        edu1_time: 'Січень 2023 - Січень 2024',
        edu2: 'Миколаївський національний аграрний університет',
        edu2_desc: 'Магістр з обліку та аудиту зобов\'язань',
        edu2_time: 'Вересень 2010 - Серпень 2017',
        linkedin: 'LinkedIn'
    }
};

function applyLanguage(lang) {
    console.log('Applying language:', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        } else {
            console.warn(`missing translation for \"${key}\" in ${lang}`);
        }
    });
    const btn = document.getElementById('langSwitcher');
    if (btn) btn.textContent = lang === 'en' ? 'UA 🇺🇦' : 'EN 🇬🇧';
    localStorage.setItem('lang', lang);
}

function toggleLanguage() {
    const current = localStorage.getItem('lang') || 'en';
    console.log('Current lang:', current);
    applyLanguage(current === 'en' ? 'uk' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
    const initial = localStorage.getItem('lang') || 'en';
    applyLanguage(initial);
    const btn = document.getElementById('langSwitcher');
    if (btn) btn.addEventListener('click', toggleLanguage);
});
