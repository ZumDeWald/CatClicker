//CatClicker JS
$(document).ready(() => {

  // //Submit Clicker
  // const clicks = $(".clicks");
  //
  // let clickCount = 0;
  //
  // $(".cat-button-article").on("click", ".cat-image", () => {
  //   clickCount++;
  //   clicks.text(clickCount);
  // });
  //

 //Cat Class
 class Cat {
   constructor(name, pic) {
     this.name = name;
     this.pic = pic;
     this.clicks = 0;
   };

   increaseClick() {
     $(this.pic).click(() => {
       this.clicks ++;
       clicks.text(clickCount);
     });
   };

   buildDOMCat() {
     $(".section-container").append(
       `<article class="cat-button-article">

       <img class="cat-image" src="${this.pic}"
       alt="${this.name}">

         <h4 class="name">${this.name}<span class="clicks">${this.clicks}</span></h4>

     </article>`
   )};

 }


 //Cats
 const sylvester = new Cat("Sylvester", "https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg?v=1517059999");

 const grumpyCat = new Cat("Grumpy Cat", "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg");


 //Elements for each Cat
 sylvester.buildDOMCat();
 grumpyCat.buildDOMCat();


 //Click Function
 $(".cat-button-article").on("click", ".cat-image", (e) => {
   sylvester.clicks += 1;
   grumpyCat.clicks += 1;
   $(".clicks").text(grumpyCat.clicks);
 });

})
