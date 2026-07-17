// Carousel Functions
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }

    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-rotate carousel every 5 seconds
// setInterval(nextSlide, 5000);

// Scroll to Contact Section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll to Projects Section
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Animated Counter for Statistics
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        const target = parseInt(element.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Trigger counter animation when section is visible
const statsSection = document.getElementById('stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    statsObserver.observe(statsSection);
}

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and items
document.querySelectorAll('.project-card, .cert-card, .edu-item, .skill-category').forEach(el => {
    observer.observe(el);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Certification Data
const certifications = [
    {
        title: "Web Development internship",
        issuer: "Motioncut",
        date: "2025",
        image: "motioncut.jpg",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Standards"]
    },
    {
        title: "Python Programming",
        issuer: "oasis infobyte",
        date: "2025",
        image: "oasis info byte.jpg",
        skills: ["Python", "OOP","File Handling"]
    },
    {
        title: "web development",
        issuer: "native soft tech",
        date: "2025",
        image: "native soft tech.jpg",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Standards"]
    },
    {
        title: "Java Full Stack Web Development",
        issuer: "Eduskills",
        date: "2025",
        image: "edu skills.jpg",
        skills: ["HTML", "CSS", "JavaScript", " React", "Java","Spring Boot","MySQl","AWS","AZURE","Git"]
    },
    {
        title: "Android App Development",
        issuer: "Google for Developers",
        date: "2025",
        image: "google for developers.jpg",
        skills: ["Java", "kotlin", "MVVM", "Testing", "API integration","ViewModel"]
    }

];

const projects = [
    {
        title: "Online Food Delivery Application",
        description: "A modern food ordering platform designed for smooth browsing, cart flow, order placement, and a polished user experience.",
        highlights: [
            "Responsive online ordering experience",
            "Restaurant listing and menu browsing",
            "Cart, checkout, and order tracking flow",
            "Scalable full-stack architecture"
        ],
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "FOOD APPLICATION.png"
    },
    {
        title: "Sales Performance Analysis Dashboard",
        description: "A business-focused analytics dashboard that transforms sales data into clear KPIs, trends, and decision-ready insights.",
        highlights: [
            "Executive dashboard with key metrics",
            "Interactive charts and trend analysis",
            "Sales performance tracking by region and product",
            "Clear visual storytelling for stakeholders"
        ],
        tags: ["Power BI", "SQL", "Analytics", "Insights"],
        image: "POWER BI.png"
    },
    {
        title: "IoT-Based Automated Black Box",
        description: "An intelligent IoT-based solution for automated monitoring, real-time sensing, and smart event-based decision making.",
        highlights: [
            "Real-time data collection and monitoring",
            "Automation-focused embedded workflow",
            "Smart trigger and detection logic",
            "Practical IoT system design"
        ],
        tags: ["IoT", "Embedded", "Sensors", "Automation"],
        image: "iot-blackbox.jpeg"
    }
];

function createPlaceholderImage(title, colors) {
    const safeTitle = (title || 'Project').replace(/</g, '&lt;');
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${colors[0]}" />
                    <stop offset="100%" stop-color="${colors[1]}" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
            <circle cx="260" cy="220" r="160" fill="rgba(255,255,255,0.18)" />
            <circle cx="930" cy="600" r="220" fill="rgba(255,255,255,0.14)" />
            <rect x="220" y="220" width="760" height="320" rx="32" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.32)" stroke-width="4" />
            <text x="600" y="395" text-anchor="middle" font-size="44" font-family="Segoe UI, Arial, sans-serif" font-weight="700" fill="white">${safeTitle}</text>
        </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setProjectImage(imageElement, project) {
    imageElement.src = project.image || createPlaceholderImage(project.title, ['#4f46e5', '#7c3aed']);
    imageElement.onerror = () => {
        imageElement.src = createPlaceholderImage(project.title, ['#0f172a', '#4338ca']);
    };
}

function populateProjectImages() {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        const imageElement = card.querySelector('.project-image');
        if (imageElement) {
            setProjectImage(imageElement, projects[index]);
        }
    });
}

function openProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');
    const singleImage = document.getElementById('projectModalImage');
    const carouselDiv = document.getElementById('dashboardCarousel');

    if (!project || !modal) return;

    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalDescription').textContent = project.description;

    // Check if this is the dashboard project (index 1)
    if (index === 1) {
        // Show carousel for dashboard
        singleImage.style.display = 'none';
        carouselDiv.style.display = 'block';
        
        document.getElementById('dashboardImg1').src = 'POWER BI.png';
        document.getElementById('dashboardImg2').src = 'sales-dashboard.png';
        
        currentDashboardImage = 0;
        showDashboardImage(0);
    } else {
        // Show single image for other projects
        carouselDiv.style.display = 'none';
        singleImage.style.display = 'block';
        singleImage.src = project.image || createPlaceholderImage(project.title, ['#4f46e5', '#7c3aed']);
        singleImage.onerror = () => {
            singleImage.src = createPlaceholderImage(project.title, ['#0f172a', '#4338ca']);
        };
    }

    const highlightsList = document.getElementById('projectModalHighlights');
    highlightsList.innerHTML = project.highlights.map(item => `<li>${item}</li>`).join('');

    const tagsContainer = document.getElementById('projectModalTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    modal.style.display = 'block';
}

// Dashboard Carousel Functions
let currentDashboardImage = 0;

function showDashboardImage(index) {
    const img1 = document.getElementById('dashboardImg1');
    const img2 = document.getElementById('dashboardImg2');
    const indicators = document.querySelectorAll('#dashboardCarousel .indicator');

    img1.classList.remove('active');
    img2.classList.remove('active');
    indicators.forEach(ind => ind.classList.remove('active'));

    if (index === 0) {
        img1.classList.add('active');
        indicators[0].classList.add('active');
    } else {
        img2.classList.add('active');
        indicators[1].classList.add('active');
    }

    currentDashboardImage = index;
}

function nextDashboardImage() {
    currentDashboardImage = (currentDashboardImage + 1) % 2;
    showDashboardImage(currentDashboardImage);
}

function prevDashboardImage() {
    currentDashboardImage = (currentDashboardImage - 1 + 2) % 2;
    showDashboardImage(currentDashboardImage);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Open Certification Modal
function openCertModal(index) {
    const cert = certifications[index];
    const modal = document.getElementById('certModal');
    
    document.getElementById('certTitle').textContent = cert.title;
    document.getElementById('certIssuer').textContent = cert.issuer;
    document.getElementById('certDate').textContent = cert.date;
    document.getElementById('certImage').src = cert.image;
    
    // Build skills list
    const skillsList = document.getElementById('certSkillsList');
    skillsList.innerHTML = cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    
    modal.style.display = 'block';
}

// Close Certification Modal
function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const certModal = document.getElementById('certModal');
    const projectModal = document.getElementById('projectModal');

    if (event.target === certModal) {
        certModal.style.display = 'none';
    }

    if (event.target === projectModal) {
        projectModal.style.display = 'none';
    }
};

populateProjectImages();