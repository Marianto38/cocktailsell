import { Controller } from "@hotwired/stimulus"
//import AutoNumeric from 'AutoNumeric';
import './add_jquery'

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("escucha");

    $(".number").on({
      "focus": function(event) {
        $(event.target).select();
      },
      "keyup": function(event) {
        $(event.target).val(function(value) {
          return value.replace(/\D/g, "")
            .replace(/([0-9])([0-9]{2})$/, '$1.$2')
            .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });
      }
    });










  //   new AutoNumeric('.myInput', { currencySymbol : '$' });

  //   const autoNumericOptionsEuro = {
  //     digitGroupSeparator        : '.',
  //     decimalCharacter           : ',',
  //     decimalCharacterAlternative: '.',
  //     currencySymbol             : '\u202f€',
  //     currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
  //     roundingMethod             : AutoNumeric.options.roundingMethod.halfUpSymmetric,
  // };

  // new AutoNumeric(domElement, autoNumericOptionsEuro);

  // anElement = new AutoNumeric(domElement);

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
const paginaUno = document.getElementById("paginaUno");

nextBtnFirst.addEventListener("click", function(event){
  // event.preventDefault();
  // slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  console.log(location.href)
  // paginaUno.href;
  // Location.href=location.href
  // nextPage.classList.add("active")

});
nextBtnSec.addEventListener("click", function(event){
  // event.preventDefault();
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  // event.preventDefault();
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;

});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  // event.preventDefault();
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  // event.preventDefault();
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  // event.preventDefault();
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
  }
}
