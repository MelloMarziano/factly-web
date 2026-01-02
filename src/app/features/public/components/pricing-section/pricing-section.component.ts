import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent {
  plans = [
    {
      name: "App Factly",
      price: "800",
      period: "/mes",
      description: "Ideal para negocios que ya tienen su equipo",
      icon: 'monitor',
      features: [
        "Punto de Venta completo",
        "Gestión de productos e inventario",
        "Emisión de e-NCF automática",
        "Reportes y estadísticas",
        "Multi-usuario con roles",
        "Soporte técnico 24/7",
        "Actualizaciones incluidas"
      ],
      popular: false,
      cta: "Comenzar Ahora"
    },
    {
      name: "App + Handheld",
      price: "9,000",
      period: " único",
      description: "Incluye dispositivo 2Connect V17 portátil",
      icon: 'smartphone',
      features: [
        "Todo lo del plan App Factly",
        "Handheld 2Connect V17",
        "Impresora térmica integrada",
        "Batería de larga duración",
        "Conectividad WiFi + 4G",
        "Configuración incluida",
        "Garantía del dispositivo",
        "Primer mes de servicio gratis"
      ],
      popular: true,
      cta: "Obtener Paquete"
    }
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
