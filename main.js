var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')
var $title = $webTitleInput.val();
var $webUrl =$webUrlInput.val();
var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');

 $enterButton.on('click',function(){
$list.prepend('<p id="web-title">'+$title+'</p>'
+'<a id=web-url>'+$webUrl+'</a>'+
'<button id="read-button">Read</button>'
+'<button id="delete-button">Delete</button>')})
