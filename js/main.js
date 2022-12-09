$(document).ready(function(){

    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc>50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');  
        }
    })

})
var musics=[];
function Music (name,artist,album,path,img) 
{
var obj= {}
obj.name=name ;
obj.artist=artist ; 
obj.album = album ;
obj.added= new Date();
obj.path = path;
obj.img=img;
obj.add = function () {
    musics.push(this);
}

return obj 
}
var music1 = Music("poinetless","Lewis Capaldi","Single","music/music1.mp3","images/img1.jpg")
music1.add();

var m2 = Music("calm down","Selena Gomez","Single","music/m2.mp3","images/calm.jpg")
m2.add();

var m3 = Music("pookie","Aya Nakamura","Single","music/m3.mp3","images/aya.jpg")
m3.add();

var m4 = Music("Disco Maghreb ","Dj Snake","Single","music/m4.mp3","images/djsnake.jpg")
m4.add();

var m5 = Music("believer","imagine dragons","Single","music/m5.mp3","images/believer.jpg")
m5.add();

var m6 = Music("shape of you","ed sheeran","Single","music/m6.mp3","images/ed.jpg")
m6.add();


for (var i=0 ; i<musics.length ; i++) {
    var tag= `<div class="containermusic" id=${i}>
    <div class="pic">
        <img src = "${musics[i].img}">
        <img id="play${i}" class="play" src="images/play.png">
    </div>
    <div class="name">
        <h2>${musics[i].name}</h2>
    </div>
    <div class="album">${musics[i].album}</div>
</div>`
$(".about").append(tag);
}


var isPlaying=false 

$(".containermusic").click(function() {
   var  id = this.id ;
    if (isPlaying==false){
    audio = new Audio(musics[id].path);
    audio.play() ; isPlaying=true ; }
else {
    audio.pause();
   isPlaying=false ;
}
})

$(".containermusic").hover(function () {
    id="#play"+this.id;
    console.log(id)
$(id).css({display : "flex"})
},function(){
    id="#play"+this.id;
    $(id).css({display : "none"})
}
);
$("#opener").click(function(){
    console.log(1);
srch = $("#txt").val() ;
isfound=false ;
for(var j=0 ; j<musics.length;j++){
    if(musics[j].name.indexOf(srch)!=-1 || musics[j].artist.indexOf(srch)!=-1 ) { isfound= true ; break ;}
}
if (isfound===false) {
    $("#search").append("<div class='found' id='sahsah' > not found </div> ")}
    else {
        $("#search").append(`<div class="containermusic" id="sahsah">
    <div class="pic">
        <img src = "${musics[j].img}">
        <img id="play${j}" class="play" src="images/play.png">
    </div>
    <div class="name">
        <h2>${musics[j].name}</h2>
    </div>
    <div class="album">${musics[j].album}</div>
</div>`

) }

})

var arr=['a1','a2','a3','a4','a5','a6','a7','a8','a9']
var player={}
var ordinateur={}
player.num=Math.ceil(Math.random()*2)
if(player.num===1){
    ordinateur.num=2
    ordinateur.img='images/x.png'
    player.img='images/o.png'
}
else{
    ordinateur.num=1
    ordinateur.img='images/o.png'
    player.img='images/x.png'
}

var istrue=0
$('.box').click(function(){
    console.log(istrue)
   if(istrue<4){
    id=this.id
    $('#'+id).append(`<img src=${player.img} style="width:5%;heigth:5%;position:absolute">`)  
    idpc=Math.ceil(Math.random()*arr.length)-1
    while(arr[idpc]===id){
        idpc=Math.ceil(Math.random()*arr.length)-1
    }
    console.log(idpc)
    console.log(arr[idpc])
        $('#'+arr[idpc]).append(`<img src=${ordinateur.img} style="width:5%;heigth:5%;position:absolute">`)
        newarr=arr.splice(arr.indexOf(arr[idpc]),1)
        newarr=arr.splice(arr.indexOf(id),1)
}
else if(istrue===4){
    $('#'+arr[0]).append(`<img src=${player.img} style="width:5%;heigth:5%;position:absolute">`) 
}
istrue++ 
})
arr=newarr




