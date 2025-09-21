// HomePage Component
// Main component that orchestrates all homepage sections

import { HeroSection } from './HeroSection.js';
import { FeaturedCategories } from './FeaturedCategories.js';
import { BestSellers } from './BestSellers.js';
import { USPStrip } from './USPStrip.js';
import { StoryTeaser } from './StoryTeaser.js';
import { CTASection } from './CTASection.js';

export class HomePage {
  constructor() {
    this.components = {
      hero: new HeroSection(),
      categories: new FeaturedCategories(),
      bestSellers: new BestSellers(),
      uspStrip: new USPStrip(),
      storyTeaser: new StoryTeaser(),
      ctaSection: new CTASection()
    };
  }

  render() {
    return `
      ${this.components.hero.render()}
      ${this.components.categories.render()}
      ${this.components.bestSellers.render()}
      ${this.components.uspStrip.render()}
      ${this.components.storyTeaser.render()}
      ${this.components.ctaSection.render()}
    `;
  }

  mount(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    
    if (container) {
      container.innerHTML = this.render();
      this.addAllEventListeners();
    } else {
      console.error('Container not found for HomePage component');
    }
  }

  addAllEventListeners() {
    // Add event listeners for all components
    this.components.hero.addEventListeners();
    this.components.categories.addEventListeners();
    this.components.bestSellers.addEventListeners();
    this.components.uspStrip.addEventListeners();
    this.components.storyTeaser.addEventListeners();
    this.components.ctaSection.addEventListeners();
  }

  // Method to update the best sellers category
  updateBestSellersCategory(categoryName) {
    this.components.bestSellers.setCategory(categoryName);
    // Re-render the best sellers section
    const bestSellersContainer = document.querySelector('.best-sellers');
    if (bestSellersContainer) {
      bestSellersContainer.outerHTML = this.components.bestSellers.render();
      this.components.bestSellers.addEventListeners();
    }
  }
}
