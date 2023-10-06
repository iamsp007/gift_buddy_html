// Email validation
function validateEmail(sEmail) {
   var sEmail = $.trim(sEmail);
   var filter =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
   if (filter.test(sEmail)) {
      return true;
   } else {
      return false;
   }
}
// End

function remove_error(input_id) {
   $("#" + input_id).removeClass("error");
}

$("input").focusout(function () {
   if ( $(this).val() !== "") {
      $(this).removeClass("error");
   }
});

// Add 1 before USA phone number
$("#phone").keyup(function () {
   var firstLetter = $("#phone").val().charAt(0);
   var secondLetter = $("#phone").val().charAt(1);
   if (firstLetter == "(") {
      if (firstLetter == "1" || secondLetter == "1") {
         $("#phone").inputmask("9(999) 999-9999");
      } else {
         $("#phone").inputmask("(999) 999-9999");
      }
   } else {
      if (firstLetter == "1" || secondLetter == "1") {
         $("#phone").inputmask("9(999) 999-9999");
      } else if (firstLetter != "1") {
         $("#phone").inputmask("(999) 999-9999");
      }
   }
});

// Signup Form Validation

$("#signup-form-submit").on("click", function (e) {

   $(".popup-form input")
   var first_name_val = $("#first_name").val();
   var last_name_val = $("#last_name").val();
   var email_val = $("#email").val();
   var phone_val = $("#phone").val();

   var first_name_val = $.trim(first_name_val);
   var last_name_val = $.trim(last_name_val);
   var email_val = $.trim(email_val);
   var phone_val = $.trim(phone_val);

   var firstNameLen = first_name_val.length;
   var lastNameLen = last_name_val.length;

   var phone_val_len = phone_val.length; //alert(input_val_len);

   if (phone_val_len == "15") {
      var phone_val = phone_val.substr(1);
   }

   var regex = new RegExp(/^\(\d{3}\)\s?\d{3}-\d{4}$/);

   var flag = 1;

   // For all fields
   if (
      first_name_val == "" &&
      last_name_val == "" &&
      email_val == "" &&
      phone_val == ""
   ) {
      $("#first_name").addClass("error");
      $("#last_name").addClass("error");
      $("#phone").addClass("error");
      $("#email").addClass("error");
      var flag = 0;
      return false;
   }

   // For Company Name
   if (first_name_val == "" || (first_name_val != "" && firstNameLen <= 2)) {
      $("#first_name").addClass("error");
      var flag = 0;
      return false;
   }

   // For Full Name
   if (last_name_val == "" || (last_name_val != "" && lastNameLen <= 2)) {
      $("#last_name").addClass("error");
      var flag = 0;
      return false;
   }

   // For Phone number
   if (!phone_val.match(regex)) {
      $("#phone").addClass("error");
      var flag = 0;
      return false;
   } else {
      var cases = [
         "(000) 000-0000",
         "(111) 111-1111",
         "(222) 222-2222",
         "(333) 333-3333",
         "(444) 444-4444",
         "(555) 555-5555",
         "(666) 666-6666",
         "(777) 777-7777",
         "(888) 888-8888",
         "(999) 999-9999",
      ];
      if (jQuery.inArray(phone_val, cases) != -1) {
         $("#phone").addClass("error");
         var flag = 0;
         return false;
      }
   }

   // For Email Id
   if ($.trim(email_val).length == 0) {
      // Please enter valid email address
      e.preventDefault();
      $("#email").addClass("error");
      var flag = 0;
      return false;
   }
   if (validateEmail(email_val)) {
      // Email is valid
      var flag = 1;
   } else {
      // Invalid Email Address
      e.preventDefault();
      $("#email").addClass("error");
      var flag = 0;
      return false;
   }

   // Success Form
   if (flag == 1) {
      alert("Thank you for Creating Account");
   }
});

$(document).ready(function () {

   var dt = new Date();
	document.getElementById("year").innerHTML = dt.getFullYear();

   $("[data-popup-open]").on("click", function (e) {
      var targeted_popup_class = jQuery(this).attr("data-popup-open");
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      e.preventDefault();
   });
   $("[data-popup-close]").on("click", function (e) {
      var targeted_popup_class = jQuery(this).attr("data-popup-close");
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
      e.preventDefault();
   });

   $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
         $("header").addClass("sticky");
      } else {
         $("header").removeClass("sticky");
      }
   });

   /* Vertical Navigation Scroll Effect */

   var contentSection = $(".content-section");
   var navigation = $(".navigation");

   //when a nav link is clicked, smooth scroll to the section
   navigation.on("click", "a", function (event) {
      event.preventDefault(); //prevents previous event
      smoothScroll($(this.hash));
      // var deviceWidth = window.innerWidth;
      // if ( deviceWidth > 770) {
      //    $("nav").slideUp();
      // }
   });

   //update navigation on scroll...
   $(window).on("scroll", function () {
      updateNavigation();
   });
   //...and when the page starts
   updateNavigation();

   /////FUNCTIONS
   function updateNavigation() {
      contentSection.each(function () {
         var sectionName = $(this).attr("id");
         var navigationMatch = $('.navigation a[href="#' + sectionName + '"]');
         if (
            $(this).offset().top - $(window).height() / 7 <
               $(window).scrollTop() &&
            $(this).offset().top + $(this).height() - $(window).height() / 7 >
               $(window).scrollTop()
         ) {
            navigationMatch.addClass("active-section");
         } else {
            navigationMatch.removeClass("active-section");
         }
      });
   }

   function smoothScroll(target) {
      let position = target.offset().top;
      $("body,html").animate(
         {
            scrollTop: position,
         },
         1000
      );
   }

   $(".menu_icon").on("click", function (e) {
      $("nav").slideToggle();
   });


   /* Scroller js Start -----------------------------------------------------------*/
   const scrollers = document.querySelectorAll(".scroller");

   // If a user hasn't opted in for recuded motion, then we add the animation
   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
   }

   function addAnimation() {
      scrollers.forEach((scroller) => {
         // add data-animated="true" to every `.scroller` on the page
         scroller.setAttribute("data-animated", true);

         // Make an array from the elements within `.scroller-inner`
         const scrollerInner = scroller.querySelector(".scroller__inner");
         const scrollerContent = Array.from(scrollerInner.children);

         // For each item in the array, clone it
         // add aria-hidden to it
         // add it into the `.scroller-inner`
         scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
         });
      });
   }
   /* Scroller js End -----------------------------------------------------------*/

   $(".forgot-password-form-open").on("click", function (e) {
      $(".login-form").hide();
      $(".forgot-password-form").show();
   });

   $(".back-to-login-form").on("click", function (e) {
      $(".forgot-password-form").hide();
      $(".login-form").show();
   });
});
