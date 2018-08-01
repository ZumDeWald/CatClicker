//CatClicker JS
$(document).ready(() => {

 //Cat Array
 const cats = [];

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


   addToCatList() {
     $(".cat-list").append(
       `<li class="cat-name">${this.name}</li>`
     );
   }

   buildCatDOM() {
     //Clear Cat Area
     $(".section-container").html("");

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

 const grumpy = new Cat("grumpy", "Grumpy Cat", "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg");

 const avenger = new Cat("avenger", "Avenger", "https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2015/06/grey-cat-names.jpg");

 const sweetPea = new Cat("sweetPea", "Sweet Pea", "https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg");

 const orb = new Cat("orb", "Orb Kitty", "https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg");



 //Push Cats into cats Array
 cats.push(sylvester, grumpy, avenger, sweetPea, orb);
 console.log(cats);



 //Add cats to Cat List
 for (cat of cats) {
   let catListName = $(".cat-list").append(
     `<li class="cat-name">${cat.name}</li>`
   );

   catListName.on("click", (function(catCopy) {
     return function() {
       catCopy.buildCatDOM();
     };
   }) (cat) );
 }



 //Click Functions
 //Sylvester
 $(".cat-button-article").on("click", "#sylvester", (e) => {
   sylvester.increaseClick();
 });

 //Grumpy
 $(".cat-button-article").on("click", "#grumpy", (e) => {
   grumpy.increaseClick();
 });



})
