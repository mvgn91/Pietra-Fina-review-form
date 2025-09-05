# Despliegue en Vercel - Pietra Fina Review Form

## 🚀 Configuración para Vercel

### Archivos de Configuración Incluidos:
- `vercel.json` - Configuración principal de Vercel
- `.vercelignore` - Archivos a ignorar en el despliegue
- `env.example` - Variables de entorno de ejemplo

### 📋 Pasos para Desplegar:

#### 1. Preparar el Repositorio
```bash
# Crear repositorio en GitHub
git init
git add .
git commit -m "Initial commit: Pietra Fina Review Form"
git branch -M main
git remote add origin https://github.com/tu-usuario/pietrafina-review-form.git
git push -u origin main
```

#### 2. Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Importa el repositorio `pietrafina-review-form`
5. Vercel detectará automáticamente que es un proyecto Vite

#### 3. Configuración del Proyecto
- **Framework Preset:** Vite
- **Root Directory:** `react-modules/review-form`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### 4. Variables de Entorno (Opcional)
En el dashboard de Vercel, ve a Settings > Environment Variables:
```
VITE_GOOGLE_PLACE_ID=ChIJebKgpDisKIQRyMQkUb7GbqM
VITE_APP_NAME=Pietra Fina Review Form
```

#### 5. Desplegar
- Haz clic en "Deploy"
- Vercel construirá y desplegará automáticamente
- Obtendrás una URL como: `https://pietrafina-review-form.vercel.app`

### 🔧 Configuración Avanzada

#### Dominio Personalizado
1. Ve a Settings > Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones de Vercel

#### Configuración de Headers
El archivo `vercel.json` incluye headers de seguridad:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

#### Builds Automáticos
- Cada push a `main` desplegará automáticamente
- Pull requests generan previews
- Rollbacks disponibles en el dashboard

### 📱 URLs de Acceso
- **Producción:** `https://tu-dominio.vercel.app`
- **Preview:** `https://pietrafina-review-form-git-branch.vercel.app`

### 🎯 Uso como Link de Invitación
Una vez desplegado, puedes:
1. Compartir la URL con clientes
2. Integrar en emails de seguimiento
3. Usar en WhatsApp Business
4. Agregar a tu sitio web

### 📊 Monitoreo
- Analytics incluido en Vercel
- Logs de build disponibles
- Métricas de rendimiento
- Alertas de errores

### 🔄 Actualizaciones
Para actualizar el formulario:
```bash
git add .
git commit -m "Update review form"
git push origin main
```
Vercel desplegará automáticamente la nueva versión.

### 🆘 Troubleshooting
- **Build Error:** Revisa los logs en Vercel dashboard
- **404 Error:** Verifica que `vercel.json` esté configurado correctamente
- **CORS Issues:** Los headers están configurados en `vercel.json`

### 📞 Soporte
- Documentación: [vercel.com/docs](https://vercel.com/docs)
- Comunidad: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
