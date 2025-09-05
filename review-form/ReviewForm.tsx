import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, ArrowLeft } from 'lucide-react';

interface ReviewData {
  name: string;
  calidad: number;
  puntualidad: number;
  atencion: number;
}

interface ReviewFormProps {
  googlePlaceId?: string;
  onReviewSubmit?: (data: ReviewData) => void;
  className?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ 
  googlePlaceId = 'PLACE_ID', 
  onReviewSubmit,
  className = '' 
}) => {
  const [formData, setFormData] = useState<ReviewData>({
    name: '',
    calidad: 0,
    puntualidad: 0,
    atencion: 0
  });
  const [hoveredRatings, setHoveredRatings] = useState({
    calidad: 0,
    puntualidad: 0,
    atencion: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (aspect: keyof Omit<ReviewData, 'name'>, rating: number) => {
    setFormData(prev => ({
      ...prev,
      [aspect]: rating
    }));
  };

  const handleRatingHover = (aspect: keyof Omit<ReviewData, 'name'>, rating: number) => {
    setHoveredRatings(prev => ({
      ...prev,
      [aspect]: rating
    }));
  };

  const handleRatingLeave = (aspect: keyof Omit<ReviewData, 'name'>) => {
    setHoveredRatings(prev => ({
      ...prev,
      [aspect]: 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.calidad === 0 || formData.puntualidad === 0 || formData.atencion === 0) {
      alert('Por favor, califica todos los aspectos');
      return;
    }

    // Simular envío de evaluación
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onReviewSubmit) {
      onReviewSubmit(formData);
    }
    
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      calidad: 0,
      puntualidad: 0,
      atencion: 0
    });
    setHoveredRatings({
      calidad: 0,
      puntualidad: 0,
      atencion: 0
    });
    setIsSubmitted(false);
  };

  const getGoogleReviewsUrl = () => {
    return `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 flex items-center justify-center p-4 ${className}`}>
      {/* Fondo decorativo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-pietrafina-primary/3 via-transparent to-pietrafina-accent/5 pointer-events-none" />
      
      <motion.div 
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-lg relative overflow-hidden border border-white/20"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Elementos decorativos elegantes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pietrafina-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pietrafina-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-pietrafina-primary/5 to-pietrafina-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header elegante */}
              <div className="text-center mb-8 relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg border-2 border-pietrafina-primary/10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img 
                    src="/logo.png" 
                    alt="Pietra Fina Logo" 
                    className="w-10 h-10"
                  />
                </motion.div>
                
                <motion.h1 
                  className="font-playfair text-2xl sm:text-3xl font-bold text-pietrafina-text-primary mb-3 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  ¡Gracias por Confiar en Nosotros!
                </motion.h1>
                
                <motion.p 
                  className="font-poppins text-pietrafina-text-secondary text-sm sm:text-base mb-2 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Tu experiencia es muy valiosa para nosotros
                </motion.p>
                
                <motion.p 
                  className="font-poppins text-pietrafina-text-muted text-xs sm:text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Ayúdanos a seguir creciendo compartiendo tu opinión en Google
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Campo de nombre elegante */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label htmlFor="name" className="block font-poppins text-sm font-semibold text-pietrafina-text-primary mb-3">
                    Tu Nombre
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl font-poppins text-sm text-pietrafina-text-primary focus:border-pietrafina-primary focus:ring-4 focus:ring-pietrafina-primary/10 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
                      placeholder="Ingresa tu nombre completo"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pietrafina-primary/5 to-pietrafina-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Evaluaciones elegantes */}
                <div className="space-y-6">
                  {/* Calidad de Producto Final */}
                  <motion.div
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <label className="block font-poppins text-sm font-semibold text-pietrafina-text-primary mb-3">
                      Calidad del Producto Final
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                          size={32}
                                                  className={`cursor-pointer transition-all duration-300 ${
                          rating <= (hoveredRatings.calidad || formData.calidad)
                            ? 'text-pietrafina-primary fill-pietrafina-primary drop-shadow-sm'
                            : 'text-gray-300 hover:text-pietrafina-accent'
                        } hover:scale-110 hover:drop-shadow-md`}
                          onClick={() => handleRatingClick('calidad', rating)}
                          onMouseEnter={() => handleRatingHover('calidad', rating)}
                          onMouseLeave={() => handleRatingLeave('calidad')}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Puntualidad de Entrega */}
                  <motion.div
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <label className="block font-poppins text-sm font-semibold text-pietrafina-text-primary mb-3">
                      Puntualidad de Entrega
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                          size={32}
                                                  className={`cursor-pointer transition-all duration-300 ${
                          rating <= (hoveredRatings.puntualidad || formData.puntualidad)
                            ? 'text-pietrafina-primary fill-pietrafina-primary drop-shadow-sm'
                            : 'text-gray-300 hover:text-pietrafina-accent'
                        } hover:scale-110 hover:drop-shadow-md`}
                          onClick={() => handleRatingClick('puntualidad', rating)}
                          onMouseEnter={() => handleRatingHover('puntualidad', rating)}
                          onMouseLeave={() => handleRatingLeave('puntualidad')}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Atención y Servicio */}
                  <motion.div
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <label className="block font-poppins text-sm font-semibold text-pietrafina-text-primary mb-3">
                      Atención y Servicio
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                          size={32}
                                                  className={`cursor-pointer transition-all duration-300 ${
                          rating <= (hoveredRatings.atencion || formData.atencion)
                            ? 'text-pietrafina-primary fill-pietrafina-primary drop-shadow-sm'
                            : 'text-gray-300 hover:text-pietrafina-accent'
                        } hover:scale-110 hover:drop-shadow-md`}
                          onClick={() => handleRatingClick('atencion', rating)}
                          onMouseEnter={() => handleRatingHover('atencion', rating)}
                          onMouseLeave={() => handleRatingLeave('atencion')}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Botón elegante de Google Reviews */}
                <motion.a
                  href={getGoogleReviewsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pietrafina-primary via-pietrafina-primary-light to-pietrafina-primary text-white py-4 px-6 rounded-2xl font-poppins font-bold text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group flex items-center justify-center gap-3 border-2 border-pietrafina-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pietrafina-primary/50 to-pietrafina-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="relative z-10">Dejar Reseña en Google</span>
                </motion.a>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thank-you"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center relative z-10"
            >
              {/* Icono de éxito elegante */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-lg">
                  <CheckCircle size={40} className="text-white" />
                </div>
              </motion.div>

              <motion.h2 
                className="font-playfair text-2xl sm:text-3xl font-bold text-pietrafina-text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                ¡Perfecto!
              </motion.h2>

              <motion.p 
                className="font-poppins text-pietrafina-text-secondary mb-3 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Ahora serás redirigido a Google para completar tu reseña.
              </motion.p>
              
              <motion.p 
                className="font-poppins text-pietrafina-text-muted mb-8 text-xs sm:text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Tu opinión nos ayuda a seguir creciendo y mejorando nuestros servicios.
              </motion.p>

              <motion.a
                href={getGoogleReviewsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pietrafina-primary via-pietrafina-primary-light to-pietrafina-primary text-white px-8 py-4 rounded-2xl font-poppins font-bold text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 mb-6 relative overflow-hidden group border-2 border-pietrafina-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-pietrafina-primary/50 to-pietrafina-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="relative z-10">Continuar a Google Reviews</span>
              </motion.a>

              <motion.button
                onClick={resetForm}
                className="inline-flex items-center gap-2 bg-transparent text-pietrafina-text-muted border-2 border-gray-200 px-6 py-2 rounded-lg font-poppins font-medium text-sm transition-all duration-300 hover:bg-pietrafina-bg-tertiary hover:text-pietrafina-text-primary hover:border-pietrafina-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={16} />
                Volver al formulario
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReviewForm;
