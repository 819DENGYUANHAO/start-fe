let isPress = false; // 마우스 클릭 여부를 나타내는 변수입니다.

function startDrag($el) {
isPress = true; // 마우스 클릭이 시작되면 isPress 값을 true로 설정합니다.
};

function stopDrag($el) {
isPress = false; // 마우스 클릭이 종료되면 isPress 값을 false로 설정합니다.
};

function drag($el) {
if (!isPress) return; // 마우스 클릭이 시작되지 않았으면 함수를 종료합니다.

let x = event.clientX; // 마우스의 x 좌표를 가져옵니다.
let y = event.clientY; // 마우스의 y 좌표를 가져옵니다.

$el.style.left = `${x - 50}px`; // 드래그 대상 요소의 left 값을 변경합니다.
$el.style.top = `${y - 50}px`; // 드래그 대상 요소의 top 값을 변경합니다.

};

// 마우스 이벤트를 등록하는 함수입니다.
function addEvent($el) {
$el.addEventListener('mousedown', () => {
startDrag($el); 
});
$el.addEventListener('mousemove', () => {
drag($el); 
});
$el.addEventListener('mouseup', () => {
stopDrag($el); 
});
}

// 초기화 함수입니다.
function init() {
const $box = document.querySelector('.box'); 
const $box1 = document.querySelector('.box1'); 

addEvent($box); 
addEvent($box1); 

}

init(); // 초기화 함수를 실행합니다.