import ReviewForm from '../ReviewForm'

function App() {
  const handleReviewSubmit = (data: any) => {
    console.log('Evaluación enviada:', data);
    // Aquí puedes agregar lógica para enviar la evaluación a tu backend
  };

  return (
    <div className="App">
      <ReviewForm 
        googlePlaceId="ChIJebKgpDisKIQRyMQkUb7GbqM"
        onReviewSubmit={handleReviewSubmit}
      />
    </div>
  )
}

export default App
