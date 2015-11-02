$(document).ready(function(){
  console.log('connected');
  $('.membership_nav').on('click', function(){
    console.log('clicked membership');
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
});
