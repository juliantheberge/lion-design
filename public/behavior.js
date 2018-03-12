$( '.img-frame' ).hover(
  function() {
    $( 'img', this ).addClass( 'blur' );
    $( '.img-text-over', this ).removeClass( 'none' );
  }, function() {
    $( 'img', this ).removeClass( 'blur' );
    $( '.img-text-over', this ).addClass( 'none' );
  }
);

$( '.icon-container' ).hover(
  function() {
    $( '.icon-wrapper' ).addClass( 'view-menu' );
    $( '.page-wrapper' ).addClass( 'squeeze-menu' );
  }, function () {
    $( '.icon-wrapper' ).removeClass( 'view-menu' );
    $( '.page-wrapper' ).removeClass( 'squeeze-menu' );
  }
);

$( '.dropdown-trigger').click(function() {
  $( this ).next().slideToggle(200);
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    }
  });
});

// $('.subtitle-wrapper').click(function() {
//   $(this).next().slideToggle(200);
// });

// FORM STUFF

var submitter = $("#formSubmitter");
submitter.prop('disabled', true);
var userProfileObj = {
  email: "",
  message: ""
};

//identical for now
var string = userProfileObj;

$("#email").click(function() {
  console.log(this);
  $(this).addClass('active-input');
});

$("#message").click(function() {
  console.log(this);
  $(this).addClass('active-input');
});

function emailChecker(val) {
  var emailCheck = /^[a-zA-Z0-9\._\$%\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]{2,6}/;
  if (emailCheck.test(val) === true) {
    console.log('ok');
    return "OK";
  } else {
    console.log('error email');
    return "That's not a valid email. Try again";
  }
}

function messageChecker(val) {
  var messageCheck = /^[a-zA-Z0-9 @!$%,.\/\'\"\;\:`~()[\]]{10,200}/;
  if (messageCheck.test(val) === true) {
    console.log('messsage ok');
    return "OK";
  } else {
    console.log('message error');
    return "Message must be over 10 char and under 200";
  }
}

function inputValidator(id, val) {
  console.log('user prof obj', userProfileObj);
  if (id === "email") {
    return emailChecker(val);
  } else if (id === 'message') {
    return messageChecker(val);
  } else {
    return "None of these ids are correct";
  }
}
$("input.userFormItem").focus(function () {
  var id = $("#" + this.id);
  // console.log('the script is running ' + this.id);
  id.addClass("formCompletedSuccess");
}).keyup(function () {
  var val = this.value;
  var key = this.id;
  userProfileObj[key] = val.trim();
  console.log(submitRelease(userProfileObj));
  if (submitRelease(userProfileObj)) {
    console.log('full obj');
    if (inputValidator(this.id, val) !== "OK") {
      console.log('neg obj valid');
      $("#formSubmitter").prop('disabled', true).addClass("unavailable").removeClass('yes');
    } else {
      console.log('pos obj val');
      $("#formSubmitter").prop('disabled', false).addClass("yes").removeClass('unavailable');
    }
  }
}).blur(function () {
  var id = $("#" + this.id);
  var val = this.value.trim();
  var errorId = $("#" + this.id + "Error");
  if (val === '') {
    var err = 'Try typing something in.';
    errorId.text(err);
    id.addClass('formCompletedFailure').removeClass('formCompletedSuccess');
  }
  else if (inputValidator(this.id, val) !== "OK") {
    var err = inputValidator(this.id, val);
    errorId.text(err);
    id.addClass('formCompletedFailure').removeClass('formCompletedSuccess');
  }
  else {
    errorId.text('');
    id.addClass('formCompletedSuccess').removeClass('formCompletedFailure');
  }
});
//check if all inputs have been completed successfully
function submitRelease(obj) {
  for (var k in obj) {
    if (obj[k] === '') {
      return false;
    }
  }
  return true;
}

submitter.click(function () {
  if (submitRelease(userProfileObj) === true) {
    // submitAThing();
    console.log('you submitted a thing');
  }
  else {
    console.log("submitter isn't available right now");
  }
});
//using the enter key
$(".userFormItem").keypress(function (e) {
  if (e.which === 13) {
    if ($("#stringSubmitter").hasClass("yes")) {
      //  submitAThing();
      console.log('you submitted a thing');
    }
    else {
      console.log("submitter isn't working right now");
    }
    return false;
  }
});
