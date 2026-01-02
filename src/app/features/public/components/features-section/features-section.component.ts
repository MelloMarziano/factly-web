import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'shopping-cart',
      title: "Punto de Venta",
      description: "Sistema POS intuitivo para ventas rápidas y eficientes con soporte para múltiples métodos de pago."
    },
    {
      icon: 'package',
      title: "Productos",
      description: "Gestiona tu inventario completo con control de stock, precios y categorías."
    },
    {
      icon: 'folder-open',
      title: "Categorías",
      description: "Organiza tus productos de forma inteligente para un acceso rápido y eficiente."
    },
    {
      icon: 'file-text',
      title: "e-NCF",
      description: "Emisión de comprobantes fiscales electrónicos válidos ante la DGII automáticamente."
    },
    {
      icon: 'bar-chart-3',
      title: "Reportes",
      description: "Análisis detallados de ventas, inventario y cumplimiento fiscal en tiempo real."
    },
    {
      icon: 'settings',
      title: "Configuración",
      description: "Personaliza tu empresa con RNC, certificado digital, logo y datos fiscales."
    },
    {
      icon: 'user',
      title: "Perfil",
      description: "Administra la información de tu cuenta y preferencias de usuario."
    },
    {
      icon: 'users',
      title: "Usuarios",
      description: "Control de acceso multi-usuario con roles y permisos personalizados."
    }
  ];
}
