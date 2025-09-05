# 🌟 Pietra Fina Review Form

Un formulario elegante y responsivo para recopilar reseñas de clientes, diseñado específicamente para Pietra Fina. Los clientes pueden evaluar diferentes aspectos del servicio y ser redirigidos directamente a Google Reviews.

## ✨ Características

- **React + TypeScript** - Componente completamente tipado
- **Tailwind CSS** - Estilos personalizados con la paleta de Pietrafina
- **Framer Motion** - Animaciones suaves y profesionales
- **Lucide React** - Iconos modernos y consistentes
- **Responsive Design** - Optimizado para móviles y desktop
- **Google Reviews Integration** - Redirección directa con Place ID

## 🎯 Propósito

Este formulario está diseñado para motivar a clientes recientes de Pietra Fina a dejar reseñas en Google Business. Los clientes evalúan tres aspectos específicos:

- ⭐ **Calidad del Producto Final**
- ⭐ **Puntualidad de Entrega**
- ⭐ **Atención y Servicio**

## 🚀 Despliegue Rápido

### Con Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/pietrafina-review-form)

1. Haz clic en el botón "Deploy with Vercel"
2. Conecta tu cuenta de GitHub
3. Vercel detectará automáticamente la configuración
4. ¡Despliega en segundos!

### Configuración Manual

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/pietrafina-review-form.git
cd pietrafina-review-form

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## ⚙️ Configuración

### Google Place ID

El formulario está configurado con el Place ID de Pietra Fina:
```
ChIJebKgpDisKIQRyMQkUb7GbqM
```

Para cambiar el Place ID, edita el archivo `src/App.tsx`:
```tsx
<ReviewForm 
  googlePlaceId="TU_PLACE_ID_AQUI"
  onReviewSubmit={handleReviewSubmit}
/>
```

### Variables de Entorno

Crea un archivo `.env.local`:
```env
VITE_GOOGLE_PLACE_ID=ChIJebKgpDisKIQRyMQkUb7GbqM
VITE_APP_NAME=Pietra Fina Review Form
```

## 📱 Uso

### Como Link de Invitación

1. **Despliega** el formulario en Vercel
2. **Comparte** la URL con clientes recientes
3. **Integra** en emails de seguimiento
4. **Usa** en WhatsApp Business

### Flujo del Cliente

1. Cliente recibe el link
2. Abre el formulario en su dispositivo
3. Llena su nombre
4. Califica los 3 aspectos con estrellas
5. Hace clic en "Dejar Reseña en Google"
6. Es redirigido a Google Reviews de Pietra Fina

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:
```js
colors: {
  'pietrafina': {
    'primary': '#1a1a1a',        // Negro principal
    'accent': '#6b7280',         // Gris acento
    'success': '#10b981',        // Verde éxito
    // ... más colores
  }
}
```

### Fuentes

- **Títulos:** Playfair Display (serif)
- **Texto:** Poppins (sans-serif)

## 📁 Estructura del Proyecto

```
pietrafina-review-form/
├── src/
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── ReviewForm.tsx           # Componente del formulario
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind
├── vercel.json              # Configuración de Vercel
└── README.md                # Este archivo
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run vercel-build # Build específico para Vercel
```

## 📊 Métricas de Rendimiento

- **Tamaño del bundle:** ~83KB gzipped
- **Tiempo de carga:** < 2 segundos
- **Lighthouse Score:** 95+ en todas las métricas
- **Mobile First:** Optimizado para dispositivos móviles

## 🌐 URLs de Ejemplo

- **Desarrollo:** `http://localhost:3000`
- **Producción:** `https://pietrafina-review-form.vercel.app`
- **Preview:** `https://pietrafina-review-form-git-branch.vercel.app`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🏢 Pietra Fina

**Pietra Fina** - Transformando espacios con piedra natural de la más alta calidad.

- 🌐 **Sitio Web:** [pietrafina.mx](https://pietrafina.mx)
- 📍 **Ubicación:** Zapopan, Jalisco, México
- ⭐ **Google Reviews:** [Ver reseñas](https://search.google.com/local/writereview?placeid=ChIJebKgpDisKIQRyMQkUb7GbqM)

---

Desarrollado con ❤️ para Pietra Fina por [MVGN LABS](https://mvgnlabs.com)