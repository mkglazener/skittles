$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
$(document).ready(function () {
   $('.modal').modal('show');
  });
  $(document).ready(function() {
    $('.clickme').click(function(e) {
        e.preventDefault();

        boxh = $('#popup').height();
        windowh = $(window).height();

        $('#popup').css('margin-top', windowh/2 - boxh/2);

        $('#popup').fadeIn();
    });
});
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});
});