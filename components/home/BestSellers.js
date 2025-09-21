// BestSellers Component
// Displays product grid with prices and quick-add buttons

import { products } from '../../data/homeData.js';

export class BestSellers {
  constructor() {
    this.products = products.slice(0, 6); // Show first 6 products
    this.currentCategory = 'Rachu'; // Default category
  }

  render() {
    return `
      <section class="best-sellers home-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">${this.currentCategory}</h2>
            <a href="searches.html?q=${encodeURIComponent(this.currentCategory)}" class="section-link">
              See all ${this.currentCategory} ➝
            </a>
          </div>
          <div class="products-grid">
            ${this.products.map(product => this.renderProductCard(product)).join('')}
          </div>
          <div class="section-footer">
            <div class="section-decoration">
              <img src="resources/diamondLine2.png" alt="Decorative line">
            </div>
            <div class="navigation-buttons">
              <button class="nav-btn nav-left" aria-label="Previous products">
                <img src="resources/leftArrow-white.png" alt="Previous">
              </button>
              <button class="nav-btn nav-right" aria-label="Next products">
                <img src="resources/rightArrow-white.png" alt="Next">
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderProductCard(product) {
    return `
      <div class="product-card" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
        <div class="product-info">
          <h3 class="product-name">${product.title}</h3>
          <div class="product-price">${product.price}</div>
          <div class="product-actions">
            <div class="rating">
              ${this.renderStars(product.rating)}
            </div>
            <button class="add-to-cart" aria-label="Add ${product.title} to cart">
              <img src="resources/navCart.png" alt="Add to cart">
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starType = i < rating ? 'starBlack.png' : 'starWhite.png';
      stars.push(`<img src="resources/${starType}" alt="Star ${i + 1}">`);
    }
    return stars.join('');
  }

  addEventListeners() {
    // Product card clicks
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-to-cart')) {
          const productId = card.dataset.productId;
          const product = this.products.find(p => p.id == productId);
          if (product) {
            window.location.href = product.href;
          }
        }
      });
    });

    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('.product-card .add-to-cart');
    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productCard = btn.closest('.product-card');
        const productId = productCard.dataset.productId;
        const product = this.products.find(p => p.id == productId);
        if (product) {
          this.addToCart(product);
        }
      });
    });

    // Navigation buttons
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    const productsGrid = document.querySelector('.products-grid');

    if (navLeft && productsGrid) {
      navLeft.addEventListener('click', () => {
        productsGrid.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      });
    }

    if (navRight && productsGrid) {
      navRight.addEventListener('click', () => {
        productsGrid.scrollTo({
          left: productsGrid.scrollWidth,
          behavior: 'smooth'
        });
      });
    }
  }

  addToCart(product) {
    // Add to cart functionality would go here
    console.log('Added to cart:', product.title);
    // You could show a toast notification or update cart UI here
  }

  // Method to change the category being displayed
  setCategory(categoryName) {
    this.currentCategory = categoryName;
    this.products = products.filter(p => p.category === categoryName).slice(0, 6);
  }
}
