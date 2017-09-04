$(document).ready(function() {
  createGrid(60); //create starter grid

  function createGrid(size) {
    for (var x = 0; x < size; x++) {
      for (var y = 0; y < size; y++) {
        $('#container').append($('<div class="grid"></div>'));
      };
    };
    $('.grid').height(600 / size);
    $('.grid').width(600 / size);
  };

  function colorGrid(color) {
    $('.grid').on('mouseenter', function() {
      $(this).css('background-color', color);
    });
  };

  $('.eraser').on('click', function() {
    colorGrid('white');
  })

  $('.black').on('click', function() {
    colorGrid('black');
  })

  $('.clear').on('click', function() {
    $('#container').css('background-color', 'white');
  })

  $('.random').on('click', function() {
    var random = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
    colorGrid(random);
  })

})