var board = document.getElementById("board");
var count = 0;
board.style.width = '400px';
board.style.height = '400px';

for(var i=0; i<4; i++){0
    for(var j=0; j<4; j++){
        // TODO : 여기에 필요한 코드를 작성해주세요.
        var span = document.createElement("span");
        span.style.display = 'inline-block';
        span.style.width = '100px';
        span.style.height = '100px';

        if((i+j) % 2 === 0) {
            span.className = 'black';
            span.style.backgroundColor = 'black';
        } else {
            span.className = 'white';
            span.style.backgroundColor = 'white';
        }
        board.appendChild(span);

        span.addEventListener("click", function(event) {
            if(count == 0) {
                event.target.style.backgroundColor = 'red';
                count=1;
            } else {
                if(event.target.className === 'black') {
                    event.target.style.backgroundColor = 'black';
                } else {
                    event.target.style.backgroundColor = 'white';
                }
                count=0;
            }
            console.log(event.target.className);
            console.log(count);
        });
    }
}
