function myFunction() {
    let myVar;
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

$(window).scroll(function () {
    $(this).scrollTop() >= 500 ? $("#return-to-top").fadeIn(300) : $("#return-to-top").fadeOut(300)
}),
        $("#return-to-top").click(function () {
    $("body,html").animate({scrollTop: 0}, 800)
});

$('.nav-link').click(function() {
    $('.nav-item').removeClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        $( this ).parent().addClass('active');
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 60
            }, 500);
            return false;
        }
    }
});

function myFunctionsu(x) {
    if (x.matches) { // If media query matches
       
        $('#header-nav').addClass('bg-dark_grey');
        $('.navbar-toggler').addClass('collapsed');
        $('#logo-large').addClass('d-none');
        $('#logo-small').removeClass('d-none');
        
    } else {
        
        $('#header-nav').removeClass('bg-dark_grey');
        $('#logo-small').addClass('d-none');
        $('#logo-large').removeClass('d-none');
        $('.navbar-toggler').removeClass('collapsed');
        
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 70) {
                $('#header-nav').addClass('bg-dark_grey');
                $('#logo-large').addClass('d-none');
                $('#logo-large').removeClass('d-inline-block');
                $('#logo-small').addClass('d-inline-block');
                $('#logo-small').removeClass('d-none');
            } else {
                $('#header-nav').removeClass('bg-dark_grey');
                $('#logo-small').addClass('d-none');
                $('#logo-small').removeClass('d-inline-block');
                $('#logo-large').addClass('d-inline-block');
                $('#logo-large').removeClass('d-none');
            }
        });
    }
  }
  
  var x = window.matchMedia("(max-width: 920px)");
  myFunctionsu(x);
  x.addListener(myFunctionsu);