function printWidth() {
    document.getElementById("banner").innerHTML = "<h1>" + document.getElementsByTagName("body")[0].offsetWidth + "</h1>"
}

var grid = document.getElementById("grid");


/* Copied from MDN, no real point in writing it myself */

var requestURL = "./tiles.json"
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const tileList = request.response;
    for(var i = 0; i < tileList.length; i++){
        var tmpTile = document.createElement("div");
        tmpTile.classList.add("tile");
        tmpTile.classList.add(tileList[i].type);
        tmpTile.style.backgroundImage = tileList[i].image;
        tmpTile.dataset.url = tileList[i].url;
        grid.appendChild(tmpTile);
    }
}

var aboutMe;
var portfolio = document.getElementById("portfolio");;
var artworks = document.getElementById("artworks");;
var programming = document.getElementById("programming");
var modding = document.getElementById("modding");
var contact;
var thirdParty;

var menuButton = document.getElementById("menuButton");
var sideBar = document.getElementById("sidebar");

var overlay = document.getElementById("overlay");

overlay.addEventListener("click",function(){toggleMenu()});
menuButton.addEventListener("click",function(){toggleMenu()});
portfolio.addEventListener("click",function(){toggleTiles("tile")});
artworks.addEventListener("click",function(){toggleTiles("artworks")});
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

function toggleMenu(){
    if(sideBar.classList.contains("collapsed") || sideBar.classList.contains("initial")){
        sideBar.classList.add("opened");
        sideBar.classList.remove("initial");
        sideBar.classList.remove("collapsed");
        menuButton.innerText = "[<]"
        overlay.classList.add("overShown")
        overlay.classList.remove("overNone");
        overlay.classList.remove("overHidden");
    }else if(sideBar.classList.contains("opened")){
        sideBar.classList.add("collapsed");
        sideBar.classList.remove("opened");
        menuButton.innerText = "[>]"
        overlay.classList.add("overHidden")
        overlay.classList.remove("overShown");
    }else{
        console.log("error")
    }
}