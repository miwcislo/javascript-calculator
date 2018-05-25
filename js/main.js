'use strict';

let allButtons = document.getElementsByTagName('button');

function printContent(e) {
    if (e.target.tagName != 'BUTTON') return;
    document.getElementById('screen').innerHTML += e.target.innerText;

    document.getElementById('clear').addEventListener('click', function (e) {
        e.stopPropagation();
        document.getElementById("screen").innerHTML = "";
    });

    document.getElementById('calculate').addEventListener('click', function (e) {
        e.stopPropagation();
        var result = document.getElementById('screen').innerText;
        document.getElementById("screen").innerHTML = eval(result);
    });
}

document.getElementById('button-box').addEventListener('click', printContent);
