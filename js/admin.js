$(document).on("click", function () {
   $(".dashboard-container .header .setting ul").slideUp();
   $(".custom-search-box ul").fadeOut();
});

$(document).ready(function () {
   var dt = new Date();
   document.getElementById("year").innerHTML = dt.getFullYear();

   new DataTable('#example');

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

   $(".sidebar-toggle-btn").on("click", function () {
      $(this).toggleClass("close");
      $(".sideBar").toggleClass("hide");
      $(".dashboard-container, .dashboard-container .header").toggleClass("full-width");
   });

   $(".sidebar-open-btn").on("click", function () {
      $(".sidebar-close-btn").addClass("show");
      $(".sideBar").addClass("open");
   });

   $(".sidebar-close-btn").on("click", function () {
      $(".sidebar-close-btn").removeClass("show");
      $(".sideBar").removeClass("open");
   });

   $(".dashboard-container .header .setting a").on("click", function (e) {
      e.stopPropagation();
      $(this).next("ul").slideToggle();
   });

   $(".speak-to-type-btn").on("click", function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
         $(this).next(".speak-to-type-note").html("Tap to <b>stop</b>");
      } else {
         $(this).next(".speak-to-type-note").html("Tap to start recording");
      }
   });

   // const audio = document.querySelector("audio");
   // const audioDuration = document.querySelector(".duration");
   // const playButton = document.querySelector(".play-button");
   // let isPlaying = false;

   // const toggleAudio = (event) => {
   //    if (isPlaying) {
   //       audio.pause();
   //       isPlaying = false;
   //       playButton.classList.remove("playing");
   //    } else {
   //       audio.play();
   //       isPlaying = true;
   //       playButton.classList.add("playing");
   //    }
   // };

   // audio.onloadedmetadata = () => {
   //    let minutes = Math.floor(audio.duration / 60);
   //    let seconds = Math.floor(audio.duration - minutes * 60);
   //    audioDuration.innerHTML = `${minutes}:${seconds}`;
   // };

   
   $(".multiple-media-upload-container .add-media-btn").on("click",function (e) {
      e.stopPropagation();
      $(".multiple-media-upload-container .all-media-container").append(`
         <div class="media-container">
            <a class="delete-media-btn"><img src="images/close.svg" alt="Delete"></a>
            <figure><img src="images/default-avatar.svg" alt="Picture"/></figure>
            <div>
               <input type="file" autocomplete="off">
               <textarea placeholder="Commemnt"></textarea>
            </div>
         </div>
      `);
   });

   $("body").on("click",".multiple-media-upload-container .delete-media-btn",function (e) {
      e.stopPropagation();
      $(this).parent().remove();
   });
   
   $(".approve-story-btn").on("click", function () {
      $(this).html("Story Approved");
      $(this).addClass("approved");
   });

   $(".approve-animation-btn").on("click", function () {
      $(this).html("Animation Approved");
      $(this).addClass("approved");
   });  

   $('.radioshow').on('change', function() { 
      var val = $(this).attr('data-class'); 
      $('.allshow').hide();
      $('.' + val).show();        
  });

   $('.approve-comment-container input[type="radio"]').on("click",function (e) {
      e.stopPropagation();
      var title =$(this).attr("title");
      alert(title);
   });


});
