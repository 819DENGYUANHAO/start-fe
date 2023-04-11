const target = document.querySelector('.target'); // 타겟 요소
const box = document.querySelector('.box'); // 게임 박스 요소
const point = document.querySelector('#point'); // 점수 표시 요소
const life = document.querySelector('#life'); // 남은 생명 표시 요소
const gameOver = document.querySelector('.game-over'); // 게임 종료 요소

let score = 0; // 점수 초기값
let lifeCount = 10; // 남은 생명 초기값

function moveTarget() {
const randomX = Math.floor(Math.random() * (box.offsetWidth - target.offsetWidth)); // 타겟의 X 좌표
const randomY = Math.floor(Math.random() * (box.offsetHeight - target.offsetHeight)); // 타겟의 Y 좌표
target.style.top = randomY + 'px'; // 타겟의 Y 위치 설정
target.style.left = randomX + 'px'; // 타겟의 X 위치 설정
}

function startGame() {
target.addEventListener('click', () => {
score += 1; // 클릭 시 점수 추가
point.textContent = score; // 화면에 점수 표시
moveTarget(); // 타겟 이동
});

moveTarget(); // 초기 타겟 이동
}

box.addEventListener('click', () => {
lifeCount -= 1; // 생명 1 감소
life.textContent = lifeCount; // 화면에 남은 생명 표시

if (lifeCount === 0) {
gameOver.style.display = 'block'; // 생명이 0일 경우 게임 종료 화면 표시
box.style.display = 'none'; // 게임 화면 숨김
}
});

startGame(); // 게임 시작