$(document).on('pageinit', function () {
  $('#map_btn').on('click', function (e) {
    var addr = $(e.target).text();
    $('#map').gk('address', addr);
  });
});