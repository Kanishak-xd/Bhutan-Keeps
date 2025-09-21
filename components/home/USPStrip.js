// USPStrip Component
// Displays unique selling points with icons and descriptions

import { uspItems } from '../../data/homeData.js';

export class USPStrip {
  constructor() {
    this.uspItems = uspItems;
  }

  render() {
    return `
      <section class="usp-strip home-section">
        <div class="container">
          <div class="usp-grid">
            ${this.uspItems.map(item => this.renderUSPItem(item)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderUSPItem(item) {
    return `
      <div class="usp-item">
        <div class="usp-icon">
          ${item.icon}
        </div>
        <h3 class="usp-title">${item.title}</h3>
        <p class="usp-description">${item.description}</p>
      </div>
    `;
  }

  addEventListeners() {
    // USP items could have click handlers if needed
    const uspItems = document.querySelectorAll('.usp-item');
    uspItems.forEach(item => {
      item.addEventListener('click', () => {
        // Could add functionality to show more details or navigate somewhere
        console.log('USP item clicked');
      });
    });
  }
}
