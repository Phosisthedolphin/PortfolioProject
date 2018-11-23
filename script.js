var gbScreenText1 = new Array(
    "JOEL: Hello. My web skills are super effective!",
    "Press START to go to my online resume!"
);

var speed = 60;
var indexPos = 0;
var arrayLength = gbScreenText1[0].length;
var scrollAtLine = 20;
var textPos = 0;
var contents = '';
var currentRow;
var classCount = 0;

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
    console.log('in clear box');
    document.getElementById("typeout").innerHTML = "PRESS B TO START";
}

function changeClass()
{
    document.getElementById("background").classList.remove('boring-background');
    document.getElementById("background").classList.add('gradient-background');
    document.getElementById("codeboy").innerHTML = '<FONT COLOR="#FF0000">C</FONT><FONT COLOR="#FFC000">O</FONT><FONT COLOR="#FFff00">D</FONT><FONT COLOR="#3Fff00">E</FONT><FONT COLOR="#00ff00"> </FONT><FONT COLOR="#00ffC0">B</FONT><FONT COLOR="#00ffff">O</FONT><FONT COLOR="#00C0ff">Y</FONT>';
    console.log(classCount);
    if (classCount == 1) {
        var node = document.createTextNode('THE FUN CANNOT BE HALTED');
        document.getElementById("typeout").appendChild(node);
    }
    classCount++;
    console.log(classCount);
}

function reset()
{
    classCount == 0;
    document.getElementById("codeboy").innerHTML = 'CODE BOY';
    document.getElementById("background").classList.remove("gradient-background");
    document.getElementById("background").classList.add("boring-background");
}

document.getElementById("a-btn").addEventListener("click", textBox);
document.getElementById("b-btn").addEventListener("click", changeClass);
document.getElementById("select-btn").addEventListener("click", reset);