
'use strict';

// list all the img names that you want to be albums
var albumImages = [
    { path: "img001.png", title: "Temple", url: "assets/album-covers/albums/marriage/index.html" },
    { path: "img002.png", title: "Luncheon", url: "assets/album-covers/albums/luncheon/index.html" },
    { path: "img003.png", title: "Ring Ceremony", url: "assets/album-covers/albums/ringceremony/index.html" },
    { path: "img004.png", title: "Reception", url: "assets/album-covers/albums/reception/index.html" },
    { path: "img005.png", title: "Send Off", url: "assets/album-covers/albums/sendoff/index.html" }
];
// Can you make this more effecient/dynamic?

var ROOT_ALBUM_DIR = 'assets/album-covers';

$(document).ready(function() {
    var $albumRow = $('#albumRow');

    var albums = AlbumFactory($albumRow, ROOT_ALBUM_DIR);

    albums.loadImages(albumImages);

});