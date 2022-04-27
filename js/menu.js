
//лес - бочка - 20 - бык - крик - 3
//кот - ананас - 13 - 111 - 15 - камаз
function sortNums(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}


function ReadMenu(){
    text = document.getElementById('text-area').value;
    var arr = text.split(" - ");
    arr.sort();
    var numarr = new Array();
    var wordarr = {};

    var cnt_a = 0;
    var cnt_n = 0;
    for (i=0; i<arr.length; i++){
        if (isNaN(arr[i])){
            cnt_a += 1;
            wordarr[`a${cnt_a}`] = arr[i];
        }
        else{
            numarr.push(parseInt(arr[i]));
        }
    }
    numarr.sort(sortNums);
    newnumarr = {};

    for (i=0; i<numarr.length; i++){
        cnt_n += 1;
        newnumarr[`n${cnt_n}`] = numarr[i];
    }
    var count = document.querySelector("aside").childElementCount;
    for (i = 0; i<count; i++){
        document.querySelector("aside").lastChild.remove();
    }
    var count2 = document.getElementById('menu-output').childElementCount;
    for (i = 0; i<count2; i++){
        document.getElementById('menu-output').lastChild.remove();
    }
    CreateButtons(wordarr);
    CreateButtons(newnumarr);
}

function CreateButtons(array){
    var aside = document.querySelector("aside");
    for (key in array){
        var b = document.createElement('button');
        var str = `${key} ${array[key]}`;
        b.id = key;
        b.innerHTML = str;
        b.onclick = function() {ClickWord(this)};
        aside.appendChild(b);
    }
}

function ClickWord(b){
    var menu = document.getElementById('menu-output');
    var element = document.createElement('p');
    element.className = "pclass";
    element.innerHTML = b.innerHTML.substring(3, b.innerHTML.length);
    menu.appendChild(element);
}