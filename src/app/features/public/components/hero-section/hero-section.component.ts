import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  features = [
    { text: 'Punto de Venta', icon: 'shopping-cart' },
    { text: 'Productos', icon: 'package' },
    { text: 'e-NCF', icon: 'file-text' },
    { text: 'Reportes', icon: 'bar-chart-3' },
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
