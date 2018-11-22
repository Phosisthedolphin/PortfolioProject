var gbScreenText1 = new Array(
    "JOEL: Hello. My web skills are super effective!",
    "Please check out my portfolio!",
);

var speed = 60;
var indexPos = 0;
var arrayLength = gbScreenText1[0].length;
var scrollAtLine = 20;
var textPos = 0;
var contents = '';
var currentRow;

function textBox()
{
    contents = ' ';
    currentRow = Math.max(0, indexPos-scrollAtLine);
    var destination = document.getElementById("typeout");
    

    while ( currentRow < indexPos ) {
        contents += gbScreenText1[currentRow++] + '<br /><br />';
    }
    destination.innerHTML = contents + gbScreenText1[indexPos].substring(0, textPos);
    if ( textPos++ == arrayLength ) {
        textPos = 0;
        indexPos++;
        if ( indexPos != gbScreenText1.length ) {
            arrayLength = gbScreenText1[indexPos].length;
            setTimeout('textBox()', 500);
        }
    } else {
        setTimeout('textBox()', speed);
    }
}

function clearBox()
{
    document.getElementById("typeout").innerHTML = "PRESS B TO START";
}

document.getElementById("a-btn").addEventListener("click", clearBox);
document.getElementById("b-btn").addEventListener("click", textBox);