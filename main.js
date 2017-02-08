var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')

// var $readButton = $('#read-button');
// var $deleteButton = $('#delete-button');


 $enterButton.on('click',function(){
    checkInput();
    $list.prepend('<article class="card"><p id="web-title">'+$webTitleInput.val()+'</p>'+
    '<a id="web-url">'+$webUrlInput.val()+'</a>'+
    '<button id="read-button" class="notread read">Read</button>'+
    '<button id="delete-button">Delete</button>'
    +'</article>')
  })

function checkInput() {
  if ($webTitleInput === "" || $webUrlInput === ""){
    alert('ERROR!!!!!!!!!!');
  }
}


var cards = function(title, url){
  this.$webTitleInput = title;
  this.$webUrlInput = url;
}

//remove a card when delete button is clicked
$('#list').on('click','#delete-button', function() {
  $(this).parent().remove();
  // console.log('pants');
})


//change the class of the read button on click
$('#list').on('click', "#read-button", function() {
  $(this).toggleClass('notread');
})



// $('#read-button-button').on('click'),function(){
// }
