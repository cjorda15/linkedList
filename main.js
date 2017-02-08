var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')
var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');

 $enterButton.on('click',function(){
$list.prepend('<article><p id="web-title">'+$webTitleInput.val()+'</p>'+
'<a id="web-url">'+$webUrlInput.val()+'</a>'+
'<button id="read-button">Read</button>'+
'<button id="delete-button">Delete</button>'
+'</article>')})

$('#read-button-button').on('click'),function(){
}
