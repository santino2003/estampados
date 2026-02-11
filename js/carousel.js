// Carrusel de trabajos

class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.carousel-btn-prev');
        this.nextBtn = document.querySelector('.carousel-btn-next');
        this.currentIndex = 0;
        
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
        this.totalCards = trabajos.length;
        
        trabajos.forEach(trabajo => {
            const card = this.createCard(trabajo);
            this.track.appendChild(card);
        });
        
        this.updatePosition();
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
        if (this.currentIndex < this.totalCards - 1) {
            this.currentIndex++;
            this.updatePosition();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updatePosition();
        }
    }
    
    updatePosition() {
        const cards = this.track.querySelectorAll('.trabajo-card');
        if (cards.length === 0) return;
        
        const containerWidth = this.track.parentElement.offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = 32; // 2rem gap
        
        // En desktop (más de 992px) no mover el carrusel
        if (window.innerWidth > 992) {
            this.track.style.transform = 'translateX(0)';
            return;
        }
        
        // En móvil/tablet, calcular posición para centrar la tarjeta actual
        // Solo aplicar offset si hay espacio (containerWidth > cardWidth)
        let offset = 0;
        if (containerWidth > cardWidth) {
            offset = (containerWidth - cardWidth) / 2;
        }
        
        const position = -(this.currentIndex * (cardWidth + gap)) + offset;
        
        this.track.style.transform = `translateX(${position}px)`;
    }
}

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.carousel = new Carousel();
});
