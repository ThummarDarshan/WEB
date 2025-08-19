document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.getElementById('faq-container');
  const banner = document.getElementById('banner');
  const closeBannerBtn = document.getElementById('close-banner');
  const lightModeBtn = document.getElementById('light-mode');
  const darkModeBtn = document.getElementById('dark-mode');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slides = document.querySelectorAll('.slider img');
  let currentSlide = 0;

  // Fetch FAQs
  fetch('faqs.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq');
        faqItem.innerHTML = `
          <div class="question">${faq.question}</div>
          <div class="answer">${faq.answer}</div>
        `;
        faqContainer.appendChild(faqItem);
      });
    });

  // Event Listeners
  closeBannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
  });

  faqContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('question')) {
      const answer = e.target.nextElementSibling;
      answer.classList.toggle('active');
    }
  });

  // lightModeBtn.addEventListener('click', () => {
  //   document.body.classList.remove('dark-mode');
  // });

  // darkModeBtn.addEventListener('click', () => {
  //   document.body.classList.add('dark-mode');
  // });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Show initial slide
  showSlide(currentSlide);
});
