var url='https://appsheettest1.azurewebsites.net/sample/art';
var tateImageArray = [];
var start = 0; // declaring start index

$(document).ready(function() {
  $.getJSON(url, function(data) {
    $.each(data, function(id, value) {
      tateImageArray.push(url + '/' + value);
    }); // end each loop

  loadImage(tateImageArray, start);

  $('#loadMore').append('<button type="button">Load More</button> ').on('click', function() {
    loadImage(tateImageArray, start);
  });

  }); // end get JSON outside
}); // end document ready


function loadImage(array, start) {
    var display = 2;
    //var start = array.indexOf(array[0]);
    var end = (array.length - (array.length - display));

    for (var i = start; i < end; i++) {
      $.getJSON(array[i], function(obj) {
        imgData = '<div class="image clearfix">';
        imgData += '<a href="' + obj.url + '">';
        imgData += '<img src="' + obj.thumbnailUrl + '"></a>' + '<br>';
        imgData += '<label class="title">Artist</label> ' + obj.artist + '<br>';
        imgData += '<label>Medium</label> ' + obj.medium + '<br>';
        imgData += '<label>Year</label> ' + obj.year  + '</div>';

        $('#image').append(imgData);

      }); // end get getJSON inside
      start = i; // change index;
    } // end for loop

    //array.splice(start, display);
    return array;
  } // end loadImage fn