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
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}