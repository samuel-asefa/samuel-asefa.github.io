// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Run animations after loading
                animateElements();
            }, 500);
        }, 1500);
    });

    // Custom cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.6)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Cursor grow effect on links
    const links = document.querySelectorAll('a, button, .project-card, .skill-item, .about-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.backgroundColor = 'rgba(0, 200, 255, 0.1)';
            cursorFollower.style.borderColor = 'rgba(0, 200, 255, 0.8)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.backgroundColor = 'transparent';
            cursorFollower.style.borderColor = 'var(--primary-color)';
        });
    });

    // Typed.js effect
    const options = {
        strings: ['Computer Science Enthusiast', 'Robotics Competitor', 'Full-Stack Developer', 'Electrical Engineering Student'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: false
    };
    
    if (document.querySelector('.typed-text')) {
        const typed = new Typed('.typed-text', options);
    }

    // Particles effect
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
        createParticles();
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        setInterval(() => {
            scrollIndicator.classList.toggle('bounce');
        }, 1500);
    }

    // Animate skill levels
    function animateSkillLevels() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const level = item.querySelector('.skill-level');
            const skillLevel = level.getAttribute('data-level');
            
            setTimeout(() => {
                level.style.width = skillLevel + '%';
            }, 300);
        });
    }

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Header scroll effect
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Activate nav link based on scroll position
        highlightNavOnScroll();
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Highlight active navigation link on scroll
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Animate skill levels when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillLevels();
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Create particles for hero section
    function createParticles() {
        const particlesCount = 50;
        const colors = ['#4a9aff', '#66ccff', '#7affb9', '#52fff7'];
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random positioning
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 10 + 3;
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random animation duration
            const animDuration = Math.random() * 20 + 10;
            
            // Apply styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.animationDuration = `${animDuration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (!card.classList.contains('add-project')) {
            card.addEventListener('mouseenter', () => {
                card.classList.add('active');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('active');
            });
        }
    });

    // Run initial animations on page load
    function animateElements() {
        document.body.classList.add('loaded');
        
        // Animate hero elements
        const heroText = document.querySelector('.hero-text');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroText) heroText.classList.add('animate');
        if (heroImage) heroImage.classList.add('animate');
        
        // Animate about cards
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, 300 * index);
        });
    }

    // Initialize AOS (Animate on Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for the typed-text element
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
        new Typed(typedElement, {
            strings: [
              "Computer Science Student",
              "Robotics Enthusiast",
              "Web Developer",
              "Problem Solver"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: false  // Add this line
        });
    }
  });