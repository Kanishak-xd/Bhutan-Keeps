// HeroSection Component
// Main hero section with headline, subcopy, and CTAs

export class HeroSection {
  constructor() {
    this.data = {
      title: "TRADITIONAL BHUTANESE KIRA",
      subtitle: "Authentic traditional attire for girls, beautifully crafted to honor Bhutan's rich heritage and timeless artistry.",
      primaryCta: {
        text: "Shop Collection",
        href: "searches.html"
      },
      secondaryCta: {
        text: "Learn More", 
        href: "#story"
      },
      image: "resources/rightBoxImg.png",
      price: "USD 2999.00"
    };
  }

  render() {
    return `
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">${this.data.title}</h1>
              <p class="hero-subtitle">${this.data.subtitle}</p>
              <div class="hero-cta-group">
                <a href="${this.data.primaryCta.href}" class="btn btn-primary">
                  ${this.data.primaryCta.text}
                </a>
                <a href="${this.data.secondaryCta.href}" class="btn btn-secondary">
                  ${this.data.secondaryCta.text}
                </a>
              </div>
            </div>
            <div class="hero-image">
              <img src="${this.data.image}" alt="Traditional Bhutanese Kira" loading="eager">
              <div class="hero-price">
                <span class="price-text">${this.data.price}</span>
                <button class="add-to-cart" aria-label="Add to cart">
                  <img src="resources/cart-white.png" alt="Add to cart">
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Add event listeners after component is mounted
  addEventListeners() {
    const addToCartBtn = document.querySelector('.hero-image .add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Add to cart functionality would go here
        console.log('Added to cart');
      });
    }
  }
}
