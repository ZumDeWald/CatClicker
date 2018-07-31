//CatClicker JS
$(document).ready(() => {

  //Submit Clicker
  const clicks = $(".clicks");

  let clickCount = 0;

  $(".cat-button-article").on("click", ".cat-image", () => {
    clickCount++;
    clicks.text(clickCount);
  });


})
