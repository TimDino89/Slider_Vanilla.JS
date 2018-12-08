(function(){
'use strict';

function Slider(slides) {

  // Slides To Show and Slider Start Position
  this.slidesToShow = slides;
  this.position = 1;

  // DOM Elements
  this.sliderBox = document.querySelector('#js-slider');
  this.sliderList = document.querySelector('#js-slider-list');
  this.sliderItems = document.querySelectorAll('.slider-item');
  this.prevBtn = document.querySelector('#prevBtn');
  this.nextBtn = document.querySelector('#nextBtn');

 // Calc Position
  this.maxPosition = function(){
    const maxPosition = (this.sliderItems.length - this.slidesToShow) * this.itemWidth();
    return maxPosition;
  };

  // Calc Item Width
  this.itemWidth = function(){
    const itemWidth = this.sliderBox.offsetWidth / this.slidesToShow;
    return itemWidth;
  };

  // Set Item Width
  this.setWidth = function() {
    for (var i = 0; i < this.sliderItems.length; i++) {
      this.sliderItems[i].style.width = this.itemWidth() + 'px';
    };
  };

  // Call function setWidth
  this.setWidth();

  // Show Next Slide
  this.nextSlide = function(){
    if (this.position == this.maxPosition()) return false;

    this.position += this.itemWidth() * this.slidesToShow;
    this.sliderList.style.right = this.position + 'px';
  };

  // Show Previous Slide
  this.prevSlide = function(){
    if (this.position == 0) return false;

    this.position -= this.itemWidth() * this.slidesToShow;
    this.sliderList.style.right = this.position + 'px';
  };

};

// New object Slider
const slider = new Slider(3);

// Events
slider.nextBtn.addEventListener('click', slider.nextSlide.bind(slider));
slider.prevBtn.addEventListener('click', slider.prevSlide.bind(slider));

}());