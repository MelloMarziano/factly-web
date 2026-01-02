import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
})
export class FaqSectionComponent {
  faqs = [
    {
      question: '¿Qué necesito para empezar a facturar?',
      answer:
        'Solo necesitas tu RNC activo y un Certificado Digital para Procesos Tributarios (podemos ayudarte a obtenerlo). Una vez los tengas, configuras tu cuenta en minutos y estás listo.',
    },
    {
      question: '¿El sistema funciona sin internet?',
      answer: 'Factly es una app móvil multiplataforma para Android, iOS o cualquier tablet. Aunque necesitas internet para enviar las facturas a la DGII en tiempo real, puedes acceder a la app desde cualquier dispositivo.'
    },
    {
      question: '¿Cumple con las normativas de la DGII?',
      answer:
        '¡Sí, al 100%! Factly está diseñado específicamente siguiendo la Norma General 06-2018 y las actualizaciones recientes de Facturación Electrónica de la DGII.',
    },
    {
      question: '¿Puedo cambiar de plan más adelante?',
      answer:
        'Por supuesto. Puedes actualizar tu plan en cualquier momento desde tu panel de control según crezca tu negocio. El cambio es inmediato.',
    },
    {
      question: '¿Mis datos están seguros?',
      answer:
        'La seguridad es nuestra prioridad. Utilizamos encriptación de grado bancario para todos tus datos y realizamos copias de seguridad automáticas diariamente.',
    },
  ];
}
