$(document).ready(function(){
  $('.membership_nav').on('click', function(){
    $('#membership').removeClass('inactive');
    $('#about').addClass('inactive');
    $('#mailing_list').addClass('inactive');
  });
  $('.about_nav').on('click', function(){
    $('#about').removeClass('inactive');
    $('#mailing_list').addClass('inactive');
    $('#membership').addClass('inactive');
  });
  $('.mailing_nav').on('click', function(){
    $('#mailing_list').removeClass('inactive');
    $('#about').addClass('inactive');
    $('#membership').addClass('inactive');
  });

  $('#mc-form').ajaxChimp({
    url: 'http://freshgroundpeppernyc.us2.list-manage2.com/subscribe/post?u=892e622abd0c93d3a8eebff29&id=0d252f74c1'
  });

  // $('.continue').delay(1).fadeIn().css('display', 'block');

  $('.continue').on('click', function(){
    $('video').prop('muted', true)
    $('#hero').hide(500);
    $('#main_content').css('display', 'block');
  });
});
