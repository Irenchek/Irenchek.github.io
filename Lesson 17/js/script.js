$(document).ready(function(){
 $('.content').hide();
    var tab = $('.tab');
    tab.click(function(){
      var target = $(this).attr('href');
      console.log('Эта ссылка ведет на ' + target);
      $('.content').hide();
      $(target).show();
    });
});