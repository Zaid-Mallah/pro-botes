let copy = document.querySelector(".copy");
let datecopy = new Date();

copy.append(datecopy.getFullYear());

var $grid= $('.xgrid').isotope({
   
  });
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
