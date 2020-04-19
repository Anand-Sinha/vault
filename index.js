var wid = $(window).width();

if (wid > 820) {
  $(".first").show();
  setTimeout(function() {
    $(".first").fadeOut(1000);
    setTimeout(function() {
      $(".second").fadeIn(1000);
    }, 1000);
  }, 10000);
} else {
  $(".first").hide();
  $(".mobile").fadeIn();
}

$(window).resize(function() {
  wid = $(window).width();
  if (wid < 820) {
    $(".first").hide();
    $(".second").hide();
    $(".mobile").fadeIn();
  } else {


    $(".mobile").hide();



    $(".second").fadeIn();

  }

})

var logclick = 0;
var passclick = 0;
var activcheck = 0;

function fadeimg() {
  setTimeout(function() {
    $(".cruise1").fadeOut(1000);
    setTimeout(function() {
      $(".cruise2").fadeIn(1000);


      setTimeout(function() {
        $(".cruise2").fadeOut(1000);
        setTimeout(function() {
          $(".cruise3").fadeIn(1000);


          setTimeout(function() {
            $(".cruise3").fadeOut(1000);
            setTimeout(function() {
              $(".cruise1").fadeIn(1000);
              fadeimg();
            }, 1000);
          }, 2000);


        }, 1000);
      }, 2000);


    }, 1000);
  }, 2000);
}
fadeimg();

// Navbar hiding
// $(".nav").mouseover(function{
//   $(".nav").slideDown();
// })
setTimeout(function() {
  $(".nav").slideDown();
  setTimeout(function() {
    $(".nav").slideUp();
  }, 1000);
}, 12000);


$(".nav").on("mouseleave", function() {
  setTimeout(function() {
    $(".nav").slideUp();
    $(".nav1").hide();
  }, 0);
  setTimeout(function() {
    $(".nav1").show();
  }, 500);
})
$(".nav1").mouseover(function() {
  $(".nav").slideDown();
  $(".nav1").hide();
})

$(".activate").click(function() {
  activcheck = 1;
  $(".activate").fadeOut(300);
  $(".lgn").click();
  $(".login").addClass("height");
  setTimeout(function() {
    $(".loginid,.loginbtn,.loginpass").fadeIn()
  }, 300);
})

$(document).keydown(function(event) {
  if (activcheck == 1) {
    if (event.key == "Enter") {
      $(".loginbtn").click();
    }
  }
})

$(".loginid").click(function() {
  if (logclick == 0) {
    $(".loginid").val("");
    logclick++;
  }
})

$(".loginpass").click(function() {
  if (passclick == 0) {
    $(".loginpass").val("");
    passclick++;
  }
})

$(".loginbtn").click(function(event) {
  console.log($(".loginid").val());
  console.log($(".loginpass").val());
  if ($(".loginid").val() == "Anandsinha1309" && $(".loginpass").val() == "Welcome") {
    $(".sec").click();
    activcheck = 0;
    $(".loginid,.loginpass,.loginbtn").fadeOut(300);
    setTimeout(function() {
      $(".logintext").fadeIn();
      $(".logout").fadeIn();
    }, 300);
    $(".secret").slideDown(2000);
  } else {
    $(".wrong").show();
    setTimeout(function() {
      $(".wrong").hide();
      setTimeout(function() {
        alert("Wrong Id or Password! Please try again.")
      }, 100);
    }, 200);
  }
})

$(".home").click(function() {
  $(".hm").click();
})

$(".logout").click(function() {
  $(".loginid,.loginpass,.loginbtn").fadeIn(300);
  setTimeout(function() {
    $(".logintext").fadeOut();
    $(".logout").fadeOut();
    $(".lgn").click();
  }, 300);
  $(".secret").slideUp(2000);
  setTimeout(function() {
    $(".lgn").click();
  }, 500);
  $(".loginid").val("Enter ID");
  $(".loginpass").val("Enter Password");
  logclick = 0;
  passclick = 0;
  activcheck = 1;
})

$(".mypic").click(function(event) {
  document.getElementById("todisplay").src = event.target.src;
  $(".forimg").fadeIn();
})

$(".forimg").click(function() {
  $(".forimg").fadeOut();
})

$(".fa-twitter").mouseover(function() {
  $(".tweet").fadeIn();
})
$(".fa-twitter").mouseout(function() {
  $(".tweet").fadeOut();
})


$(".fa-facebook-f").mouseover(function() {
  $(".faceb").fadeIn();
})
$(".fa-facebook-f").mouseout(function() {
  $(".faceb").fadeOut();
})


$(".fa-instagram").mouseover(function() {
  $(".instaa").fadeIn();
})
$(".fa-instagram").mouseout(function() {
  $(".instaa").fadeOut();
})


$(".fa-envelope").mouseover(function() {
  $(".maill").fadeIn();
})
$(".fa-envelope").mouseout(function() {
  $(".maill").fadeOut();
})
