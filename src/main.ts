import './style.css'
import Typed from 'typed.js';

// Type definitions
interface Skill {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

// Skills data
const skillsData = {
  programmingLanguages: [
    { name: 'HTML', icon: '/images/html.png' },
    { name: 'CSS', icon: '/images/css.png' },
    { name: 'JavaScript', icon: '/images/javascript.png' },
    { name: 'Python', icon: '/images/python.png' },
    { name: 'Java', icon: '/images/java.png' },
    { name: 'C++', icon: '/images/cpp.png' },
    { name: 'C#', icon: '/images/csharp.png' },
    { name: 'Swift', icon: '/images/swift.png' },
    { name: 'Lua', icon: '/images/lua.png' },
    { name: 'Go', icon: '/images/go.png' }
  ],
  frameworks: [
    { name: 'Tailwind', icon: '/images/tailwind.png' },
    { name: 'ReactJS', icon: '/images/react.png' },
    { name: 'NodeJS', icon: '/images/node.png' },
    { name: 'Flask', icon: '/images/flask.png' },
    { name: 'Flutter', icon: '/images/flutter.png' },
    { name: 'Unity', icon: '/images/unity.png' }
  ],
  technologies: [
    { name: 'Firebase', icon: '/images/firebase.png'},
    { name: 'Arduino', icon: '/images/arduino.png'},
    { name: 'Fusion 360', icon: '/images/fusion.png'},
    { name: 'Inventor', icon: '/images/inventor.png'},
    { name: 'OnShape', icon: '/images/onshape.png'},
    { name: '3D Printing', icon: '/images/3dprint.png'}
  ]
};

// Projects data
const projectsData: Project[] = [
  {
    title: 'RoboRoute',
    description: 'A VEX High Stakes auton and programming skills simulator.',
    image: '/images/roboroute.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://samuel-asefa.github.io/RoboRoute/src',
      github: 'https://github.com/samuel-asefa/RoboRoute'
    }
  },
  {
    title: 'Sciolytics',
    description: 'An application that stores emails, passwords, and other account information.',
    image: '/images/sciolytics.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://samuel-asefa.github.io/Sciolytics/src',
      github: 'https://github.com/samuel-asefa/Sciolytics'
    }
  },
  {
    title: 'Mathify',
    description: 'A New Jersey Math League Practice Tool.',
    image: '/images/mathify.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://samuel-asefa.github.io/Mathify',
      github: 'https://github.com/samuel-asefa/Mathify'
    }
  },
  {
    title: 'Heavy?',
    description: 'An VEX V5 weight calculation tool.',
    image: '/images/heavy.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://samuel-asefa.github.io/Heavy',
      github: 'https://github.com/samuel-asefa/Heavy'
    }
  },
  {
    title: 'Studently',
    description: 'An intuitive take on task lists.',
    image: '/images/studently.png',
    technologies: ['Svelte', 'JavaScript', 'HTML'],
    links: {
      demo: 'https://samuel-asefa.github.io/Studently',
      github: 'https://github.com/samuel-asefa/Studently'
    }
  },
  {
    title: 'Graphify',
    description: 'A simple algorithm visualizer.',
    image: '/images/graphify.png',
    technologies: ['Java', 'JPanel'],
    links: {
      github: 'https://github.com/samuel-asefa/Graphify'
    }
  }
];

// DOM loaded event listener
document.addEventListener('DOMContentLoaded', (): void => {
  initializeApp();
});

function initializeApp(): void {
  // Initialize loading screen
  handleLoadingScreen();
  
  // Initialize typed.js
  initializeTypedText();
  
  // Initialize custom cursor
  initializeCustomCursor();
  
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize scroll effects
  initializeScrollEffects();
  
  // Initialize back to top button
  initializeBackToTop();
  
  // Initialize intersection observer
  initializeIntersectionObserver();
  
  // Create particles
  createParticles();
  
  // Render skills and projects
  renderSkills();
  renderProjects();
  
  // Initialize project card effects
  initializeProjectCardEffects();
}

function handleLoadingScreen(): void {
  const loadingScreen = document.querySelector('.loading-screen') as HTMLElement;
  
  window.addEventListener('load', (): void => {
    setTimeout((): void => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout((): void => {
          loadingScreen.style.display = 'none';
          animateElements();
        }, 500);
      }
    }, 1500);
  });
}

