// StoryTeaser Component
// Displays brand story with image and text

import { storyContent } from '../../data/homeData.js';

export class StoryTeaser {
  constructor() {
    this.story = storyContent;
  }

  render() {
    return `
      <section class="story-teaser home-section" id="story">
        <div class="container">
          <div class="story-content">
            <div class="story-text">
              <h2 class="story-title">${this.story.title}</h2>
              <p class="story-description">${this.story.description}</p>
              <a href="${this.story.ctaHref}" class="btn btn-primary">
                ${this.story.ctaText}
              </a>
            </div>
            <div class="story-image">
              <img src="${this.story.image}" alt="Bhutanese traditional textiles" loading="lazy">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  addEventListeners() {
    // Story CTA button
    const storyCta = document.querySelector('.story-teaser .btn');
    if (storyCta) {
      storyCta.addEventListener('click', (e) => {
        e.preventDefault();
        // Navigate to about page or show more story content
        console.log('Story CTA clicked');
        // You could implement smooth scroll to about section or navigate to about page
      });
    }
  }
}
