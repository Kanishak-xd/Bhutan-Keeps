// CTASection Component
// Final call-to-action section

import { ctaContent } from '../../data/homeData.js';

export class CTASection {
  constructor() {
    this.cta = ctaContent;
  }

  render() {
    return `
      <section class="cta-section home-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">${this.cta.title}</h2>
            <p class="cta-description">${this.cta.description}</p>
            <div class="cta-buttons">
              <a href="${this.cta.primaryCta.href}" class="btn btn-primary">
                ${this.cta.primaryCta.text}
              </a>
              <a href="${this.cta.secondaryCta.href}" class="btn btn-secondary">
                ${this.cta.secondaryCta.text}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  addEventListeners() {
    // CTA buttons already have href attributes, so they'll work as regular links
    // Additional functionality could be added here if needed
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Could add analytics tracking or other functionality here
        console.log('CTA button clicked:', button.textContent.trim());
      });
    });
  }
}
