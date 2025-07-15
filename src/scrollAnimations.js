export function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
  
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
  
    // Observe sections
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Observe scroll reveal elements
    scrollRevealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }