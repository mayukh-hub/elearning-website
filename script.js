
document.addEventListener("DOMContentLoaded", () => {

    // 1. MOBILE NAVIGATION
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("show");

            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-xmark", isOpen);
            }

            menuBtn.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");

                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }

                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. NAVIGATION ACTIVE LINK + SMOOTH SCROLL
    const navItems = navLinks
        ? navLinks.querySelectorAll("a")
        : [];

    const navTargets = [
        ".hero",
        ".about-section",
        ".courses-section",
        ".cource-section",
        ".footer"
    ];

    navItems.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            navItems.forEach((item) =>
                item.classList.remove("active")
            );

            link.classList.add("active");

            const target = document.querySelector(navTargets[index]);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 3. HERO SLIDER
    const hero = document.querySelector(".hero");
    const heroTitle = document.querySelector(".hero-content h1");
    const heroSubtitle = document.querySelector(
        ".hero-content .subtitle"
    );
    const heroDescription = document.querySelector(".hero-content p");
    const arrows = document.querySelectorAll(".slider-arrows .arrow");

    const slides = [
        {
            title: "Get Educated Online From Your Home",
            subtitle: "BEST ONLINE COURSES",
            image: "photo1.png",
            description:
                "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus elitr."
        },
        {
            title: "Learn New Skills Anytime, Anywhere",
            subtitle: "LEARN WITH EXPERTS",
            image: "./VideoEditing.png",
            description:
                "Discover new skills, improve your knowledge, and learn at your own pace with online courses."
        },
        {
            title: "Start Your Learning Journey Today",
            subtitle: "BUILD YOUR FUTURE",
            image: "./Webdesign.png",
            description:
                "Explore exciting courses and take the next step toward your learning goals."
        }
    ];

    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(index) {
        if (!hero || !heroTitle || !heroSubtitle || !heroDescription || !slides.length) {
            return;
        }

        currentSlide = (index + slides.length) % slides.length;
        const slide = slides[currentSlide];
        const content = document.querySelector(".hero-content");

        if(content){
            content.classList.add("slide-fade-out");

            setTimeout(()=>{
        if(heroTitle) heroTitle.textContent = slide.title;
       if(heroSubtitle) heroSubtitle.textContent = slide.subtitle;
       if(heroDescription) heroDescription.textContent = slide.description;

        hero.style.backgroundImage =
            `linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)), url("${slide.image}")`;
            content.classList.remove("slide-fade-out");
    
            },250);
        }
    }

    

    function startSlider() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }

        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    if (hero && arrows.length >= 2) {
        arrows[0].setAttribute("role", "button");
        arrows[0].setAttribute("tabindex", "0");
        arrows[0].setAttribute("aria-label", "Previous slide");

        arrows[1].setAttribute("role", "button");
        arrows[1].setAttribute("tabindex", "0");
        arrows[1].setAttribute("aria-label", "Next slide");

        arrows[0].addEventListener("click", () => {
            showSlide(currentSlide - 1);
            startSlider();
        });

        arrows[1].addEventListener("click", () => {
            showSlide(currentSlide + 1);
            startSlider();
        });

        [arrows[0], arrows[1]].forEach((arrow, index) => {
            arrow.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();

                    showSlide(
                        currentSlide + (index === 0 ? -1 : 1)
                    );

                    startSlider();
                }
            });
        });

        showSlide(0);
        startSlider();
    }

    // 4. COURSE CATEGORY CARDS
    document.querySelectorAll(".cat-item").forEach((card) => {
        card.addEventListener("click", () => {
            const categoryLabel = card.querySelector(
                ".cat-overlay span"
            );

            if (!categoryLabel) return;

            const categoryName =
                categoryLabel.childNodes[0].textContent.trim();

            console.log("Selected category:", categoryName);
        });
    });

    // 5. POPULAR COURSE CARDS
    document.querySelectorAll(".course-card").forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a")) return;

            const courseTitle = card.querySelector(
                ".course-content h4"
            );

            if (courseTitle) {
                console.log(
                    "Selected course:",
                    courseTitle.textContent.trim()
                );
            }
        });
    });

    // 6. NEWSLETTER EMAIL VALIDATION
    const newsletterForm = document.querySelector(".newsletter-form");

    const emailInput = newsletterForm
        ? newsletterForm.querySelector('input[type="email"]')
        : null;

    const signupBtn = newsletterForm
        ? newsletterForm.querySelector("button")
        : null;

    if (emailInput && signupBtn) {
        emailInput.setAttribute("aria-label", "Your email address");

        signupBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter your email address.");
                emailInput.focus();
                return;
            }

            if (!emailInput.checkValidity()) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }

            alert(
                "Email validated successfully! (Demo only — no email was sent.)"
            );

            emailInput.value = "";
        });

        emailInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                signupBtn.click();
            }
        });
    }

   
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".hero, .features, .about-section, .cource-section, " +
        ".courses-section, .instructors-section, " +
        ".testimonial-section, .footer, " +
        ".feature-box, .cat-item, .course-card, " +
        ".instructor-card, .testimonial-card"
    );

    // Fallback for older browsers
    if (!("IntersectionObserver" in window)) {
        animatedElements.forEach((element) => {
            element.classList.add("section-animate", "visible");
        });
        return;
    }

    const animationObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    animatedElements.forEach((element, index) => {
        element.classList.add("section-animate");

        // Small stagger between cards
        if (
            element.matches(
                ".feature-box, .cat-item, .course-card, " +
                ".instructor-card, .testimonial-card"
            )
        ) {
            element.style.transitionDelay =
                `${(index % 4) * 100}ms`;
        }

        animationObserver.observe(element);
    });
});


    // 9. TESTIMONIAL DOTS
    const testimonialCards = document.querySelectorAll(
        ".testimonial-card"
    );

    const testimonialDots = document.querySelectorAll(
        ".testimonial-dots .dot"
    );

    testimonialDots.forEach((dot, index) => {
        dot.setAttribute("role", "button");
        dot.setAttribute("tabindex", "0");
        dot.setAttribute(
            "aria-label",
            `Show testimonial ${index + 1}`
        );

        function activateTestimonial() {
            if (!testimonialCards.length) return;

            testimonialCards.forEach((card) => {
                card.classList.remove("active-testimonial");
            });

            testimonialDots.forEach((item) => {
                item.classList.remove("active");
            });

            const selectedCard = testimonialCards[index];

            if (selectedCard) {
                selectedCard.classList.add("active-testimonial");
            }

            dot.classList.add("active");
        }
        dot.addEventListener("click", activateTestimonial);
        dot.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activateTestimonial();
            }
        });
    });

});

    // ABOUT US: Letter-by-letter heading animation
    const aboutHeading = document.querySelector(".about-text h2");

    if (aboutHeading) {
        const headingText = aboutHeading.textContent.trim();
        aboutHeading.textContent = "";
        [...headingText].forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter;
            span.classList.add("letter-animation");
            span.style.animationDelay = `${index * 0.08}s`;
            span.style.animationDuration = "1s";
            aboutHeading.appendChild(span);
        });
    }





