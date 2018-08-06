//CatClicker JS
// $(document).ready(() => {

 //Cat Array
 // const cats = [];

 //Cat Class
 // class Cat {
 //   constructor(id, name, pic) {
 //     this.id = id;
 //     this.name = name;
 //     this.pic = pic;
 //     this.clicks = 0;
 //   };
 //
 //   increaseClick() {
 //       this.clicks ++;
 //       $(`span.${this.id}`).text(this.clicks);
 //     };
 //
 //
 //   addToCatList() {
 //     $(".cat-list").append(
 //       `<li class="cat-name">${this.name}</li>`
 //     );
 //   }
 //
 //   buildCatDOM() {
 //     //Clear Cat Area
 //     $(".section-container").html("");
 //
 //     //Build New
 //     $(".section-container").append(
 //       `<article class="cat-button-article">
 //
 //         <img id="${this.id}" class="cat-image" src="${this.pic}"
 //         alt="${this.name}">
 //
 //         <h4 class="name">${this.name}<span class="clicks ${this.id}">${this.clicks}</span></h4>
 //
 //     </article>`
 //   )
 //
 //   //Click Counters for each Cat
 //    let catPic = $(`#${this.id}`);
 //
 //     catPic.on("click", (function(catCopy) {
 //       return function() {
 //         catCopy.increaseClick();
 //       };
 //     }) (this) );
 //
 //  };
 //
 // }


 //Cats
 // const sylvester = new Cat("sylvester", "Sylvester", "https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg?v=1517059999");
 //
 // const grumpy = new Cat("grumpy", "Grumpy Cat", "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg");
 //
 // const avenger = new Cat("avenger", "Avenger", "https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2015/06/grey-cat-names.jpg");
 //
 // const sweetPea = new Cat("sweetPea", "Sweet Pea", "https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg");
 //
 // const orb = new Cat("orb", "Orb Kitty", "https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg");



 //Push Cats into cats Array
 // cats.push(sylvester, grumpy, avenger, sweetPea, orb);
 // console.log(cats);



 //Add cats to list
 //Add event listeners
 // for (cat of cats) {
 //   $(".cat-list").append(
 //        `<li class="cat-name ${cat.id}">${cat.name}</li>`
 //      );

   //Click to display Cat in Cat Area
   // let catListName = $(`li.${cat.id}`);

   // catListName.on("click", (function(catCopy) {
   //   return function() {
   //     catCopy.buildCatDOM();
   //   };
   // }) (cat) );



 // }

// })


$(document).ready(() => {

  /*=== Model ===*/

  const model = {
    currentCat: null,
    cats: [
      {
        name: "Sylvester",
        img: "https://cdn.shopify.com/s/files/1/0673/5325/files/LadyDinahs_Cat_Cafe_Alice-Block_2048x.jpg?v=1517059999",
        alt: "Sylvester",
        clicks: 0
      },

      {
        name: "Grumpy Cat",
        img: "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg",
        alt: "Grumpy Cat",
        clicks: 0
      },

      {
        name: "Avenger",
        img: "https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2015/06/grey-cat-names.jpg",
        alt: "Avenger",
        clicks: 0
      },

      {
        name: "Sweet Pea",
        img: "https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg",
        alt: "Sweet Pea",
        clicks: 0
      },

      {
        name: "Orb Kitty",
        img: "https://i.kym-cdn.com/entries/icons/original/000/002/232/bullet_cat.jpg",
        alt: "Orb Kitty",
        clicks: 0
      }
    ]
  }


  /*=== Controller ===*/

  const controller = {
    init: () => {
      //set defauly cat to first in array
      model.currentCat = model.cats[0];

      catListView.init();
      catDisplayView.init();
    },

    getCurrentCat: () => {
      return model.currentCat;
    },

    getCats: () => {
      return model.cats;
    },

    //sets the current cat to object selected
    setCurrentCat: (cat) => {
      model.currentCat = cat;
    },

    //increment ths clicks a cat receives
    incrementClicks: () => {
      model.currentCat.clicks++;
      catDisplayView.render();
    },

    //update cat with admin info
    updateCat: () => {
      model.currentCat.name = $("#form-name").val();
      model.currentCat.img = $("#form-URL").val();
      model.currentCat.clicks = $("#form-clicks").val();

      catDisplayView.showAdmin();
      catDisplayView.resetAdmin();
      catDisplayView.render();
      catListView.render();
    }
  };


  /*=== Views ===*/

  const catDisplayView = {
    init: () => {
      //store DOM pointers
      this.catElem = $("#cat-container");
      this.catNameElem = $("#cat-name");
      this.catImageElem = $("#cat-img");
      this.catClicksElem = $("#clicks");
      this.adminButton = $("#admin");
      this.submitButton = $("#submit");
      this.clearButton = $("#clear");
      this.formElem = $("#admin-form");

      //listen for and update clicks
      $(this.catImageElem).click(function(e) {
        controller.incrementClicks();
      });

      //listen for admin button click and show options
      $(this.adminButton).click(function(e) {
        catDisplayView.showAdmin();
      });

      //listen for submit button click
      $(this.submitButton).click(function(e) {
        controller.updateCat();
      });

      //listen for clear button click
      $(this.clearButton).click(function(e) {
        catDisplayView.showAdmin();
        catDisplayView.resetAdmin();
      }),

      //render this view
      catDisplayView.render();
    },

    render: () => {
      //update DOM with currentCat
      let currentCat = controller.getCurrentCat();
      this.catNameElem.text(currentCat.name);
      this.catImageElem.attr("src", `${currentCat.img}`);
      this.catClicksElem.text(currentCat.clicks);
    },

    showAdmin: () => {
      $(this.formElem).toggleClass("hide");
    },

    resetAdmin: () => {
      $("#form-name").val("");
      $("#form-URL").val("")
      $("#form-clicks").val("")
    }
  }

  const catListView = {
    init: () => {
      //store DOM pointers
      this.catListElem = $("#cat-list");

      //render this view
      catListView.render();
    },

    render: () => {
      //get cats from controller
      let cats = controller.getCats();

      //empty cat list
      this.catListElem.html("");

      //loop over cats and generate list
      for (i=0; i<cats.length; i++) {
        //current cat in loop
        let cat = cats[i];

        //create and append 'li' for each cat
        $(this.catListElem).append(`<li class="cat-name" id="cat${i}">${cat.name}</li>`);

        let catListName = $(`#cat${i}`);

        //on click event listener assigned to each cat
        //will change the catDisplayView to the chosen
        //cat and call up the clicks
        catListName.on("click", ((cat) => {
          return () => {
            controller.setCurrentCat(cat);
            catDisplayView.render();
          }
        })(cat));

      };
    }
  };

  //Go Go Gadget Cat Clicker!!
  controller.init();


})
