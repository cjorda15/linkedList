var $webTitleInput = $('#web-title-input');
var $webUrlInput = $('#web-url-input');
var $enterButton = $('#enter-button');
var $list = $('#list')

// var $readButton = $('#read-button');
// var $deleteButton = $('#delete-button');


 $enterButton.on('click',function(){
    checkInput();
    })


  function checkInput() {
    if ($('#web-title-input').val() == "" || $('#web-url-input').val() == "") {
      alert('Please enter a website title.');
    } else {
      $list.prepend('<article class="card"><p id="web-title" >'+$webTitleInput.val()+'</p>'+
      '<a href='+'http://'+$webUrlInput.val()+' id="web-url"  target="_blank">'+$webUrlInput.val()+'</a>'+
      '<button id="read-button" class="notread read" >Read</button>'+
      '<button id="delete-button">Delete</button>'
      +'</article>')
    }
}

var cards = function(title, url){
  this.$webTitleInput = title;
  this.$webUrlInput = url;
}

//remove a card when delete button is clicked
$('#list').on('click','#delete-button', function() {
  $(this).parent().remove();
  })


$('#list').on('mouseover', '#web-url', function() {
  // $(this).css('background-color', 'orange');
  $(this).toggleClass('orange-hover')
  console.log('pants');
})

  // $('#list').on('mouseleave', '#delete-button', function() {
  //   // $(this).toggleClass('#delete-button #delete-button-hover');
  //   $(this).css('text-decoration', 'solid green 1px');
  //   console.log('shirts');
  //   })

//change the class of the read button on click
$('#list').on('click', "#read-button", function() {
  $(this).toggleClass('notread');
})
