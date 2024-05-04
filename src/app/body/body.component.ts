import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  slideIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);

    // Obtener referencia al botón
    const nextButton = document.querySelector('.next') as HTMLButtonElement;

    // Asociar evento click al botón
    nextButton.addEventListener('click', () => {
      this.plusSlides(1);
    });
  }
  
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  
  showSlides(n: number) {
    let i: number;
    const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  
    if (n > slides.length) { this.slideIndex = 1; }    
    if (n < 1) { this.slideIndex = slides.length; }
  
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";  
    }
  
    (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";  
  }

}
