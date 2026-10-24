// navbar part

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


const navItems = navLinks.querySelectorAll("a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navItems.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// hero-section

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
        image: "photo1.png",
        description:
            "Discover new skills, improve your knowledge, and learn at your own pace with online courses."
    },
    {
        title: "Start Your Learning Journey Today",
        subtitle: "BUILD YOUR FUTURE",
        image: "photo1.png",
        description:
            "Explore exciting courses and take the next step toward your learning goals."
    }
];

const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-content h1");
const heroSubtitle = document.querySelector(".hero-content .subtitle");
const heroDescription = document.querySelector(".hero-content p");

const arrows = document.querySelectorAll(".slider-arrows .arrow");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    const slide = slides[currentSlide];

    heroTitle.textContent = slide.title;
    heroSubtitle.textContent = slide.subtitle;
    heroDescription.textContent = slide.description;

    hero.style.backgroundImage =
        `linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)), url("${slide.image}")`;
}

// Left arrow: previous slide
arrows[0].addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

// Right arrow: next slide
arrows[1].addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

// course section

const categoryCards = document.querySelectorAll('.cat-item');
categoryCards.forEach((card)=>{
    card.addEventListener('click',()=>{
        const categoryName = card.querySelector("cat-overlay span").child[0].textContent.trim();
        console.log('Selected category:',categoryName);
    });
});

// popular cards 

const courseCards = document.querySelectorAll(".course-card");
courseCards.forEach((card)=>{
    card.addEventListener("click",()=>{
        const courseName = card.querySelector(".course-content").querySelector("h3").textContent.trim();
        console.log("selected course:",courseName);
    });
});


// newsletter email validation 
const newsletterForm =
    document.querySelector(".newsletter-form");

const emailInput =
    newsletterForm.querySelector('input[type="email"]');

const signupBtn =
    newsletterForm.querySelector("button");

signupBtn.addEventListener("click", () => {
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

    alert("Email validated successfully!");

    emailInput.value = "";
});

// smooth scrooling

const section = [
    document.querySelector(".hero"),
    document.querySelector(".about-section"),
    document.querySelector(".courses-section"),
    document.querySelector(".footer")
];

navItems.forEach((link,index)=>{
    link.addEventListener("click",event=>{
        event.preventDefault();
        const target = section[index];
        if(target){
            target.scrollIntoView({
                behaviour:"smooth",
                block:"start"
            });
        }
    });
});




