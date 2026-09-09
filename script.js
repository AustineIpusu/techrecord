/* =========================================================
   TECHRECORD PORTFOLIO
   Ipusu Austine A.
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /*
     * Close the mobile menu after clicking a link.
     */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");


function updateThemeIcon() {

    if (!themeIcon) {
        return;
    }


    const isDark =
        document.body.classList.contains("dark-mode");


    themeIcon.textContent =
        isDark ? "☀" : "◐";


    if (themeToggle) {

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

    }

}


/*
 * Load previously selected theme.
 */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );


        updateThemeIcon();

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


function handleBackToTop() {

    if (!backToTop) {
        return;
    }


    if (window.scrollY > 600) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

}


window.addEventListener(
    "scroll",
    handleBackToTop,
    { passive: true }
);


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".featured-project, " +
    ".project-card, " +
    ".capability, " +
    ".philosophy-point, " +
    ".stack-layer, " +
    ".about-content, " +
    ".about-image-wrapper, " +
    ".contact-box"
);


/*
 * Add the reveal class.
 */

revealElements.forEach(element => {

    element.classList.add("reveal");

});


/*
 * Use IntersectionObserver when available.
 */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

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

} else {

    /*
     * Fallback for older browsers.
     */

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================================
   FAKE PREVIEW COUNTER
=========================================================

   IMPORTANT:

   This is only a visual preview for the portfolio.

   It does NOT claim to be the real visitor count.

   Replace this later with the real API if you want the
   portfolio itself to retrieve the live AWS counter.
========================================================= */

const visitorPreview =
    document.getElementById("visitorPreview");


if (visitorPreview) {

    let previewCount = 0;

    const animatePreviewCount = () => {

        const target = 128;

        const duration = 1400;

        const startTime = performance.now();


        const update = currentTime => {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
             * Ease-out effect.
             */

            const eased =
                1 - Math.pow(
                    1 - progress,
                    3
                );


            previewCount =
                Math.floor(
                    eased * target
                );


            visitorPreview.textContent =
                previewCount.toString();


            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                visitorPreview.textContent =
                    "—";

            }

        };


        requestAnimationFrame(update);

    };


    animatePreviewCount();

}


/* =========================================================
   LINKEDIN PLACEHOLDER
=========================================================

   The LinkedIn link is intentionally left as "#"
   until you add your actual profile URL.

   This prevents the portfolio from pointing to a
   made-up or incorrect profile.
========================================================= */

const linkedinLink =
    document.getElementById("linkedinLink");


if (linkedinLink) {

    linkedinLink.addEventListener("click", event => {

        if (linkedinLink.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Add your LinkedIn profile URL in index.html first."
            );

        }

    });

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cAustine's Portfolio",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "Full-Stack Software Developer • Cloud • Backend • Infrastructure"
);