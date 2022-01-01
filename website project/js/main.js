// Mobile Menu
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");


menuBtn.onclick = function (){
  navBar.classList.add("active");
  menuBtn.style.opacity ="0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
}

cancelBtn.onclick = function (){
  navBar.classList.remove("active");
  menuBtn.style.opacity ="1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}


// Scroll Fixed
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    logoOne.classList.add("active");
    menuBtn.classList.add("active");
  }else{
    nav.classList.remove("sticky");
    logoOne.classList.remove("active");
    menuBtn.classList.remove("active");
  }

// counter on scroll
  var number = 0;
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (number == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }

          });
    });
  }
}
//validate form
document.querySelector('#btn').addEventListener('click', checkForm);

function checkForm() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var msg = document.querySelector("#msg").value;

  if (name === "") {
    document.querySelector(".errname").innerHTML ="Please fill the username field";
    return false;
  }
  if ((name.length <= 2) || (name.length > 60)) {
    document.querySelector(".errname").innerHTML = "Username lenght must be between 2 and 60";
    return false;
  }
  if (!isNaN(name)) {
    document.querySelector(".errname").innerHTML = "only characters are allowed";
    return false;
  }

  if (email == "") {
    document.querySelector(".erremail").innerHTML = "Please fill the email idx` field";
    return false;
  }
  if (email.indexOf('@') <= 0) {
    document.querySelector(".erremail").innerHTML = "Invalid Position";
    return false;
  }

  if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
    document.querySelector(".erremail").innerHTML = "Invalid Position";
    return false;
  }

  if (phone == "") {
    document.querySelector(".errphone").innerHTML = " Please fill the mobile NUmber field";
    return false;
  }
  if (isNaN(phone)) {
    document.querySelector(".errphone").innerHTML = " user must write digits only not characters";
    return false;
  }
  if (phone.length != 10) {
    document.querySelector(".errphone").innerHTML = " Mobile Number must be 10 digits only";
    return false;
  }
  if (msg == "") {
    document.querySelector(".errmsg").innerHTML = " Please fill the username field";
    return false;
  }
  if ((msg.length <= 2) || (msg.length > 250)) {
    document.querySelector(".errmsg").innerHTML = "Username lenght must be between 2 and 250";
    return false;
  }
  return false;
}


// silk slider testimonial

$('.testimonials').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:true,
  cssEase:'linear',
  silde:'li',
  arrows:false,
});


