// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.sections');
//     let currentSection = 0;  
//     let isScrolling = false; 
//     window.addEventListener('wheel', (event) => {
//         if (isScrolling) return; 
//         isScrolling = true;
//         if (event.deltaY > 0) { 
//             currentSection = Math.min(currentSection + 1, sections.length - 1);
//         } else { 
//             if (currentSection === 1) {
//                 currentSection = 0;
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//             } else {             
//                 currentSection = Math.max(currentSection - 1, 0);
//             }
//         }
//         if (currentSection !== 0) {
//             sections[currentSection].scrollIntoView({ behavior: 'smooth' });
//         }
//         setTimeout(() => {
//             isScrolling = false;
//         }, 600);
//     });
// });