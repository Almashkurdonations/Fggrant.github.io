// ======================================
// MAIN.JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // Application form
    const form = document.getElementById("grantForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Application submitted successfully.\n\nPlease monitor your email (including your Spam folder) for further instructions."
            );

            window.location.href = "success.html";

        });

    }

});
