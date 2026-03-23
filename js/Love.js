// ========== АНИМАЦИЯ СЕРДЦА С ВЗРЫВОМ ==========

function burstConfettiWithHearts() {
    // разноцветное конфетти
    for(let i = 0; i < 120; i++) {
        const conf = document.createElement('div');
        conf.classList.add('confetti');
        conf.style.left = Math.random() * 100 + '%';
        conf.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
        conf.style.width = Math.random() * 10 + 6 + 'px';
        conf.style.height = Math.random() * 10 + 6 + 'px';
        conf.style.position = 'fixed';
        conf.style.top = '-10px';
        conf.style.zIndex = 9999;
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 2500);
    }
    // летящие сердечки
    for(let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕', '💝'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 1 + 1) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

function showFlash() {
    const flash = document.createElement('div');
    flash.className = 'flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
}

function createSparkle(x, y) {
    for(let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'sparkle';
        spark.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        spark.style.left = (x + (Math.random() - 0.5) * 80) + 'px';
        spark.style.top = (y + (Math.random() - 0.5) * 80) + 'px';
        spark.style.position = 'fixed';
        spark.style.fontSize = (Math.random() * 16 + 12) + 'px';
        spark.style.pointerEvents = 'none';
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 800);
    }
}

// ГЛАВНАЯ ФУНКЦИЯ — ПОКАЗАТЬ СЕРДЦЕ С ВЗРЫВОМ
function showHeartExplosion() {
    return new Promise((resolve) => {
        // создаём затемнённый оверлей
        const overlay = document.createElement('div');
        overlay.className = 'heart-overlay';
        overlay.innerHTML = '<div class="giant-heart">❤️</div>';
        document.body.appendChild(overlay);
        
        const heartElem = overlay.querySelector('.giant-heart');
        let exploded = false;
        
        const explodeHeart = () => {
            if(exploded) return;
            exploded = true;
            
            // анимация исчезновения сердца
            heartElem.classList.add('heart-explode');
            
            // вспышка
            showFlash();
            
            // конфетти и сердечки
            burstConfettiWithHearts();
            
            // добавляем много сердечек вокруг места взрыва
            const rect = heartElem.getBoundingClientRect();
            for(let i = 0; i < 60; i++) {
                const smallHeart = document.createElement('div');
                smallHeart.className = 'floating-heart';
                smallHeart.innerHTML = ['❤️', '💖', '💗', '💝', '💓'][Math.floor(Math.random() * 5)];
                smallHeart.style.left = (rect.left + rect.width/2 + (Math.random() - 0.5) * 200) + 'px';
                smallHeart.style.top = (rect.top + rect.height/2 + (Math.random() - 0.5) * 200) + 'px';
                smallHeart.style.fontSize = (Math.random() * 28 + 16) + 'px';
                smallHeart.style.animation = 'floatUp 1.2s ease-out forwards';
                document.body.appendChild(smallHeart);
                setTimeout(() => smallHeart.remove(), 1200);
            }
            
            // удаляем оверлей и завершаем Promise
            setTimeout(() => {
                overlay.remove();
                resolve();
            }, 500);
        };
        
        // по клику на сердце — взрыв
        heartElem.addEventListener('click', explodeHeart);
        
        // автоматический взрыв через 2.5 секунды, если не кликнули
        setTimeout(() => {
            if(!exploded) explodeHeart();
        }, 2800);
    });
}

// ========== СТИЛИ, КОТОРЫЕ НУЖНО ДОБАВИТЬ В CSS ==========
/* 
<style>
.heart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(8px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInOverlay 0.5s ease;
    cursor: pointer;
}

@keyframes fadeInOverlay {
    from { opacity: 0; backdrop-filter: blur(0px); }
    to { opacity: 1; backdrop-filter: blur(8px); }
}

.giant-heart {
    font-size: 180px;
    animation: heartBeat 0.8s ease-in-out infinite;
    filter: drop-shadow(0 0 30px rgba(255,80,80,0.8));
    cursor: pointer;
    transition: transform 0.2s;
}

.giant-heart:active {
    transform: scale(0.95);
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); text-shadow: 0 0 20px #ff3366; }
    50% { transform: scale(1.2); text-shadow: 0 0 50px #ff6699; }
}

.heart-explode {
    animation: explodeOut 0.4s forwards;
}

@keyframes explodeOut {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
}

.floating-heart {
    position: fixed;
    pointer-events: none;
    z-index: 10001;
    font-size: 24px;
    animation: floatUp 1.5s ease-out forwards;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) scale(1) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-150px) scale(0.5) rotate(180deg);
        opacity: 0;
    }
}

.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #ffb347;
    position: absolute;
    animation: fall 2s linear forwards;
    z-index: 9999;
    pointer-events: none;
}

@keyframes fall {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

.flash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    pointer-events: none;
    z-index: 9997;
    animation: flashAnim 0.3s ease-out forwards;
}

@keyframes flashAnim {
    0% { opacity: 0.8; }
    100% { opacity: 0; visibility: hidden; }
}

.sparkle {
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    animation: sparkleFade 1s ease-out forwards;
}

@keyframes sparkleFade {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}
</style>
*/

// ========== ИСПОЛЬЗОВАНИЕ ==========
// Просто вызови функцию, когда нужно показать сердце:
// await showHeartExplosion();

// Пример использования в вашем коде:
/*
async function startQuest() {
    await showHeartExplosion();
    // после взрыва сердца продолжаем выполнение
    console.log('Сердце взорвалось! Начинаем квест...');
}
*/