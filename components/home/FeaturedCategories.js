// FeaturedCategories Component
// Displays category cards with images and shop links

import { categories } from '../../data/homeData.js';

export class FeaturedCategories {
  constructor() {
    this.categories = categories;
  }

  render() {
    return `
      <section class="featured-categories home-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Categories</h2>
            <div class="section-decoration">
              <img src="resources/diamondLine.png" alt="Decorative line">
            </div>
          </div>
          <div class="categories-grid">
            ${this.categories.map(category => this.renderCategoryCard(category)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderCategoryCard(category) {
    return `
      <div class="category-card" data-category="${category.name}">
        <img src="${category.image}" alt="${category.description}" class="category-image" loading="lazy">
        <div class="category-content">
          <h3 class="category-name">${category.name}</h3>
          <div class="category-arrow">
            <img src="resources/rightArrow-white.png" alt="Shop ${category.name}">
          </div>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        window.location.href = `searches.html?q=${encodeURIComponent(category)}`;
      });
    });
  }
}
