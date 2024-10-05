js
const ball = document.getElementById('ball');

ball.addEventListener('click', moveBall);

function moveBall() {
    const maxX = window.innerWidth - ball.clientWidth;
    const maxY = window.innerHeight - ball.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}
