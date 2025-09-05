// Ejemplo de uso del componente ReviewForm
import React from 'react';
import ReviewForm from './ReviewForm';

// Ejemplo básico
export function BasicExample() {
  return (
    <ReviewForm 
      googlePlaceId="ChIJebKgpDisKIQRyMQkUb7GbqM"
    />
  );
}

// Ejemplo con callback personalizado
export function AdvancedExample() {
  const handleReviewSubmit = (reviewData: {
    name: string;
    calidad: number;
    puntualidad: number;
    atencion: number;
  }) => {
    console.log('Evaluación recibida:', reviewData);
    
    // Aquí puedes enviar la evaluación a tu backend
    // fetch('/api/evaluations', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(reviewData)
    // });
  };

  return (
    <div className="min-h-screen">
          <ReviewForm 
      googlePlaceId="ChIJebKgpDisKIQRyMQkUb7GbqM"
      onReviewSubmit={handleReviewSubmit}
      className="custom-styles"
    />
    </div>
  );
}

// Ejemplo para usar como link de invitación
export function InvitationLinkExample() {
  return (
    <div className="invitation-container">
      <h1>¡Gracias por elegir Pietra Fina!</h1>
      <p>Tu opinión es muy importante para nosotros</p>
      
      <ReviewForm 
        googlePlaceId="ChIJebKgpDisKIQRyMQkUb7GbqM"
        onReviewSubmit={(data) => {
          // Opcional: enviar datos a tu sistema
          console.log('Nueva evaluación:', data);
        }}
      />
    </div>
  );
}
