import React, { useState, useEffect } from 'react';
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
  const [showSplash, setShowSplash] = useState(true);

  // Controlar la duración del splash screen - Minimalista y súper rápido
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800); // 1.8 segundos de splash screen - súper rápido

    return () => clearTimeout(timer);
  }, []);

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
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 flex flex-col relative ${className}`} 
         style={{ padding: 'min(20px, 5vw)' }}>
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none z-0" />
      
      <div className="flex-1 flex items-center justify-center relative z-10">
      <AnimatePresence mode="wait">
        {showSplash ? (
          // Splash Screen Minimalista - Solo Logo
          <motion.div
            key="splash"
            className="flex items-center justify-center min-h-screen w-full relative z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Fondo sutil */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            />
            
            {/* Logo con animación elegante - Sin círculo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2, 
                duration: 1.0, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              <div className="relative group">
                {/* Sombra suave */}
                <motion.div
                  className="absolute inset-0 bg-gray-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Logo principal - Sin fondo circular */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/logo.png" 
                    alt="Pietra Fina Logo" 
                    className="w-24 h-24 sm:w-28 sm:h-28"
                  />
                </motion.div>
                
                {/* Efecto de brillo sutil */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Formulario principal
      <motion.div 
            key="form"
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-full relative overflow-hidden border border-white/20 z-20"
            style={{ 
              padding: 'min(32px, 8vw)',
              maxWidth: 'min(500px, 90vw)',
              borderRadius: 'min(20px, 5vw)'
            }}
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
                  key="form-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
                    {/* Header elegante */}
                    <div className="text-center mb-8 relative z-10">
                      {/* Logo de la empresa */}
                      <motion.div
                        className="mb-6"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                      >
                        <img 
                          src="/logo.png" 
                          alt="Pietra Fina Logo" 
                          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
                        />
                      </motion.div>
                      
                      <motion.h1 
                        className="font-playfair font-bold text-pietrafina-text-primary mb-3 leading-tight"
                        style={{ fontSize: 'min(4.5svh, 3.5em)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        ¡Gracias por Elegirnos!
                      </motion.h1>
                
                      <motion.p 
                        className="font-poppins text-pietrafina-text-secondary mb-2 leading-relaxed"
                        style={{ fontSize: 'min(3.2svh, 1.2em)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        Gracias por confiar en Pietra Fina para trabajar en tu proyecto
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
                      <label htmlFor="name" className="block font-poppins font-semibold text-pietrafina-text-primary mb-3"
                             style={{ fontSize: 'min(2.8svh, 0.9em)' }}>
                    Tu Nombre
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                          className="w-full bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 font-poppins text-pietrafina-text-primary focus:border-pietrafina-primary focus:ring-4 focus:ring-pietrafina-primary/10 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
                          style={{ 
                            padding: 'min(16px, 4vw)',
                            borderRadius: 'min(12px, 3vw)',
                            fontSize: 'min(3.2svh, 1.2em)'
                          }}
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
                        className="bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                        style={{ 
                          padding: 'min(16px, 4vw)',
                          borderRadius: 'min(12px, 3vw)'
                        }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                        <label className="block font-poppins font-semibold text-pietrafina-text-primary mb-3 text-center"
                               style={{ fontSize: 'min(2.8svh, 0.9em)' }}>
                      Calidad del Producto Final
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                              size={28}
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
                        className="bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                        style={{ 
                          padding: 'min(16px, 4vw)',
                          borderRadius: 'min(12px, 3vw)'
                        }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                        <label className="block font-poppins font-semibold text-pietrafina-text-primary mb-3 text-center"
                               style={{ fontSize: 'min(2.8svh, 0.9em)' }}>
                      Puntualidad de Entrega
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                              size={28}
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
                        className="bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                        style={{ 
                          padding: 'min(16px, 4vw)',
                          borderRadius: 'min(12px, 3vw)'
                        }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                        <label className="block font-poppins font-semibold text-pietrafina-text-primary mb-3 text-center"
                               style={{ fontSize: 'min(2.8svh, 0.9em)' }}>
                      Atención y Servicio
                    </label>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                          key={rating}
                              size={28}
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

                    {/* Texto de invitación llamativo con efecto respiración */}
                    <motion.div
                      className="text-center mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.95, duration: 0.6 }}
                    >
                      <motion.p 
                        className="font-poppins text-pietrafina-text-primary font-bold leading-tight"
                        style={{ fontSize: 'min(2.6svh, 1.2em)' }}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        Si te gustó la experiencia y servicio con nuestra empresa, ¡dejanos 5 estrellas en Google!
                      </motion.p>
                    </motion.div>

                      {/* Botón elegante de Google Reviews con efecto de llenado */}
                <motion.a
                  href={getGoogleReviewsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-pietrafina-primary via-pietrafina-primary-light to-pietrafina-primary text-white font-poppins font-bold uppercase tracking-wide transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group flex items-center justify-center gap-4 border-2 border-pietrafina-primary/20"
                      style={{ 
                          padding: 'min(20px, 5vw) min(32px, 8vw)',
                          borderRadius: 'min(20px, 5vw)',
                          fontSize: 'min(3.2svh, 1.1em)'
                      }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {/* Efecto de llenado de tinta roja */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ 
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.4, ease: "easeOut" }
                          }}
                          style={{ 
                            borderRadius: 'inherit',
                            transformOrigin: 'center'
                          }}
                        />
                        
                        {/* Efecto de brillo deslizante */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        
                        {/* Efecto de ondas */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-pietrafina-primary/30 to-pietrafina-accent/30 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                      <span className="relative z-10">Dejar 5 Estrellas en Google</span>
                </motion.a>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thank-you"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center relative z-20"
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
                    Ahora serás redirigido a Google para dejarnos 5 estrellas.
              </motion.p>
              
              <motion.p 
                className="font-poppins text-pietrafina-text-muted mb-8 text-xs sm:text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                    Tu calificación nos ayuda a seguir creciendo y mejorando nuestros servicios.
              </motion.p>

              <motion.a
                href={getGoogleReviewsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-gradient-to-r from-pietrafina-primary via-pietrafina-primary-light to-pietrafina-primary text-white px-10 py-5 rounded-2xl font-poppins font-bold text-base sm:text-lg uppercase tracking-wide transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 mb-6 relative overflow-hidden group border-2 border-pietrafina-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                      {/* Efecto de llenado de tinta roja */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ 
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        style={{ 
                          borderRadius: 'inherit',
                          transformOrigin: 'center'
                        }}
                      />
                      
                      {/* Efecto de brillo deslizante */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      {/* Efecto de ondas */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-pietrafina-primary/30 to-pietrafina-accent/30 opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                    <span className="relative z-10">Continuar a Google para Dejar 5 Estrellas</span>
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
        )}
      </AnimatePresence>
      </div>
      
      {/* Footer centrado en el fondo del sitio - solo visible después del splash */}
      {!showSplash && (
        <motion.div
          className="w-full flex justify-center px-4 py-4 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-md border border-white/40 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 text-center relative overflow-hidden group">
            {/* Efecto de pintura roja que se extiende */}
            <motion.div 
              className="absolute inset-0 bg-red-500 rounded-full"
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              whileHover={{ 
                scale: 1,
                opacity: 1,
                transition: { 
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              style={{ 
                borderRadius: 'inherit',
                transformOrigin: 'center'
              }}
            />
            
            {/* Efecto de brillo deslizante */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
            
            <a
              href="https://mvgn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pietrafina-text-muted group-hover:text-white transition-all duration-500 text-sm sm:text-base font-poppins font-medium flex items-center justify-center gap-2 sm:gap-3 relative z-10"
            >
              <motion.span 
                className="group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
              >
                by
              </motion.span>
              <motion.span 
                className="font-bold bg-gradient-to-r from-pietrafina-primary to-pietrafina-accent bg-clip-text text-transparent group-hover:bg-none group-hover:text-white group-hover:bg-clip-border transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                MVGN Labs
              </motion.span>
              <motion.div
                className="w-1.5 h-1.5 bg-pietrafina-primary group-hover:bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2 }}
              />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewForm;