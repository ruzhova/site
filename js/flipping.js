var i=1;
var image=document.getElementById("image");
var imgs=new Array('img/malevich.jpg','img/matushin.jpg','img/tatlin_plot.jpg');
function ImgFlip() {
    if (image.src.match()){
        i++;
        i%=imgs.length;
    }
    image.src = imgs[i];
}

function ImgFlipBack() {
    if (image.src.match()){
        i--;
        i%=imgs.length;
    }
    image.src = imgs[i];
}