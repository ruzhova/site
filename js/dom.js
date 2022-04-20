// вариант 2 - буква Р
var phrases = [
    "Consuetudo est altera natura",
    "Nota bene",
    "Nulla calamitas sola",
    "Per aspera ad astra"
];
var translate = [
    "Привычка - вторая натура",
    "Заметьте хорошо!",
    "Беда не приходит одна",
    "Через тернии к звёздам"
];

var arrayRandomPhrases = phrases.slice();
var arrayRandomTranslate = [];
var cnt = 0;
function Button_Create(){
    if (cnt < 4 & phrases.length > 0){
        var rand_num = Math.floor(Math.random()*(phrases.length - 1));
        var p = document.createElement('p');
        var str = '<u>n='+cnt+'</u> <i>"'+phrases[rand_num] + '"</i>' + ' "'+translate[rand_num]+'"';
        p.innerHTML = str;
        p.id = cnt;
        if (cnt % 2 == 0){
            p.className = 'class1';
        }
        else{
            p.className = 'class2';
        }
        cnt += 1;
        rand.appendChild(p);
        phrases.splice(rand_num,1);
        translate.splice(rand_num,1);
    }
    else{
        alert('Фразы кончились');
    }
}

var bold_count = 0
function Even_Odd(){
    var array = document.getElementsByClassName("class1");
    if (bold_count != array.length){

        for (let index = 0; index < array.length; index++) {
            var str = "<b>" + array[index].innerHTML+"</b>";
            array[index].innerHTML =  str;
            bold_count += 1
        }
    }
    else{
        bold_count = 0;
        for (let index = 0; index < array.length; index++) {
            var str = array[index].innerHTML.substring(3,array[index].innerHTML.length-4);
            array[index].innerHTML =  str;
        }
    }
}
