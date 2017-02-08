var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')



var $readButton = $('#read-button');
var $deleteButton = $('#delete-button-button');
var arr = [];
 $enterButton.on('click',function() {
$list.prepend(
      '<article class="card">' +
      '<p id="web-title">' + $webTitleInput.val() + '</p>' +
      '<a href= id=web-url>' + $webUrlInput.val() + '</a>' +
      '<button id="read-button" >Read</button>' +
      '<button id="delete-button" class="delete">Delete</button>' +
      '</article>');
       arr = [this];
    })

    &&

//remove a card when delete button is clicked
$('#list').on('click','#delete-button',function() {

   $(this).parent().remove()
})

//change the class of the read button on click
$('#read-button').on('click', ,function() {
  //$('#read-button').css('color','#F05A28');
  $('#read-button').toggleClass('read notread')
})
