/* =====================================================
   SAGAR PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= CERTIFICATIONS ================= */

const certifications = [

    {
        title: "NASSCOM Certification",
        issuer: "NASSCOM",
        date: "2026",
        image: "nasscom.png",
        skills: [
            "Data Analytics",
            "Power BI",
            "Excel",
            "Business Intelligence",
            "Analytical Thinking"
        ]
    },

    {
        title: "Web Development Internship",
        issuer: "Motioncut",
        date: "2025",
        image: "motioncut.jpg",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ]
    },

    {
        title: "Python Programming",
        issuer: "Oasis Infobyte",
        date: "2025",
        image: "oasis info byte.jpg",
        skills: [
            "Python",
            "OOP",
            "File Handling"
        ]
    },

    {
        title: "Web Development",
        issuer: "Native Soft Tech",
        date: "2025",
        image: "native soft tech.jpg",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ]
    },

    {
        title: "Java Full Stack Web Development",
        issuer: "Eduskills",
        date: "2025",
        image: "edu skills.jpg",
        skills: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL",
            "AWS",
            "Azure",
            "Git"
        ]
    },

    {
        title: "Android App Development",
        issuer: "Google for Developers",
        date: "2025",
        image: "google for developers.jpg",
        skills: [
            "Java",
            "Kotlin",
            "MVVM",
            "API Integration",
            "Testing"
        ]
    }

];


function openCertModal(index) {

    const cert = certifications[index];

    if (!cert) return;

    document.getElementById("certTitle").textContent =
        cert.title;

    document.getElementById("certIssuer").textContent =
        "Issued by: " + cert.issuer;

    document.getElementById("certDate").textContent =
        "Date: " + cert.date;

    document.getElementById("certImage").src =
        cert.image;

    document.getElementById("certSkillsList").innerHTML =
        cert.skills
            .map(skill => `<span>${skill}</span>`)
            .join("");

    document.getElementById("certModal")
        .classList.add("active");

}


function closeCertModal() {

    document.getElementById("certModal")
        .classList.remove("active");

}


/* ================= PROJECTS ================= */

const projects = [

    {

        title: "AI Resume Builder",

        description:
            "An AI-powered resume generation tool that helps users create personalized, professional resumes quickly. It simplifies resume writing with smart content suggestions, structured sections, and a modern user experience for job seekers.",

        image:
            "resume.png",

        highlights: [

            "AI-assisted resume generation",

            "Clean and modern UI",

            "Tailwind-based responsive design",

            "OpenAI-powered suggestions",

            "Fast resume creation workflow"

        ],

        tags: [

            "React.js",
            "OpenAI",
            "Tailwind CSS",
            "Node.js"

        ]

    },


    {

        title: "Food Delivery Web Application",

        description:
            "A modern food ordering web application designed for smooth browsing, menu selection, cart management, and a clean user experience. It helps customers place orders quickly while the backend manages secure operations and reliable data handling.",

        image:
            "FOOD APPLICATION.png",

        highlights: [

            "Responsive food ordering interface",

            "Menu browsing and selection flow",

            "Cart and checkout experience",

            "Secure backend processing",

            "Java + Spring Boot + MySQL architecture"

        ],

        tags: [

            "React",
            "Java",
            "MySQL",
            "Spring Boot"

        ]

    },


    {

        title:
            "Sales Performance Analysis Dashboard",

        description:
            "An interactive Power BI dashboard designed to transform raw sales data into decision-ready business insights.",

        image:
            "POWER BI.png",

        highlights: [

            "Executive KPI dashboard",

            "Sales trend analysis",

            "Regional performance analysis",

            "Product-level insights",

            "Interactive filters"

        ],

        tags: [

            "Power BI",
            "SQL",
            "Excel",
            "Analytics"

        ]

    },


    {

        title:
            "IoT-Based Automated Black Box",

        description:
            "An IoT solution designed for real-time monitoring, sensor data collection and automated event-based decision making.",

        image:
            "iot-blackbox.jpeg",

        highlights: [

            "Real-time monitoring",

            "Sensor data collection",

            "Automated event detection",

            "Embedded system workflow",

            "IoT architecture"

        ],

        tags: [

            "IoT",
            "Sensors",
            "Embedded",
            "Automation"

        ]

    }

];


function openProjectModal(index) {

    const project = projects[index];

    if (!project) return;

    document.getElementById(
        "projectModalTitle"
    ).textContent = project.title;


    document.getElementById(
        "projectModalDescription"
    ).textContent = project.description;


    document.getElementById(
        "projectModalImage"
    ).src = project.image;


    document.getElementById(
        "projectModalHighlights"
    ).innerHTML =

        project.highlights
            .map(item => `<li>${item}</li>`)
            .join("");


    document.getElementById(
        "projectModalTags"
    ).innerHTML =

        project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");


    document.getElementById(
        "projectModal"
    ).classList.add("active");

}


function closeProjectModal() {

    document.getElementById(
        "projectModal"
    ).classList.remove("active");

}


/* ================= CLOSE MODALS ================= */

window.addEventListener("click", event => {

    const certModal =
        document.getElementById("certModal");

    const projectModal =
        document.getElementById("projectModal");


    if (event.target === certModal) {

        closeCertModal();

    }


    if (event.target === projectModal) {

        closeProjectModal();

    }

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCertModal();

        closeProjectModal();

    }

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector(
                    ".submit-btn"
                );

            const originalText =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML =
                "SENDING...";


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {

                            method: "POST",

                            body:
                                new FormData(
                                    contactForm
                                ),

                            headers: {

                                Accept:
                                    "application/json"

                            }

                        }
                    );


                if (response.ok) {

                    formStatus.textContent =
                        "Message sent successfully. Thank you!";

                    contactForm.reset();

                    submitButton.innerHTML =
                        "MESSAGE SENT ✓";

                } else {

                    throw new Error(
                        "Form submission failed"
                    );

                }


            } catch (error) {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

                submitButton.innerHTML =
                    originalText;

            }


            setTimeout(() => {

                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalText;

            }, 4000);

        }
    );

}