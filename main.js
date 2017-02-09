var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')


 $enterButton.on('click',function(){
    checkInput();
    listCounter();

    })

  function checkInput() {
    if ($('#web-title-input').val() == "" || $('#web-url-input').val() == "") {
      alert('Please enter a website title.');
    } else {
      $list.prepend('<article class="card"><p id="web-title" >'+$webTitleInput.val()+'</p>'+
      '<a href='+'http://'+$webUrlInput.val()+' id="web-url"  target="_blank"><div id="underline">'+$webUrlInput.val()+'</div></a>'+
      '<button id="read-button" class="notread read" >Read</button>'+
      '<button id="delete-button">Delete</button>'
      +'</article>')
    }
}


//remove a card when delete button is clicked
$('#list').on('click','#delete-button', function() {
  $(this).parent().remove();
listCounter();
  })


$('#list').on('hover', 'a', function() {
  $(this).toggleClass('orange-hover')
})


//change the class of the read button on click
$('#list').on('click', "#read-button", function() {
  $(this).toggleClass('notread');
})

function listCounter(){
  $('#list-counter').html($(".card").length)
}
