const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const audio = document.getElementById('audio');
const disc = document.getElementById('disc');
const needle = document.getElementById('needle');

let spinning = false;
let angle = 0;
let animationFrame;

// 旋轉黑膠函數
function rotateDisc() {
    if (!spinning) return;
    angle += 0.5; // 旋轉速度
    disc.style.transform = `rotate(${angle}deg)`;
    animationFrame = requestAnimationFrame(rotateDisc);
}

// 播放按鈕
pauseBtn.addEventListener('click', () => {
    spinning = false;
    cancelAnimationFrame(animationFrame);
    audio.pause();

    needle.style.transition = 'transform 0.8s ease-in-out';
    needle.style.transform = 'rotate(30deg)';
});

// 暫停按鈕
playBtn
.addEventListener('click', () => {
    needle.style.transition = 'transform 0.8s ease-in-out';
    needle.style.transform = 'rotate(-65deg)';

    setTimeout(() => {
        spinning = true;
        rotateDisc();
        audio.play();
    }, 800);
});

