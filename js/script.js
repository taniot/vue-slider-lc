'use strict';

/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

// console.log(slides);
//destrutturiamo createApp
const { createApp } = Vue;

const vueConfig = {
  data() {
    const title = 'Sono il titolo della pagina';
    const slides = [
      {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      },
      {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      },
      {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
      },
      {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      },
      {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
      },
    ];

    return {
      title,
      slides,
      prova: 'pippo',
      currentSlider: 0,
      testLifeCycle: 'Sono il test della tua vita',
      currentInterval: null,
    };
  },
  methods: {
    next() {
      console.log('next');
      this.currentSlider++;
      //this.currentSlider = this.currentSlider + 1;
      //this.currentSlider += 1;
      if (this.currentSlider > this.slides.length - 1) {
        this.currentSlider = 0;
      }
    },
    prev() {
      console.log('prev');
      this.currentSlider--;
      //this.currentSlider = this.currentSlider - 1;
      //this.currentSlider -= 1;
      if (this.currentSlider < 0) {
        this.currentSlider = this.slides.length - 1;
      }
    },
    setImage(index) {
      console.log('set image');
      console.log(index);
      this.currentSlider = index;
    },
    stopAutoPlay() {
      console.log('stoppo lo slider');
      // console.log(this.currentInterval);
      clearInterval(this.currentInterval);
    },
    startAutoPlay() {
      // console.log('starto lo slider');
      // if (this.currentInterval) return;

      this.currentInterval = setInterval(this.next, 3000);
    },
  },
  // updated() {
  //   console.log('updated');
  //   console.log(this.testLifeCycle);
  //   console.log(this.currentSlider);

  //   if (this.currentSlider === 3) {
  //     console.log('stai esagerando');
  //   }
  // },
  // beforeCreate() {
  //   console.log('before create');
  //   console.log(this.testLifeCycle);
  // },
  // created() {
  //   console.log('created');
  //   console.log(this.testLifeCycle);
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  //   console.log(this.testLifeCycle);
  // },
  mounted() {
    console.log('mounted');
    console.log(this.testLifeCycle);

    console.log('contesto applicazione', this);

    // setInterval(function () {
    //   console.log('normal', this);
    // }, 1000);

    // setInterval(() => {
    //   this.next();
    // }, 3000);

    this.startAutoPlay();

    // setInterval(function () {
    //   this.next();
    //   // console.log('ciao');
    // }, 3000);

    //scope che viene ereditato dalla arrow function
    // setInterval(() => {
    //   console.log(this);
    //   this.next();
    // }, 3000);
  },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  //   console.log(this.testLifeCycle);
  //   console.log(this.currentSlider);
  // },

  // beforeUnmount() {
  //   console.log('beforeUnmount');
  //   console.log(this.testLifeCycle);
  // },
  // unmounted() {
  //   console.log('unmounted');
  //   console.log(this.testLifeCycle);
  // },
};

//istanziamo create app
const myApp = createApp(vueConfig);
//montiamo app nel dom
myApp.mount('#app');

// function sum2Number(num1, num2) {}

// const num1 = prompt('Inserisci il tuo numero');
// const num2 = prompt('Inserisci il tuo numero');

// sum2Number(num1, num2);

// // sum2Number(prompt('Inserisci il tuo numero'), prompt('Inserisci il tuo numero'))

// Element.addEventListener('click', next);
// Element.addEventListener('click', prev);

// Element.addEventListener('click', function(){
//   next();
// })

// Element.addEventListener('click', function () {
//   prev();
// });
