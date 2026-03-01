
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
        pro1: 'Web Studio [HTML5, CSS3, JavaScript(ES6+)]. Website with adaptive layout. Role: Developer. Building the project on githab, checking build errors and page performance in real time.',
        pro2: 'Thewatchspot [HTML5, CSS3, JavaScript(ES6+)]. Website with adaptive layout. Role: Scrum Master. Building the project on githab, checking build errors and page performance in real time.',
        pro3: 'Avtosklo [HTML5, CSS3, JavaScript(ES6+), PHP, Wordpress]. Website with adaptive layout. Role: Developer. Building the project on githab, checking build errors and page performance in real time.',
        projects_title: 'Projects',
        education_title: 'Education',
        contacts_title: 'Contacts Me',
        tech_skills_title: 'Tech Skills',
        soft_skills_title: 'Soft Skills'
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
        pro2: 'Thewatchspot [HTML5, CSS3, JavaScript(ES6+)]. Вебсайт з адаптивним макетом. Роль: Scrum Master. Зборка проєкту на GitHub, перевірка помилок збірки та продуктивності сторінки в реальному часі.',
        pro3: 'Avtosklo [HTML5, CSS3, JavaScript(ES6+), PHP, Wordpress]. Вебсайт з адаптивним макетом. Роль: розробник. Зборка проєкту на GitHub, перевірка помилок збірки та продуктивності сторінки в реальному часі.',
        projects_title: 'Проєкти',
        education_title: 'Освіта',
        contacts_title: 'Контакти',
        tech_skills_title: 'Технічні навички',
        soft_skills_title: 'М’які навички'
    }
};

function applyLanguage(lang) {
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
    applyLanguage(current === 'en' ? 'uk' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
    const initial = localStorage.getItem('lang') || 'en';
    applyLanguage(initial);
    const btn = document.getElementById('langSwitcher');
    if (btn) btn.addEventListener('click', toggleLanguage);
});