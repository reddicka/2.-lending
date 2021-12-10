/* ======================= MOBILE NAV ======================= */
// Находим кнопку и записываем в константу
const mobileNavButton = document.querySelector('.mobile-nav-button');
// Находим иконку
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
// Ищем .mobile-nav для настройки видимости
const mobileNav = document.querySelector('.mobile-nav');

// Обращаемся к кнопке -> слушаем событие с ней (клик), и когда оно срабатывает - запускаем функцию (обращаемся к иконке -> работаем с ее списком классов -> метод toggle, который будет убирать или добавлять класс active)
mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})


/* ======================= VIDEO ======================= */
// Находим по id кнопку и сам файл
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

// Когда кликают по кнопке, запускаем функцию, которая произойдет по клику. По нему мы будем проверять играет файл или нет
// Обращаемся к видеофайлу и вызываем метод play
videoBtn.addEventListener('click', function () {

    if (videoFile.paused) {
        function toggleOverlay(event) {
            if (event.type === 'mouseleave') {
                videoOverlay.classList.add('hidden');
            } else {
                videoOverlay.classList.remove('hidden');
            }
        }

        videoFile.play(); // Делаем плей
        videoBtnIcon.src = "./img/story/pause-white.svg"; // Меняем иконку

        videoOverlay.onmouseleave = toggleOverlay; // Обращаемся квйвйВызов функции отслеживания ливания курсора с оверлея
        videoOverlay.onmouseenter = toggleOverlay; // Вызов функции отслеживания попадания курсора на оверлей

    } else {
        videoFile.pause(); // Делаем паузу
        videoBtnIcon.src = "./img/story/play-white.svg"; // Меняем иконку
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
})