function printWidth() {
    document.getElementById("banner").innerHTML = "<h1>" + document.getElementsByTagName("body")[0].offsetWidth + "</h1>"
}

var aboutme;
var portfolio;
var artworks;
var programming = document.getElementById("programming");
var modding = document.getElementById("modding");
var contact;
var thirdParty;

programming.addEventListener("click",toggleTiles("programming"));
modding.addEventListener("click",toggleTiles("modding"));

function toggleTiles(tileClass){
    var tiles = document.getElementsByClassName("tile");
    for(i in tiles){
        /* if(i.classList.contains(tileClass) == false){
            i.classList.add("hidden");
        }else{
            i.classList.remove("hidden");
        } */
        console.log(i)
    }
}