var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')
var $title = $webTitleInput.val();
var $webUrl =$webUrlInput.val();
var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');

 $enterButton.on('click',function() {
$list.prepend(
      '<article class="card">' +
      '<p id="web-title">' + $webTitleInput.val() + '</p>' +
      '<a id=web-url>' + $webUrlInput.val() + '</a>' +
      '<button id="read-button" class="read">Read</button>' +
      '<button id="delete-button" class="delete">Delete</button>' +
      '</article>')
    })

//remove a card when delete button is clicked
$('#delete-button').on('click', function() {
  $('#list').remove().;
})
