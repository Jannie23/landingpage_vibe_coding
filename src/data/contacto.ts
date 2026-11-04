export type WhatsAppMessageType = 'general' | 'ingreso' | 'regularizacion';

export const whatsappMessages: Record<WhatsAppMessageType, string> = {
  general:
    '¡Hola! Quisiera solicitar informes sobre sus cursos de ingreso (preparatoria y universidad) y las clases de regularización por materia. ¿Me podrías compartir detalles?',
  ingreso:
    '¡Hola! Me interesa recibir información sobre los cursos de preparación para el examen de ingreso a preparatoria y universidad. ¿Me podrías dar informes sobre el plan de estudio y costos?',
  regularizacion:
    '¡Hola! Quisiera solicitar informes sobre las clases de regularización personalizada por materia. ¿Me podrían compartir la disponibilidad y dinámica de las sesiones?',
};

export function crearWhatsappUrl(tipo: WhatsAppMessageType = 'general'): string {
  return `https://wa.me/525584915638?text=${encodeURIComponent(whatsappMessages[tipo])}`;
}

export const correoContacto = 'cgarciah1607@gmail';
