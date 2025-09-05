@echo off
echo 🚀 Configurando repositorio de GitHub para Pietra Fina Review Form...

REM Verificar si estamos en la carpeta correcta
if not exist "package.json" (
    echo ❌ Error: No se encontró package.json. Asegúrate de estar en la carpeta del proyecto.
    pause
    exit /b 1
)

REM Inicializar Git si no existe
if not exist ".git" (
    echo 📁 Inicializando repositorio Git...
    git init
    git branch -M main
)

REM Agregar archivos al staging
echo 📝 Agregando archivos al staging...
git add .

REM Commit inicial
echo 💾 Creando commit inicial...
git commit -m "Initial commit: Pietra Fina Review Form ready for deployment

✨ Features:
- React + TypeScript component
- Tailwind CSS styling
- Framer Motion animations
- Google Reviews integration
- Mobile responsive design
- Vercel deployment ready

🎯 Purpose: Client review form for Pietra Fina
📍 Google Place ID: ChIJebKgpDisKIQRyMQkUb7GbqM"

echo ✅ Repositorio local configurado correctamente!
echo.
echo 📋 Próximos pasos:
echo 1. Crear repositorio en GitHub: https://github.com/new
echo 2. Nombre sugerido: pietrafina-review-form
echo 3. Descripción: Formulario de reseñas para Pietra Fina
echo 4. Conectar repositorio local:
echo    git remote add origin https://github.com/TU-USUARIO/pietrafina-review-form.git
echo    git push -u origin main
echo.
echo 🚀 Después de subir a GitHub:
echo 1. Ve a https://vercel.com
echo 2. Importa el repositorio
echo 3. Vercel detectará automáticamente la configuración
echo 4. ¡Despliega en segundos!
echo.
echo 🎉 ¡El formulario estará listo para generar más reseñas!
pause
