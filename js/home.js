
'use strict';

// list all the img names that you want to be albums
var albumImages = [
    { path: "img001.png", title: "Cinque Terra", url: "assets/album-covers/albums/cinque-terra/index.html" },
    { path: "img002.png", title: "Edinburgh", url: "" },
    { path: "img003.png", title: "Versailles", url: "" },
    { path: "img004.png", title: "Ancey", url: "" },
    { path: "img005.png", title: "Torino", url: "" },
    { path: "img006.png", title: "Geneva", url: "" },
    { path: "img007.png", title: "London", url: "" },
    { path: "img008.png", title: "Berlin", url: "" },
    { path: "img009.png", title: "Madrid", url: "" },
    { path: "img010.png", title: "Normandy", url: "" },
    { path: "img011.png", title: "Bath", url: "" },
    { path: "img012.png", title: "Paris", url: "" }
];
// Can you make this more effecient/dynamic?

var ROOT_ALBUM_DIR = 'assets/album-covers';

$(document).ready(function() {
    var $albumRow = $('#albumRow');

    var albums = AlbumFactory($albumRow, ROOT_ALBUM_DIR);

    albums.loadImages(albumImages);

});