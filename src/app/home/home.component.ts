import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeSlideIndex = 0;
  totalSlides = 4;

  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    }
  }

  nextSlide() {
    if (this.activeSlideIndex < this.totalSlides - 1) {
      this.activeSlideIndex++;
    }
  }
}