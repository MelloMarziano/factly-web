import { Component } from '@angular/core';

@Component({
  selector: 'app-app-showcase-section',
  templateUrl: './app-showcase-section.component.html',
  styleUrls: ['./app-showcase-section.component.scss']
})
export class AppShowcaseSectionComponent {
  screenshots = [
    { 
      src: 'assets/images/preview/app-preview-1.png', 
      alt: 'Punto de Venta Móvil', 
      title: 'Punto de Venta Ágil',
      description: 'Factura desde cualquier lugar con nuestra interfaz optimizada.'
    },
    { 
      src: 'assets/images/preview/app-preview-2.png', 
      alt: 'Menú Intuitivo', 
      title: 'Navegación Simple',
      description: 'Acceso rápido a todas las funciones de tu negocio.'
    },
    { 
      src: 'assets/images/preview/app-preview-3.png', 
      alt: 'Catálogo de Productos', 
      title: 'Catálogo Visual',
      description: 'Organiza tus productos con imágenes y categorías claras.'
    },
    { 
      src: 'assets/images/preview/app-preview-4.png', 
      alt: 'Gestión Fiscal', 
      title: 'Control Fiscal',
      description: 'Gestiona tus secuencias de comprobantes fiscales fácilmente.'
    }
  ];
}
