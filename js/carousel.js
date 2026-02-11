// Carrusel de trabajos

class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.carousel-btn-prev');
        this.nextBtn = document.querySelector('.carousel-btn-next');
        this.currentPosition = 0;
        this.cardWidth = 374; // 350px + 24px gap
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Cargar trabajos
        this.loadTrabajos();
    }
    
    async loadTrabajos() {
        try {
            const response = await fetch('data/trabajos.json');
            const trabajos = await response.json();
            this.renderTrabajos(trabajos);
        } catch (error) {
            console.error('Error cargando trabajos:', error);
        }
    }
    
    renderTrabajos(trabajos) {
        this.track.innerHTML = '';
        
        trabajos.forEach(trabajo => {
            const card = this.createCard(trabajo);
            this.track.appendChild(card);
        });
    }
    
    createCard(trabajo) {
        const card = document.createElement('div');
        card.className = 'trabajo-card shadow-sm';
        card.dataset.id = trabajo.id;
        
        // Icono según la técnica
        let icono = '';
        if (trabajo.id === 'dtf') {
            icono = '<i class="bi bi-printer-fill display-1 text-lavanda"></i>';
        } else if (trabajo.id === 'bordado') {
            icono = '<i class="bi bi-scissors display-1 text-lavanda"></i>';
        } else if (trabajo.id === 'estampado') {
            icono = '<i class="bi bi-brush-fill display-1 text-lavanda"></i>';
        }
        
        card.innerHTML = `
            <div class="trabajo-card-icon text-center py-5 bg-light">
                ${icono}
            </div>
            <div class="trabajo-card-info">
                <h3 class="h4 mb-2 text-center fw-bold">${trabajo.titulo}</h3>
                <p class="text-muted mb-0 text-center">${trabajo.descripcionCorta}</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.trabajoModal.open(trabajo.id);
        });
        
        return card;
    }
    
    next() {
        const maxScroll = this.track.scrollWidth - this.track.parentElement.offsetWidth;
        this.currentPosition = Math.min(this.currentPosition + this.cardWidth, maxScroll);
        this.updatePosition();
    }
    
    prev() {
        this.currentPosition = Math.max(this.currentPosition - this.cardWidth, 0);
        this.updatePosition();
    }
    
    updatePosition() {
        this.track.style.transform = `translateX(-${this.currentPosition}px)`;
    }
}

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.carousel = new Carousel();
});