function initializeTypedText(): void {
  const typedElement = document.querySelector('.typed-text') as HTMLElement;
  
  if (typedElement) {
    new Typed(typedElement, {
      strings: [
        'Software Developer',
        'Robotics Engineer', 
        'Tech Innovator',
        'STEM Advocate'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}

function initializeCustomCursor(): void {
  const cursor = document.querySelector('.cursor') as HTMLElement;
  const cursorFollower = document.querySelector('.cursor-follower') as HTMLElement;

  if (!cursor || !cursorFollower) return;

  document.addEventListener('mousemove', (e: MouseEvent): void => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout((): void => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 50);
  });

  document.addEventListener('mousedown', (): void => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.6)';
  });

  document.addEventListener('mouseup', (): void => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Cursor grow effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .about-card');
  
  interactiveElements.forEach((element: Element): void => {
    element.addEventListener('mouseenter', (): void => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.backgroundColor = 'rgba(0, 200, 255, 0.1)';
      cursorFollower.style.borderColor = 'rgba(0, 200, 255, 0.8)';
    });
    
    element.addEventListener('mouseleave', (): void => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.backgroundColor = 'transparent';
      cursorFollower.style.borderColor = 'var(--primary-color)';
    });
  });
}

function initializeMobileMenu(): void {
  const hamburger = document.querySelector('.hamburger') as HTMLElement;
  const navLinks = document.querySelector('.nav-links') as HTMLElement;
  
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', (): void => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach((link: Element): void => {
    link.addEventListener('click', (): void => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

function initializeSmoothScrolling(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element): void => {
    anchor.addEventListener('click', function(e: Event): void {
      e.preventDefault();
      
      const href = (this as HTMLAnchorElement).getAttribute('href');
      if (!href || href === '#') return;
      
      const targetElement = document.querySelector(href) as HTMLElement;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initializeScrollEffects(): void {
  window.addEventListener('scroll', (): void => {
    // Header scroll effect
    const header = document.querySelector('header') as HTMLElement;
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Highlight active nav link
    highlightNavOnScroll();
  });
}

function initializeBackToTop(): void {
  const backToTopBtn = document.querySelector('.back-to-top') as HTMLElement;
  
  if (!backToTopBtn) return;

  window.addEventListener('scroll', (): void => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function highlightNavOnScroll(): void {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach((section: Element): void => {
    const sectionElement = section as HTMLElement;
    const sectionTop = sectionElement.offsetTop - 100;
    const sectionHeight = sectionElement.clientHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = sectionElement.getAttribute('id') || '';
    }
  });
  
  navLinks.forEach((link: Element): void => {
    link.classList.remove('active');
    const href = (link as HTMLAnchorElement).getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

function initializeIntersectionObserver(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry): void => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Animate skill levels when skills section is visible
        if (entry.target.id === 'skills') {
          animateSkillLevels();
        }
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('section').forEach((section: Element): void => {
    observer.observe(section);
  });
}

function animateSkillLevels(): void {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach((item: Element): void => {
    const skillItem = item as HTMLElement;
    const level = skillItem.querySelector('.skill-level') as HTMLElement;
    const skillLevel = level.getAttribute('data-level');
    
    if (skillLevel) {
      setTimeout((): void => {
        level.style.setProperty('--percent', skillLevel + '%');
      }, 300);
    }
  });
}

function createParticles(): void {
  const particlesContainer = document.querySelector('.particles-container') as HTMLElement;
  if (!particlesContainer) return;

  const particlesCount = 50;
  const colors = ['#4a9aff', '#66ccff', '#7affb9', '#52fff7'];
  
  for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 10 + 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const animDuration = Math.random() * 20 + 10;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.animationDuration = `${animDuration}s`;
    
    particlesContainer.appendChild(particle);
  }
}

function renderSkills(): void {
  renderSkillCategory('programming-languages', skillsData.programmingLanguages);
  renderSkillCategory('frameworks', skillsData.frameworks);
  renderSkillCategory('technologies', skillsData.technologies);
}

function renderSkillCategory(containerId: string, skills: Skill[]): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = skills.map((skill: Skill): string => `
    <div class="skill-item" data-skill="${skill.name}">
      <img src="${skill.icon}" alt="${skill.name} icon" loading="lazy">
      <span>${skill.name}</span>
    </div>
  `).join('');
}

function renderProjects(): void {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projectsData.map((project: Project): string => `
    <article class="project-card">
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech: string): string => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="btn project-btn">Live Demo</a>` : ''}
          ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener" class="btn project-btn">GitHub</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function initializeProjectCardEffects(): void {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card: Element): void => {
    card.addEventListener('mouseenter', (): void => {
      card.classList.add('active');
    });
    
    card.addEventListener('mouseleave', (): void => {
      card.classList.remove('active');
    });
  });
}

function animateElements(): void {
  document.body.classList.add('loaded');
  
  const heroText = document.querySelector('.hero-text') as HTMLElement;
  const heroImage = document.querySelector('.hero-image') as HTMLElement;
  
  if (heroText) heroText.classList.add('animate');
  if (heroImage) heroImage.classList.add('animate');
}