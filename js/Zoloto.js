// // Функция для добавления золотых точек вдоль линии
// function addGoldenDots() {
//     const gallery = document.querySelector('.snake-gallery');
//     if (!gallery) return;
    
//     // Удаляем существующие точки
//     const oldDots = gallery.querySelectorAll('.golden-dot');
//     oldDots.forEach(dot => dot.remove());
    
//     // Получаем позицию линии
//     const lineLeft = window.getComputedStyle(gallery, '::before').left;
//     const lineHeight = gallery.offsetHeight;
    
//     // Добавляем точки в разных позициях
//     const positions = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    
//     positions.forEach(pos => {
//         const dot = document.createElement('div');
//         dot.className = 'golden-dot';
//         dot.style.top = (lineHeight * pos) + 'px';
//         gallery.appendChild(dot);
//     });
// }

// // Вызываем при загрузке и при ресайзе
// window.addEventListener('load', () => {
//     setTimeout(addGoldenDots, 100);
// });

// window.addEventListener('resize', addGoldenDots);

// // Наблюдаем за изменениями в галерее
// const observer = new MutationObserver(function(mutations) {
//     if (document.querySelector('.snake-gallery')) {
//         setTimeout(addGoldenDots, 100);
//     }
// });

// observer.observe(document.body, { childList: true, subtree: true });