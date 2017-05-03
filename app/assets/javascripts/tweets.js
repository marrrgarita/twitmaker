// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){

  $('#new_tweet').on('submit', function(e){
    e.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html',

    }).done(function(data){
      console.log('success');
      $('.tweets').prepend(data);
      $('#tweet_message').val("");
    }).fail(function(){
      console.log('fail');

    }).always(function(){
      console.log('does not matter');
      $('#create-tweet').removeAttr('disabled');
    });
  });






});
