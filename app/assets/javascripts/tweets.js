// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  $('#new_tweet').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json',

    }).done(function(data){
      console.log(data);
      var message = data.message
      var date    = data.created_at
      $('<li>').html('<p>' + message + '</p>' + '<time>' + date + '</time>').prependTo('.tweets').addClass('tweet');
      $('#tweet_message').val('');

    }).fail(function(){

    }).always(function(){
      $('#create-tweet').removeAttr('disabled')
    });
  });

  // <ul class="tweets">
  //   <% @tweets.each do |tweet| %>
  //     <li class="tweet">
  //       <p><%= tweet.message %></p>
  //       <time><%= tweet.created_at.strftime('%b %e, %l:%M %p') %></time>
  //     </li>
  //   <% end %>
  // </ul>


});
