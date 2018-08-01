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
   constructor(id, name, pic) {
     this.id = id;
     this.name = name;
     this.pic = pic;
     this.clicks = 0;
   };

   increaseClick() {
       this.clicks ++;
       $(`.${this.id}`).text(this.clicks);
     };


   buildDOMCat() {
     $(".section-container").append(
       `<article class="cat-button-article">

         <img id="${this.id}" class="cat-image" src="${this.pic}"
         alt="${this.name}">

         <h4 class="name">${this.name}<span class="clicks ${this.id}">${this.clicks}</span></h4>

     </article>`
   )};

 }


 //Cats
 const sylvester = new Cat("sylvester", "Sylvester", "https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg?v=1517059999");

 const grumpy = new Cat("grumpy", "Grumpy", "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg");


 //Elements for each Cat
 sylvester.buildDOMCat();
 grumpy.buildDOMCat();


 //Click Functions
 //Sylvester
 $(".cat-button-article").on("click", "#sylvester", (e) => {
   sylvester.increaseClick();
 });

 $(".cat-button-article").on("click", "#grumpy", (e) => {
   grumpy.increaseClick();
 });



})
