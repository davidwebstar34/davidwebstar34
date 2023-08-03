import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeSlideIndex = 0;
  totalSlides = 4;

  texts = [
    'Have you ever used a service and had an <strong style="color:lime;">idea</strong> on how it could be better?',
    'That <strong style="color:lime;">idea</strong> is an element for disrupting <strong style="color:lime;">customer experience</strong> for both enterprise and startups',
    'You will need someone you <strong style="color:lime;">trust</strong> to help you achieve your <strong style="color:lime;"> goals</strong>',
    'Please <strong style="color:lime;">reach out</strong> and let me help you'
  ];

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