class ProductTourComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.loadData();
    }

   async loadData() {
    const hardcodedUrl = "https://raw.githubusercontent.com/jeff0926/cdn-deliver/main/integrated-business-planning.json";
    try {
        const response = await fetch(hardcodedUrl); // Use the hardcoded URL
        const data = await response.json();
        this.renderProductTour(data);
    } catch (error) {
        console.error('Error fetching product tour data:', error);
    }
}


    renderProductTour(data) {
        this.shadowRoot.innerHTML = `
            <style>
                /* Font family declaration */
                .product-tour-container,
                .banner,
                .footer,
                .accordion,
                .panel,
                .carousel-content {
                    font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
                }

                /* Add your CSS styles here */
                /* Container styles */
                .product-tour-container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    /*border: 1px solid black;*/
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                /* Banner styles */
                .banner {
                    background-color: #ffff;
                    color: black;
                    padding: 20px;
                    width: calc(100% - 20px);
                    margin: 0 10px 10px 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur radius, color */

                }

                /* Footer styles */
                .footer {
                    background-color: #ffff;
                    color: white;
                    padding: 20px;
                    width: calc(100% - 20px);
                    margin: 10px;
                }

                /* Accordion and Image Viewer container styles */
                .accordion-image-container {
                    display: flex;
                }

                /* Accordion container styles */
                .accordion-container {
                    width: 30%;
                    overflow-y: auto;
                    margin-right: 10px;
                }

                /* Accordion button styles */
             
                .accordion {
                    background-color: #ffff;
                    cursor: pointer;
                    padding: 18px;
                    border: none;
                    text-align: left;
                    outline: none;
                    transition: background-color 0.6s ease;
                    margin-bottom: 1px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    border-bottom: 1px solid #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.05); /* Add bottom and top drop shadow */
                    position: relative; /* Position relative for indicator */
                    font-size: 14px;
                }
                

                .accordion.active {
                    background-color: #ffff; /* Retain the same color when active */
                }

                .panel {
                    padding: 0 18px;
                    background-color: white;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-out;
                }

                .panel.active {
                    max-height: 200px; /* Adjust max-height as needed */
                }

                /* Image Viewer styles */
                .image-viewer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    margin-left: auto;
                    margin-right: 10px;
                    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
                    position: relative; /* Add position relative to create a stacking context */
                }

                /* Main image styles */
                .image-viewer img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    border-radius: 8px;
                }

                /* Carousel styles */
                .carousel-container {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end; /* Align items at the bottom of the container */
                    background-color: #fff4; /* Very light gray background color */
                }

                .carousel-slide {
                    display: flex;
                    transition: transform 0.5s ease;
                }

                .carousel-content {
                    flex: 0 0 100%;
                    box-sizing: border-box;
                    text-align: center;
                    font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif; /* Update font family */
                    padding: 0 15%;
                    text-align: left;
                    font-size: 12px;
                }

                /* Arrow styles */
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
                    z-index: 1;
                    bottom: 10px; /* Position the buttons at the bottom */
                }
                .overview-button {
                    background-color: blue;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .prev {
                    left: 10px;
                }

                .next {
                    right: 10px;
                }
                @media only screen and (max-width: 600px) {
                    /* Adjust layout for smaller screens */
                    .accordion-image-container {
                        flex-direction: column;
                    }

                    .accordion-container {
                        width: 100%;
                        margin-right: 0;
                    }

                    .image-viewer {
                        order: -1; /* Move the image viewer to the top */
                        margin-top: 10px; /* Add some margin for spacing */
                    }
                }

            </style>
            <div class="product-tour-container">
                <div class="banner">Product Tour uDex webcomponent Dynamic</div>
                <div class="accordion-image-container">
                    <div class="accordion-container">
                        <!-- Accordions will dynamically be added here -->
                    </div>
                    <div class="image-viewer">
                        <img id="main-image" src="https://www.sap.com/content/dam/site/sapcom/infographics/guided-tour/integrated-business-planning/img/scenario5/sc5-step2.jpg" alt="">
                    </div>
                </div>
                <div class="footer">Footer Content</div>
            </div>
        `;

        // Render accordions and other dynamic content here
        const accordionContainer = this.shadowRoot.querySelector('.accordion-container');

        // Render Overview accordion
        const overviewAccordion = document.createElement('button');
        overviewAccordion.textContent = data.overview.name;
        overviewAccordion.className = 'accordion';
        accordionContainer.appendChild(overviewAccordion);

        const overviewPanel = document.createElement('div');
        overviewPanel.className = 'panel';
        accordionContainer.appendChild(overviewPanel);

        const overviewContent = document.createElement('div');
        overviewContent.innerHTML = `
            <p>${data.overview.text}</p>
            <button class="overview-button">${data.overview.ctaText}</button>
        `;
        overviewPanel.appendChild(overviewContent);

        const overviewButton = overviewContent.querySelector('.overview-button');
        overviewButton.style.backgroundColor = 'blue';
        overviewButton.style.color = 'white';
        overviewButton.style.border = 'none';
        overviewButton.style.padding = '10px 20px';
        overviewButton.style.borderRadius = '5px';
        overviewButton.style.cursor = 'pointer';

        // Event listener for Overview accordion
        overviewAccordion.addEventListener('click', () => {
            const isActive = overviewAccordion.classList.contains('active');
            document.querySelectorAll('.accordion').forEach(item => {
                item.classList.remove('active');
            });
            overviewAccordion.classList.toggle('active');
            document.querySelectorAll('.panel').forEach(p => {
                p.classList.remove('active');
            });
            overviewPanel.classList.toggle('active');
            // Automatically scroll to the active accordion
            if (!isActive) {
                overviewAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Render other accordions
        data.tours.forEach(tour => {
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
                content.innerHTML = `<p>${step.text}</p>`;
                carouselSlide.appendChild(content);

                // Link clicking on a slide to update the main image
                content.addEventListener('click', () => {
                    this.shadowRoot.getElementById('main-image').src = step.content.imgPath;
                    this.shadowRoot.getElementById('main-image').alt = step.content.imgAltText;
                });
            });

            const prevButton = document.createElement('span');
            prevButton.className = 'arrow prev';
            prevButton.textContent = '❮';
            carouselContainer.appendChild(prevButton);

            const nextButton = document.createElement('span');
            nextButton.className = 'arrow next';
            nextButton.textContent = '❯';
            carouselContainer.appendChild(nextButton);

            let currentIndex = 0;
            const totalSlides = tour.steps.length;

            const updateCarousel = (index) => {
                carouselSlide.style.transform = `translateX(-${index * 100}%)`;
            };

            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel(currentIndex);
                    // Load the corresponding image into the image viewer
                    const selectedStep = tour.steps[currentIndex];
                    this.shadowRoot.getElementById('main-image').src = selectedStep.content.imgPath;
                    this.shadowRoot.getElementById('main-image').alt = selectedStep.content.imgAltText;
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateCarousel(currentIndex);
                    // Load the corresponding image into the image viewer
                    const selectedStep = tour.steps[currentIndex];
                    this.shadowRoot.getElementById('main-image').src = selectedStep.content.imgPath;
                    this.shadowRoot.getElementById('main-image').alt = selectedStep.content.imgAltText;
                }
            });

            accordion.addEventListener('click', () => {
                const isActive = accordion.classList.contains('active');
                document.querySelectorAll('.accordion').forEach((item) => {
                    item.classList.remove('active');
                });
                accordion.classList.toggle('active');
                document.querySelectorAll('.panel').forEach((p) => {
                    p.classList.remove('active');
                });
                panel.classList.toggle('active');
                // Automatically scroll to the active accordion
                if (!isActive) {
                    accordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
}

window.customElements.define('product-tour-component', ProductTourComponent);
