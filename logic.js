function printWidth() {
    document.getElementById("banner").innerHTML = "<h1>" + document.getElementsByTagName("body")[0].offsetWidth + "</h1>"
}

var aboutMe;
var portfolio = document.getElementById("tile");;
var artworks = document.getElementById("artworks");;
var programming = document.getElementById("programming");
var modding = document.getElementById("modding");
var contact;
var thirdParty;

programming.addEventListener("click",function(){toggleTiles("programming")});
modding.addEventListener("click",function(){toggleTiles("modding")});

function toggleTiles(tileClass){
    var tiles = document.getElementsByClassName("tile");
    for(var i = 0;i < tiles.length;i++){
        if(tiles[i].classList.contains(tileClass) == false){
            tiles[i].classList.add("hidden");
        }else{
            tiles[i].classList.remove("hidden");
        }
    }
}