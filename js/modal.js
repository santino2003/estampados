// Modal para mostrar detalle del trabajo

class TrabajoModal {
    constructor() {
        this.modalElement = document.getElementById('modal-trabajo');
        this.modal = new bootstrap.Modal(this.modalElement);
        this.modalTitulo = document.getElementById('modal-titulo');
        this.detalle = document.getElementById('trabajo-detalle');
        this.trabajos = [];
        
        this.init();
    }
    
    init() {
        if (!this.modalElement) return;
        
        // Cargar trabajos
        this.loadTrabajos();
    }
    
    async loadTrabajos() {
        try {
            const response = await fetch('data/trabajos.json');
            this.trabajos = await response.json();
        } catch (error) {
            console.error('Error cargando trabajos:', error);
        }
    }
    
    open(trabajoId) {
        const trabajo = this.trabajos.find(t => t.id === trabajoId);
        if (!trabajo) return;
        
        this.modalTitulo.textContent = trabajo.titulo;
        this.renderDetalle(trabajo);
        this.modal.show();
    }
    
    close() {
        this.modal.hide();
    }
    
    renderDetalle(trabajo) {
        const galeria = trabajo.galeria.map(img => 
            `<img src="${img}" alt="${trabajo.titulo}" class="img-fluid">`
        ).join('');
        
        this.detalle.innerHTML = `
            <p class="lead mb-4">${trabajo.descripcionCompleta}</p>
            
            <h5 class="mb-3"><i class="bi bi-images me-2"></i>Galería de Trabajos</h5>
            <div class="trabajo-galeria">
                ${galeria}
            </div>
        `;
        
        // Agregar funcionalidad para ver imágenes en grande
        this.setupImageViewer();
    }
    
    setupImageViewer() {
        const images = this.detalle.querySelectorAll('.trabajo-galeria img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                // Aquí puedes agregar un visor de imágenes más elaborado
                window.open(img.src, '_blank');
            });
        });
    }
}

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.trabajoModal = new TrabajoModal();
});
