class ProductTourComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.processData();
    }

    processData() {
        const data = JSON.parse(this.getAttribute('data-config'));
        this.renderProductTour(data);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .product-tour-container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    margin: 10px 0;
                }
                .banner, .footer {
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .accordion-container {
                    width: 100%;
                    overflow-y: auto;
                }
                .accordion {
                    background-color: #fff;
                    cursor: pointer;
                    padding: 18px;
                    border: none;
                    width: 100%;
                    border-bottom: 1px solid #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                }
                .panel {
                    padding: 0 18px;
                    background-color: white;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-out;
                }
                .panel.active {
                    max-height: 500px; /* Adjusted for content visibility */
                }
                .carousel-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative; /* Needed for absolute positioning of arrows */
                    display: flex;
                    align-items: center;
                    background-color: #f0f0f0;
                }
                .carousel-slide {
                    display: flex;
                    transition: transform 0.5s ease;
                    width: 100%;
                }
                .carousel-content {
                    flex: 0 0 100%;
                    text-align: center;
                }
                .arrow {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 30px;
                    height: 30px;
                    background-color: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #ccc;
                    z-index: 10;
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }
            </style>
            <div class="product-tour-container">
                <div class="banner">Product Tour Dynamic</div>
                <div class="accordion-container"></div>
                <div class="footer">Footer Content</div>
            </div>
        `;
    }

    renderProductTour(data) {
        const accordionContainer = this.shadowRoot.querySelector('.accordion-container');
        data.tours.forEach((tour, index) => {
            const accordion = document.createElement('button');
            accordion.textContent = tour.name;
            accordion.className = 'accordion';
            accordionContainer.appendChild(accordion);

            const panel = document.createElement('div');
            panel.className = 'panel';
            accordionContainer.appendChild(panel);

            const carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-container';
            panel.appendChild(carouselContainer);

            const carouselSlide = document.createElement('div');
            carouselSlide.className = 'carousel-slide';
            carouselContainer.appendChild(carouselSlide);

            tour.steps.forEach(step => {
                const content = document.createElement('div');
                content.className = 'carousel-content';
                content.innerHTML = `<p>${step.text}</p><img src="${step.imgPath}" alt="${step.imgAltText}" style="max-width: 100%; border-radius: 5px;">`;
                carouselSlide.appendChild(content);
            });

            const prevButton = document.createElement('button');
            prevButton.className = 'arrow prev';
            prevButton.innerHTML = '❮';
            carouselContainer.appendChild(prevButton);

            const nextButton = document.createElement('button');
            nextButton.className = 'arrow next';
            nextButton.innerHTML = '❯';
            carouselContainer.appendChild(nextButton);

            let currentIndex = 0;
            const maxIndex = tour.steps.length - 1;
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel(currentIndex);
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel(currentIndex);
                }
            });

            function updateCarousel(index) {
                const offset = index * 100;
                carouselSlide.style.transform = `translateX(-${offset}%)`;
            }

            accordion.addEventListener('click', () => {
                const isActive = panel.classList.contains('active');
                this.shadowRoot.querySelectorAll('.panel').forEach(p => {
                    p.classList.remove('active');
                    p.style.maxHeight = null;
                });
                if (!isActive) {
                    panel.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
    }
}

window.customElements.define('product-tour-component', ProductTourComponent);
