var opt = "";
var fnum = "";
var snum = "";

function append(number) {
    if (opt === "") {
        fnum += number;
        document.getElementById('result').value = fnum;
    } else {
        snum += number;
        document.getElementById('result').value =fnum+" "+opt+" "+snum;
    }
}

function setopt(op) {
    opt = op;
    document.getElementById('result').value = fnum+" "+opt;
}

function showres() {
    let result = 0;
    switch (opt) {
        case '+':
            result = parseInt(fnum) + parseInt(snum);
            break;
        case '-':
            result = parseInt(fnum) - parseInt(snum);
            break;
        case '*':
            result = parseInt(fnum) * parseInt(snum);
            break;
        case '/':
            result = parseInt(fnum) / parseInt(snum);
            break;
        default:
            result = "Error";  
    }
    document.getElementById('result').value = result; 
}

function reset() {
    fnum = "";
    snum = "";
    opt = "";
    document.getElementById('result').value = "";
}
const body=document.querySelector('body');
const button=document.querySelector('button');

const color=['red','orange','black','blue','white','pink']

body.style.backgroundColor='green';

button.addEventListener('click',one);
function one()
{
    //random color gendrater-->parseInt(Math.random*arrname.length)
    const colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
}
