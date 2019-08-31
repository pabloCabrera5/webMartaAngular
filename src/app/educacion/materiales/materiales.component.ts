import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  imagesSources = [
    '../../../assets/materiales/foto1.PNG',
    '../../../assets/materiales/foto2.PNG',
    '../../../assets/materiales/foto3.PNG',
    '../../../assets/materiales/foto4.PNG',
    '../../../assets/materiales/foto5.PNG',
    '../../../assets/materiales/foto6.PNG',
    '../../../assets/materiales/foto7.PNG',
    '../../../assets/materiales/foto8.PNG',
    '../../../assets/materiales/foto9.PNG',
    '../../../assets/materiales/foto10.PNG',
  ]





  //  THIS WAS A TEST FOR AN IMAGE LIGHTBOX 
  /*
  slideIndex = 1;
  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex);

  showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }*/

}
