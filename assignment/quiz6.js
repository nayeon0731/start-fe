var num = document.getElementById('num');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
var gugudanResult = document.createElement('span');
var resultNum = 0;

function gugudanPrint() {
    var gugudanNum = num.value;
    var printResult = "";

    if(!gugudanNum) {
        error();
    }

    for(var i=1; i<10; i++) {
        resultNum = gugudanNum * i;
        printResult += `${gugudanNum} X ${i} = ${resultNum}<br>`
        document.getElementById('result').innerHTML = printResult
    }
}

function error() {
    alert('숫자를 입력하세요');
}

btn.addEventListener("click", gugudanPrint);