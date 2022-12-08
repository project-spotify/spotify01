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

for (var i=0 ; i<musics.length ; i++) {
    var tag= `<div class="containermusic" id=${i}>
    <div class="pic">
        <img src = "${musics[i].img}">
    </div>
    <div class="name">
        <h2>${musics[i].name}</h2>
    </div>
    <div class="album">${musics[i].album}</div>
</div>

</div>`
$(".about").append(tag);
}




$(".containermusic").click(function() {
    id = this.id ;
    console.log(musics[id].link)
    audio = new Audio(musics[id].link);
    audio.play();


})