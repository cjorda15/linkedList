var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')


var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');

var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');

 $enterButton.on('click',function(){
$list.prepend('<article><p id="web-title">'+$webTitleInput.val()+'</p>'+
'<a id="web-url">'+$webUrlInput.val()+'</a>'+
'<button id="read-button">Read</button>'+
'<button id="delete-button">Delete</button>'
+'</article>')})



//remove a card when delete button is clicked
$('#delete-button').on('click', function() {
  this.parentNode.removeChild($('.card'))
  // $('.card').remove();
  console.log('pants');
})

//change the class of the read button on click
$('#read-button').on('click', function() {
  //$('#read-button').css('color','#F05A28');
  $('#read-button').toggleClass('read notread')
})


// $('#read-button-button').on('click'),function(){
// }
