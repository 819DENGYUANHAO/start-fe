var board = document.getElementById("board");
var str = '';
var isWhite = false;
var className = '';
var boardLineCount = 4;
var boards = document.querySelectorAll('span');
var boardLength = boards.length;
var select = null;

for(var i=0; i<16; i++){
    className = isWhite ? 'black':'white';
    str += '<span class = "black"></span>';

    isWhite = !isWhite;
    if(i % boardLineCount === boardLineCount -1){
        isWhite != isWhite;
    }
}


function select(event){
if($select){
    $select.className = $select.className.replace(' select', '')
}
var el = event.currentTarget;
el.className +='select';
$select = el;
}

for(var i = 0; i <boardLength; i++){
    boards[i].addEventListener('click',select);
}

board.innerHTML = str;