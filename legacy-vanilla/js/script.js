/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - DHANUSHREE
 * Beginner-friendly, modular, and well-commented vanilla JavaScript
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SET CURRENT YEAR IN FOOTER
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. THEME TOGGLE (LIGHT / DARK MODE)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference in localStorage or default to system preference
  const savedTheme = localStorage.getItem('dhanushree_portfolio_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('dhanushree_portfolio_theme', newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE NAVIGATION MENU
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside of the navbar
    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK ON SCROLL
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);
  highlightNavOnScroll(); // Run once on load

  // --------------------------------------------------------------------------
  // 5. COPY EMAIL TO CLIPBOARD
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailTextElem = document.getElementById('emailText');
  const copyTextSpan = document.getElementById('copyText');
  const copyIconSpan = document.getElementById('copyIcon');

  if (copyEmailBtn && emailTextElem) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailTextElem.textContent.trim();

      try {
        await navigator.clipboard.writeText(email);
        
        // Show success state
        if (copyTextSpan) copyTextSpan.textContent = 'Copied!';
        if (copyIconSpan) copyIconSpan.textContent = '✓';
        copyEmailBtn.style.backgroundColor = 'var(--accent-green-light)';
        copyEmailBtn.style.borderColor = 'var(--accent-green)';
        copyEmailBtn.style.color = 'var(--accent-green)';

        // Reset after 2.5 seconds
        setTimeout(() => {
          if (copyTextSpan) copyTextSpan.textContent = 'Copy';
          if (copyIconSpan) copyIconSpan.textContent = '📋';
          copyEmailBtn.style.backgroundColor = '';
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2500);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. CONTACT FORM VALIDATION & SUBMISSION SIMULATION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Email validation helper
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Clear error on input
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (formGroup) formGroup.classList.remove('has-error');
        if (formStatus) formStatus.className = 'form-status';
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      if (!isValid) return;

      // Success feedback (Simulated student response)
      const senderName = nameInput.value.trim();
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = `Thank you, ${senderName}! Your message draft is ready. (Tip: You can connect this form with Formspree or EmailJS when hosting online!)`;
      }

      // Reset form fields
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 8. RESUME DOWNLOAD NOTICE FOR MISSING LOCAL FILE
  // --------------------------------------------------------------------------
  const resumeDownloadBtn = document.getElementById('resumeDownloadBtn');
  if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', (e) => {
      // In case the file hasn't been replaced yet, provide a gentle console tip
      console.log("Resume download initiated: Place your actual PDF in assets/Dhanushree_Resume.pdf");
    });
  }
});
