$(document).ready(function() {
  createGrid(20); //create starter grid
  var rainbow = false;

  $('.reset').on('click', function() {
    $('#container').children().remove();
    createGrid(20);
  });

  $('.black').on('click', function() {
    rainbow = false;
    colorGrid('black');
  });

  $('.random').on('click', function() {
    rainbow = true;
    colorGrid();
  });

  $('.eraser').on('click', function() {
    rainbow = false;
    colorGrid('ghostwhite');
  });

  $('.resize').on('click', function() {
    var newRez = prompt('Enter new grid size (under 100 plz)');
    $('#container').children().remove();
    createGrid(newRez);
  });

  function createGrid(size) {
    for (var x = 0; x < size; x++) {
      for (var y = 0; y < size; y++) {
        $('#container').append($('<div class="grid"></div>'));
      };
    };
    $('.grid').height(600 / size);
    $('.grid').width(600 / size);
    $('#currentRes').text('The current resolution is ' + size + 'x' + size);
  };

  function colorGrid(color) {
    $('.grid').on('mouseenter', function() {
      if (rainbow) {
        $(this).css('background-color', randomColor());
      } else {
        $(this).css('background-color', color);
      }
    });
  };

  function randomColor() {
    var random = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
    return random;
  };

})