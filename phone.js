
 $(document).ready(function() { // do this when the document is loaded
 $("#dialer").show(); // show the element with ID "element"
 $("#content_dialer").show(); // show element
 $("#content_list").hide(); // hide the element with ID "otherElement"
 $("#content_add").hide();
 $("#gestures").hide();
});

//When the Dialer is clicked
  $("#dialer").click(function() { // when "button_id" is clicked
  $("#content_dialer").show(); // show element
  $("#content_list").hide(); // show element
  $("#content_add").hide(); // hide other element
  $("#gestures").hide();
  });

// When the Contact List is clicked
  $("#contact_list").click(function() { // when "button_id" is clicked
  $("#content_dialer").hide(); // show element
  $("#content_list").show(); // show element
  $("#content_add").hide(); // hide other element
  $("#gestures").hide();
  });

//When Add Contact is clicked
  $("#add_contact").click(function() { // when "button_id" is clicked
  $("#content_dialer").hide(); // show element
  $("#content_list").hide(); // show element
  $("#content_add").show(); // hide other element
  $("#gestures").hide();
 });

 //When Gestures is clicked
 $("#gestures_add").click(function() { // when "button_id" is clicked
 $("#content_dialer").hide(); // show element
 $("#content_list").hide(); // show element
 $("#content_add").hide(); // hide other element
 $("#gestures").show();
  });

//Number Pad
function addNumber(element){
 $('#mvar').val($('#mvar').val()+element.value);
}

function clearNumber(element){
  $('#mvar').val('');
}

function addStar(element){
  $('#mvar').val($('#mvar').val()+ "*");
}

function addHash(element){
  $('#mvar').val($('#mvar').val()+ "#");
}

function addDash(element){
  $('#mvar').val($('#mvar').val()+ "-");
}

//Gestures
var downX;
var downY;

$("#gesture_area").mousedown(function(event) {
  $('#gesture_output').val('mouse down');
    downX = event.pageX;
    downY = event.pageY;
});

$("#gesture_area").mouseup(function(event) {
    upX = event.pageX;
    upY = event.pageY;
    if (upX < downX) {
      $('#gesture_output').val('mouse left');
    }
    else if (upX > downX) {
      $('#gesture_output').val('mouse right');
    }
    else if (upX == downX) {
      $('#gesture_output').val('mouse up');
    }
});
