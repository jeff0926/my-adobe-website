class ProductTourComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.processData();
  }

  processData() {
    const data = JSON.parse(this.getAttribute("data-config"));
    this.renderProductTour(data);
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                body {
                    font-family: Arial, sans-serif; /* Use Arial font as the primary font */
                    font-size: 12px; /* Set the font size to 12 pixels */
                }
                .product-tour-container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    margin: 10px 0;
                    font-family: Arial, sans-serif;
                }
                .content-container {
                    display: flex;
                    width: 100%;
                    flex-grow: 1; /* Takes up all available space */
                    font-family: Arial, sans-serif;
                }
                .accordion-container {
                    flex: 1;
                    overflow-y: auto;
                    padding: 10px;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                }
                .image-viewer {
                    width: 70%; /* Adjusted width for the image viewer */
                    margin-left: 20px; /* 20px buffer */
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #ffffff;
                    border: 1px solid #ccc;
                    border-radius: 10px; /* Rounded frame */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .image-viewer img {
                    width: 100%; /* Adjusted width for the image within the viewer */
                    height: auto; /* Maintain aspect ratio */
                    border-radius: 10px; /* Rounded frame */
                    object-fit: contain; /* Ensures that the aspect ratio is maintained without distortion */
                }
                
                .banner, .footer {
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%; /* Ensures full width */
                    font-family: Arial, sans-serif;
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
                    font-family: Arial, sans-serif;
                }
                .panel {
                    padding: 0 18px;
                    background-color: white;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-out;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
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
                    align-items: flex-end; /* Align buttons to the bottom */
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                }
                .carousel-slide {
                    display: flex;
                    transition: transform 0.5s ease;
                    width: 100%;
                }
                .carousel-content {
                    flex: 0 0 100%;
                    text-align: center;
                    font-family: Arial, sans-serif;
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
                .prev, .next {
                    position: absolute;
                    bottom: 10px; /* Adjust this value as needed */
                }
                .prev {
                    left: 10px;
                }
                .next {
                    right: 10px;
                }

                
                /* XS */
@media (max-width: 639px) {
    .content-container {
        flex-direction: column;
    }
    .image-viewer {
        width: 100%;
        margin: 20px 0;
    }
}

/* S */
@media (min-width: 640px) and (max-width: 979px) {
    /* Add styles for S breakpoint */
}

/* M */
@media (min-width: 980px) and (max-width: 1279px) {
    /* Add styles for M breakpoint */
}

/* L */
@media (min-width: 1280px) and (max-width: 1599px) {
    /* Add styles for L breakpoint */
}

/* XL */
@media (min-width: 1600px) {
    /* Add styles for XL breakpoint */
}

            </style>
            <div class="product-tour-container">
                <div class="banner">Product Tour Dynamic</div>
                <div class="content-container">
                    <div class="accordion-container"></div>
                    <div class="image-viewer">
                        <img id="main-image" src="" alt="Select an item">
                    </div>
                </div>
                <div class="footer">Footer Content</div>
            </div>
        `;
  }

  renderProductTour(data) {
    const accordionContainer = this.shadowRoot.querySelector(
      ".accordion-container"
    );
    const mainImage = this.shadowRoot.querySelector("#main-image");

    data.tours.forEach((tour, index) => {
      const accordion = document.createElement("button");
      accordion.textContent = tour.name;
      accordion.className = "accordion";
      accordionContainer.appendChild(accordion);

      const panel = document.createElement("div");
      panel.className = "panel";
      accordionContainer.appendChild(panel);

      const carouselContainer = document.createElement("div");
      carouselContainer.className = "carousel-container";
      panel.appendChild(carouselContainer);

      const carouselSlide = document.createElement("div");
      carouselSlide.className = "carousel-slide";
      carouselContainer.appendChild(carouselSlide);

      tour.steps.forEach((step) => {
        const content = document.createElement("div");
        content.className = "carousel-content";
        content.textContent = step.text;
        carouselSlide.appendChild(content);

        content.addEventListener("click", () => {
          mainImage.src = step.imgPath;
          mainImage.alt = step.imgAltText;
        });
      });

      const numberOfSlides = carouselSlide.querySelectorAll(".carousel-content").length;
      if (numberOfSlides === 1) {
        carouselContainer.style.backgroundColor = "#ffffff"; // Change the background color of the carousel container
       
        console.log("Only one slide in carousel '" + tour.name + "'");
    }
    

      const prevButton = document.createElement("button");
      prevButton.className = "arrow prev";
      prevButton.innerHTML = "❮";
      carouselContainer.appendChild(prevButton);

      const nextButton = document.createElement("button");
      nextButton.className = "arrow next";
      nextButton.innerHTML = "❯";
      carouselContainer.appendChild(nextButton);

      let currentIndex = 0;
      const maxIndex = tour.steps.length - 1;

      prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel(currentIndex);
        }
      });

      nextButton.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel(currentIndex);
        }
      });

      function updateCarousel(index) {
        const offset = index * 100;
        carouselSlide.style.transform = `translateX(-${offset}%)`;
        mainImage.src = tour.steps[index].imgPath;
        mainImage.alt = tour.steps[index].imgAltText;
      }

      accordion.addEventListener("click", () => {
        const isActive = panel.classList.contains("active");
        this.shadowRoot.querySelectorAll(".panel").forEach((p) => {
          p.classList.remove("active");
          p.style.maxHeight = null;
        });
        if (!isActive) {
          panel.classList.add("active");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }
}

window.customElements.define("product-tour-component", ProductTourComponent);
