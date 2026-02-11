# Estampados y Bordados Cande - Sitio Web

Sitio web para Estampados y Bordados Cande, especialistas en estampado, bordado y DTF.

## 📁 Estructura del Proyecto

```
Garcia/
│
├── index.html              # Página principal única
│
├── css/
│   └── styles.css         # Todos los estilos
│
├── js/
│   ├── main.js           # Funcionalidad general
│   ├── carousel.js       # Carrusel de trabajos
│   └── modal.js          # Modal con detalle
│
├── data/
│   └── trabajos.json     # Datos de los trabajos
│
├── assets/
│   └── images/
│       └── trabajos/     # Imágenes de los trabajos
│
└── README.md
```

## 🚀 Características

- **Carrusel de trabajos**: Muestra los trabajos realizados
- **Modal de detalle**: Click en un trabajo para ver más información y galería
- **Sección de servicios**: Detalla todos los servicios ofrecidos
- **Información completa**: Plazos, presupuestos, contacto
- **Enlaces directos**: WhatsApp y email clickeables
- **Responsive**: Se adapta a todos los dispositivos
- **Bootstrap 5**: Diseño moderno y colorido
- **Sin backend**: Todo funciona desde el navegador

## 📋 Información del Negocio

**Estampados y Bordados Cande**
- Especialistas en: Estampado, Bordado y DTF
- Mínimo: 10 prendas
- Plazos: 5 a 10 días hábiles
- Presupuestos: Sin cargo y sin compromiso

**Contacto:**
- WhatsApp: 15 6100-3357
- Email: estampadoscande@hotmail.com

## 📝 Cómo Agregar Trabajos

Edita el archivo `data/trabajos.json` y agrega tus trabajos:

```json
{
    "id": "trabajo-nuevo",
    "titulo": "Título del Trabajo",
    "descripcionCorta": "Descripción breve",
    "descripcionCompleta": "Descripción detallada...",
    "imagen": "assets/images/trabajos/thumb.jpg",
    "galeria": [
        "assets/images/trabajos/foto1.jpg",
        "assets/images/trabajos/foto2.jpg"
    ],
    "cliente": "Nombre Cliente",
    "fecha": "2026",
    "tecnologias": ["Tech 1", "Tech 2"]
}
```

## 🖼️ Organización de Imágenes

Guarda tus imágenes en:
- `assets/images/trabajos/` - Para todas las fotos de trabajos

Nombres sugeridos:
- `trabajo1-thumb.jpg` - Miniatura para el carrusel
- `trabajo1-1.jpg`, `trabajo1-2.jpg` - Fotos de la galería

## 🌐 Cómo Ver el Sitio

**Opción 1**: Abrir `index.html` directamente en el navegador

**Opción 2**: Usar servidor local (recomendado):
```bash
python -m http.server 8000
```
Visita: http://localhost:8000

## 🎨 Personalización

- **Colores y estilos**: Edita `css/styles.css`
- **Contenido**: Modifica `index.html`
- **Trabajos**: Actualiza `data/trabajos.json`

## ✅ Completar

1. Agregar tu logo en el header
2. Completar la sección hero con tu información
3. Agregar tus trabajos en `trabajos.json`
4. Subir las imágenes a `assets/images/trabajos/`
5. Completar la sección de contacto
