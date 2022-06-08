// Slide Show Part
var slideNumber= -1
var slides = document.getElementsByClassName('Slides')
var circles= document.getElementsByClassName("circle")
var timer = setInterval(showNext, 5000)
if (slideNumber===-1) {
  showNext()
}



function showNext(){
  slideNumber++
  if (slideNumber >= slides.length) {slideNumber = 0;}
   //if (slideNumber < 0) {number = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" active", "");
    }
  slides[slideNumber].style.display = "block"
  circles[slideNumber].className+= " active"
}

function showPrev(){
  // if (slideNumber > slides.length) {slideNumber = 1}
  slideNumber--
  if (slideNumber < 0) {slideNumber = slides.length-1}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" active", "");
    }
  slides[slideNumber].style.display = "block"
  circles[slideNumber].className+= " active"
}

function currentSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[n-1].style.display = "block"
  circles[n-1].className+= " active"
}

// Filter Categories Part
var allItems = document.getElementsByClassName('item-container')
var carsItems = document.getElementsByClassName('item-container cars')
var animalsItems = document.getElementsByClassName('item-container animals')
var birdsItems = document.getElementsByClassName('item-container birds')
var fruitsItems = document.getElementsByClassName('item-container fruits')
var filterBtns = document.getElementsByClassName('filterbtns')

function filter(category){
  if(!(category==="all")){
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].style.display= "none"
    }
  }else{
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].style.display= "block"
    }
    return
  }
  if(category==="cars"){
    for (var i = 0; i < carsItems.length; i++) {
      carsItems[i].style.display= "inline-block"
    }
  }else if (category==="animals") {
    for (var i = 0; i < animalsItems.length; i++) {
      animalsItems[i].style.display= "inline-block"
    }
  }else if (category==="birds") {
    for (var i = 0; i < birdsItems.length; i++) {
      birdsItems[i].style.display= "inline-block"
    }
  }else if (category==="fruits") {
    for (var i = 0; i < fruitsItems.length; i++) {
      fruitsItems[i].style.display= "inline-block"
    }
  }

}

function changeColor(element){
    for (var j = 0; j < filterBtns.length; j++) {
      filterBtns[j].style.color= "black"
    }
    element.style.color= "#1b3ce9"
    for (var i = 0; i < filterBtns.length; i++) {
      filterBtns[i].style.textDecoration="none"
    }
    element.style.textDecoration="underline"
}


filterBtns[0].onclick = function(){
  filter("all")
  changeColor(filterBtns[0])
}
filterBtns[1].onclick = function(){
  filter("cars")
  changeColor(filterBtns[1])
}
filterBtns[2].onclick = function(){
  filter("animals")
  changeColor(filterBtns[2])
}
filterBtns[3].onclick = function(){
  filter("birds")
  changeColor(filterBtns[3])
}
filterBtns[4].onclick = function(){
  filter("fruits")
  changeColor(filterBtns[4])
}


//Top Button Part
var topbtn= document.getElementById('scrolltop')

topbtn.onclick= function (){
  window.scrollto(0,0)
}
