var url='https://appsheettest1.azurewebsites.net/sample/art';
var tateImageArray = [];
var start = 0; // declaring start index

$(document).ready(function() {
  $.getJSON(url, function(data) {
    $.each(data, function(id, value) {
      tateImageArray.push(url + '/' + value);
    }); // end each loop
  loadImage(tateImageArray, start);
}); // end get JSON outside
    

  $('#loadMore').append('<button type="button">Load More</button> ').on('click', function() {
    loadImage(tateImageArray, start);
  });

  function getNewIndex(index) {
    start = index+1;
  }

  function loadImage(array, start) {
    var end = start+2;
    for (var i = start; i < end; i++) {
      $.getJSON(array[i], function(obj) {
        imgData = '<div class="image clearfix">';
        imgData += '<a href="' + obj.url + '">';
        imgData += '<img src="' + obj.thumbnailUrl + '"></a>' + '<br>';
        imgData += '<label class="title">Artist</label> ' + obj.artist + '<br>';
        imgData += '<label>Medium</label> ' + obj.medium + '<br>';
        imgData += '<label>Year</label> ' + obj.year  + '</div>';

        $('#image').append(imgData);
      }); 
      start = i; // change index;
    } // end for loop
    getNewIndex (start);
   return start;
  } // end loadImage fn
}); // end document ready


