$(document).ready(function () {
  //set up
  const animationScrollSpeed = 1000; // 1000 ms so 1 second
  // adding scroll to Web projects link
  $(".js-web").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-web-section").offset().top,
      },
      animationScrollSpeed
    );
  });
  // adding scroll to Unity projects link
  $(".js-unity").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-unity-section").offset().top,
      },
      animationScrollSpeed
    );
  });
  // adding scroll to Contact me link
  $(".js-contact").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-footer").offset().top,
      },
      animationScrollSpeed
    );
  });
});
